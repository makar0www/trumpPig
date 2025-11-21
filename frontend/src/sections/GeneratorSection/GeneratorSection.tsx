// src/sections/GeneratorSection/GeneratorSection.tsx
import { useState, type FC } from "react";
import styles from "./GeneratorSection.module.css";
import { generateImage } from "../../api/generatorApi";

const GeneratorSection: FC = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trimmedPrompt = prompt.trim();

  const handleGenerate = async () => {
    if (!trimmedPrompt || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const res = await generateImage(trimmedPrompt);
      setImageUrl(res.imageUrl);
    } catch (e) {
      console.error(e);
      setError("SOMETHING WENT WRONG. PLEASE TRY AGAIN.");
      setImageUrl(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!imageUrl) return;

    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "quiet-piggy.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="general" className={styles.section}>
      <p className={styles.subtitle}>
        TRUMP TOLD A REPORTER QUIET, PIGGY.
      </p>

      <h2 className={styles.title}>PFP GENERATOR</h2>

      <div className={styles.card}>
        {/* ЛЕВАЯ КОЛОНКА: текст + кнопки */}
        <div className={styles.left}>
          <label className={styles.label} htmlFor="prompt">
            ENTER YOUR TEXT:
          </label>

          <textarea
            id="prompt"
            className={styles.textarea}
            placeholder="Write what you want here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <div className={styles.buttonsRow}>
            <button
              className={styles.buttonPrimary}
              onClick={handleGenerate}
              disabled={isLoading || !trimmedPrompt}
            >
              {isLoading ? "GENERATING..." : "GENERATE"}
            </button>

            <button
              className={styles.buttonSecondary}
              onClick={handleDownload}
              disabled={!imageUrl}
            >
              DOWNLOAD IMAGE
            </button>
          </div>

          {error && <p className={styles.error}>{error}</p>}
        </div>

        {/* ПРАВАЯ КОЛОНКА: картинка / placeholder */}
        <div className={styles.right}>
          <div className={styles.resultBox}>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Generated Quiet Piggy"
                className={styles.resultImage}
              />
            ) : (
              <span className={styles.resultPlaceholder}>
                YOUR GENERATED IMAGE WILL APPEAR HERE
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneratorSection;
