import { getGlobalSettings } from "./settingsService";

export interface ParsedQuestion {
  id: string;
  type: 'mcq';
  questionText: string;
  options: Array<{ key: string; text: string }>;
  correctAnswer: string;
}

/**
 * Calls the local server API endpoint '/api/parse-image' to perform Gemini AI image analysis
 * and extract multiple choice questions. Supports external api routing for static hosting.
 */
export async function parseImageWithAI(imageBase64: string, mimeType: string): Promise<ParsedQuestion[]> {
  try {
    const settings = await getGlobalSettings();
    const apiUrlBase = (settings.externalApiUrl || '').trim();

    // Check if we are running in static hosting (like GitHub Pages) and don't have a configured backend
    if (!apiUrlBase && window.location.hostname.includes("github.io")) {
      throw new Error(
        "Tính năng AI phân tích ảnh yêu cầu máy chủ backend độc lập. Vì GitHub Pages chỉ hỗ trợ trang web tĩnh, bạn cần deploy backend (Express) lên dịch vụ như Render/Railway/Vercel và cấu hình 'Đường dẫn API Backend cho AI' trong mục Cấu hình của Trang Quản Trị."
      );
    }

    const fetchUrl = apiUrlBase ? `${apiUrlBase.replace(/\/$/, '')}/api/parse-image` : '/api/parse-image';

    const response = await fetch(fetchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageBase64, mimeType }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.questions || [];
  } catch (error: any) {
    console.error('Error calling parse-image API:', error);
    throw new Error(
      error.message || 'Lỗi khi kết nối đến API phân tích hình ảnh. Vui lòng thử lại sau.'
    );
  }
}
