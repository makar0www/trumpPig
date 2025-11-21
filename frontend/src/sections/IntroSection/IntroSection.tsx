// src/sections/IntroSection/IntroSection.tsx
import styles from "./IntroSection.module.css";
import piggy from "../../assets/piggy.png";

const IntroSection: React.FC = () => {
  return (
    <section className={styles.section}>
      {/* слева персонаж */}
      <img
        src={piggy}
        alt="Quiet piggy"
        className={styles.character}
      />

      {/* справа текстовый блок */}
      <div className={styles.content}>
        <h2 className={styles.title}>QUIET, PIGGY</h2>
        <p className={styles.subtitle}>
          TRUMP TOLD A REPORTER QUIET, PIGGY.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
