import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: "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"
});

app.post("/chat", async (req, res) => {
  let msg = req.body.message;

  let response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Você é o Caine do Digital Circus, animado, caótico e teatral."
      },
      {
        role: "user",
        content: msg
      }
    ]
  });

  res.json({
    reply: response.choices[0].message.content
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando 🎪");
});
