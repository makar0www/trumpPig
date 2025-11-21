// src/api/generatorApi.ts

// Базовый URL бэкенда.
// В .env фронта делай, например:
// VITE_API_BASE_URL="http://localhost:3000"
// или VITE_API_BASE_URL="https://твой-сервер-на-render.com"
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";

interface Meme {
  id: string;
  prompt: string;
  imageBase64: string;
  createdAt: string;
}

export interface GenerateResponse {
  imageUrl: string; // уже готовый src для <img>
}

export async function generateImage(prompt: string): Promise<GenerateResponse> {
  const res = await fetch(`${API_BASE_URL}/api/memes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    throw new Error(`Generate request failed with status ${res.status}`);
  }

  const meme = (await res.json()) as Meme;

  if (!meme.imageBase64) {
    throw new Error("Response does not contain imageBase64");
  }

  // Делаем data URL из base64, чтобы можно было вставить в <img src="...">
  const imageUrl = `data:image/png;base64,${meme.imageBase64}`;

  return { imageUrl };
}
