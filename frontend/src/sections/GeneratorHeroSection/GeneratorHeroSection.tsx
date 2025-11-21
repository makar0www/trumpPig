import styles from "./GeneratorHeroSection.module.css";
import preview from "../../assets/human-pig.png"; // твоя картинка с пигги в овальном офисе

const GeneratorHeroSection: React.FC = () => {
  return (
    <section id="pfp" className={styles.section}>
      <h2 className={styles.title}>PFP GENERATOR</h2>

      <div className={styles.card}>
        <img
          src={preview}
          alt="PFP generator preview"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default GeneratorHeroSection;
