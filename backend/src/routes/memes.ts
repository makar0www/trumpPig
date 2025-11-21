import { FastifyInstance } from "fastify";
import { generateImage } from "../services/flux.service";
import { addMeme, getMemes } from "../services/meme.service";

export default async function memesRoutes(fastify: FastifyInstance) {
  // Список мемов
  fastify.get("/memes", async () => {
    return getMemes();
  });

  // Создание мема
  fastify.post("/memes", async (request, reply) => {
    const body = request.body as { prompt?: string };
    const prompt = body?.prompt?.trim();

    if (!prompt) {
      reply.code(400);
      return { error: "Prompt is required" };
    }

    try {
      const base64 = await generateImage(prompt);
      const meme = addMeme(prompt, base64);
      return meme;
    } catch (err) {
      request.log.error({ err }, "Error generating meme");
      reply.code(500);
      return { error: "Error generating image" };
    }
  });
}
