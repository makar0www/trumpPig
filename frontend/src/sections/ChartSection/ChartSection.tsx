// ChartSection.tsx
import React from "react";
import styles from "./ChartSection.module.css";

export const ChartSection: React.FC = () => {
  return (
    <section id="dex" className={styles.chartSection}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>CHART</h2>

        <div className={styles.frame}>
          <iframe
            className={styles.placeholder} // тот же класс, что был у заглушки
            src="https://dexscreener.com/solana/HU1qaZFFLNneXjnjaqvSKekALVyGtHcbxA2ykDPHpump?embed=1&theme=dark&trades=0&tabs=0&info=0"
            title="Piggy / SOL chart"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
