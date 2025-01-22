import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      });
      res.status(200).json({ reply: response.data.choices[0].message.content });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
