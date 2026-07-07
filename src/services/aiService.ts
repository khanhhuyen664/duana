export interface ParsedQuestion {
  id: string;
  type: 'mcq';
  questionText: string;
  options: Array<{ key: string; text: string }>;
  correctAnswer: string;
}

/**
 * Calls the local server API endpoint '/api/parse-image' to perform Gemini AI image analysis
 * and extract multiple choice questions.
 */
export async function parseImageWithAI(imageBase64: string, mimeType: string): Promise<ParsedQuestion[]> {
  try {
    const response = await fetch('/api/parse-image', {
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
