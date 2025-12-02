import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateAdCopy = async (productName: string, audience: string, platform: string): Promise<string> => {
  try {
    const prompt = `
      Act as a professional digital marketing copywriter.
      Write a compelling, high-converting ad copy for the following:
      Product/Service: ${productName}
      Target Audience: ${audience}
      Platform: ${platform}
      
      Keep it punchy, include emojis if appropriate for the platform, and add a strong Call to Action (CTA).
      Limit to 100 words.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate copy. Please try again.";
  } catch (error) {
    console.error("Error generating ad copy:", error);
    return "Error generating content. Please check your API key or try again later.";
  }
};