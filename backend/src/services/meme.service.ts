interface Meme {
  id: string;
  prompt: string;
  imageBase64: string;
  createdAt: string;
}

const memes: Meme[] = [];
const MAX_MEMES = 20; // чтобы сервер не пух от бесконечного массива

export function addMeme(prompt: string, imageBase64: string): Meme {
  const meme: Meme = {
    id: Date.now().toString(), // для MVP хватит
    prompt,
    imageBase64,
    createdAt: new Date().toISOString(),
  };

  // новые мемы добавляем в начало
  memes.unshift(meme);

  // ограничиваем длину списка
  if (memes.length > MAX_MEMES) {
    memes.pop();
  }

  return meme;
}

export function getMemes(): Meme[] {
  return memes;
}
