import styles from "./TokenomicsSection2.module.css";
import piggy from "../../assets/piggy.png";

export const TokenomicsSection2: React.FC = () => {
  return (
    <section id="tokenomics" className={styles.tokenomics}>
      <div className={styles.overlay}>
        {/* центральная часть: слева текст, справа персонаж */}
        <div className={styles.midRow}>
          <div className={styles.textBlock}>
            <p className={styles.item}>QUIET, PIGGY.</p>
            <p className={styles.item}>TRUMP TOLD A REPORTER.</p>
            <p className={styles.item}>QUIET, PIGGY</p>
          </div>

          <img src={piggy} alt="Piggy" className={styles.character} />
        </div>
      </div>
    </section>
  );
};
 

// export default TokenomicsSection2;