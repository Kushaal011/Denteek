import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SERVICES, CONTACT_INFO, TEAM } from '../constants';

// Initialize Gemini
// Note: In a real production app, ensure your API key is restricted or use a backend proxy.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are 'Denteek AI', a helpful and friendly virtual assistant for Denteek Dental Clinic in Philadelphia.
Use the following context to answer user questions:

**Clinic Info:**
- Name: Denteek
- Location: ${CONTACT_INFO.address}
- Phone: ${CONTACT_INFO.phone}
- Hours: ${JSON.stringify(CONTACT_INFO.hours)}

**Services:**
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

**Doctors:**
${TEAM.map(d => `- ${d.name} (${d.role}): ${d.specialty}`).join('\n')}

**Guidelines:**
- Be polite, professional, and concise.
- If a user asks for medical advice, give a general answer but ALWAYS advise them to book an appointment for a professional diagnosis.
- If asked to book an appointment, guide them to call the number or visit the contact page.
- Do not make up prices not listed (Implants start at $1200, Whitening $199).
- Keep answers under 100 words.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm sorry, my connection to the server is currently unavailable (Missing API Key). Please call our office directly.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "I apologize, I couldn't process that request. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please call us at (215) 555-0123.";
  }
};