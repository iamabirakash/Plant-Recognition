import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export async function analyzePlant(imageFile) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const imageData = await fileToGenerativePart(imageFile);

  const result = await model.generateContent([
    "Analyze this plant image and provide details about the plant species, care instructions, and any interesting facts.",
    imageData,
  ]);

  const response = await result.response;
  const text = response.text();
  return text;
}

async function fileToGenerativePart(file) {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.readAsDataURL(file);
  });

  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
}