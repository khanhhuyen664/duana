import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { GoogleGenAI, Type } from '@google/genai';

admin.initializeApp();

export const parseImage = functions.https.onCall(async (data, context) => {
  // Ensure requests can provide the payload
  const { imageBase64, mimeType } = data || {};
  if (!imageBase64 || !mimeType) {
    throw new functions.https.HttpsError('invalid-argument', 'Thiếu dữ liệu hình ảnh hoặc mimeType.');
  }

  // Retrieve Gemini API key from environment variables or Firebase Config
  const geminiApiKey = process.env.GEMINI_API_KEY || functions.config().gemini?.key;
  if (!geminiApiKey) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'Vui lòng cấu hình API Key cho Gemini (GEMINI_API_KEY) trong Cloud Functions.'
    );
  }

  try {
    const ai = new GoogleGenAI({ apiKey: geminiApiKey });
    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');

    const prompt = `Bạn là một chuyên gia ngôn ngữ tiếng Anh. Hãy phân tích hình ảnh đề thi này và trích xuất tất cả các câu hỏi trắc nghiệm dưới dạng cấu trúc JSON chi tiết.
Chuyển đổi từng câu hỏi tìm thấy thành định dạng đối tượng sau:
{
  "id": "q_" + một chuỗi số ngẫu nhiên độc nhất (ví dụ "q_38271"),
  "type": "mcq",
  "questionText": "Nội dung câu hỏi bằng tiếng Anh",
  "options": [
    { "key": "A", "text": "Lựa chọn A" },
    { "key": "B", "text": "Lựa chọn B" },
    { "key": "C", "text": "Lựa chọn C" },
    { "key": "D", "text": "Lựa chọn D" }
  ],
  "correctAnswer": "A hoặc B hoặc C hoặc D tùy thuộc đáp án đúng"
}
Lưu ý: Chỉ trả về mảng các câu hỏi hợp lệ trích xuất từ ảnh. Đảm bảo đúng định dạng JSON yêu cầu.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: [
        {
          inlineData: {
            data: cleanBase64,
            mimeType: mimeType
          }
        },
        prompt
      ],
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              type: { type: Type.STRING },
              questionText: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    key: { type: Type.STRING },
                    text: { type: Type.STRING }
                  },
                  required: ['key', 'text']
                }
              },
              correctAnswer: { type: Type.STRING }
            },
            required: ['id', 'type', 'questionText', 'options', 'correctAnswer']
          }
        }
      }
    });

    if (!response.text) {
      throw new Error('Không nhận được kết quả phân tích từ AI.');
    }

    const questions = JSON.parse(response.text.trim());
    return { success: true, questions };
  } catch (err: any) {
    console.error('Gemini parse error:', err);
    throw new functions.https.HttpsError(
      'internal',
      `Lỗi khi phân tích đề thi bằng AI: ${err.message || err}`
    );
  }
});
