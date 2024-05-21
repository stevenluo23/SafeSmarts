const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/translate-and-speak", async (req, res) => {
  const { lessonModule } = req.body;

  try {
    const allText = [
      lessonModule.title,
      ...lessonModule.sections.map((section) =>
        [
          section.heading,
          ...(Array.isArray(section.paragraphs) ? section.paragraphs : []),
          ...(section.subSections ? section.subSections.flatMap((sub) => [sub.subHeading, ...(Array.isArray(sub.paragraphs) ? sub.paragraphs : [])]) : []),
        ].join(". ")
      ),
    ].join(". ");

    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: `Translate the following English text to Spanish in the shortest way possible: ${allText}`,
      max_tokens: 3700,
    });
    const translatedText = response.choices[0].text.trim();

    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: translatedText,
      language: "es",
      format: "mp3",
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());
    const audioUrl = "data:audio/mp3;base64," + buffer.toString("base64");

    res.json({ audioUrl });
  } catch (error) {
    console.error("Error generating speech:", error);
    res.status(500).json({ error: "Error generating speech" });
  }
});

module.exports = router;
