import styles from "./TokenomicsSection.module.css";
import piggy from "../../assets/piggy.png";

export const TokenomicsSection: React.FC = () => {
  return (
    <section id="tokenomics" className={styles.tokenomics}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>TOKENOMICS</h2>

        {/* центральная часть: слева текст, справа персонаж */}
        <div className={styles.midRow}>
          <div className={styles.textBlock}>
            <p className={styles.item}>100% TO COMMUNITY</p>
            <p className={styles.item}>LP BURNED</p>
          </div>

          <img src={piggy} alt="Piggy" className={styles.character} />
        </div>

        {/* нижняя часть: TAX и контракт */}
        <div className={styles.bottomBlock}>
          <p className={styles.tax}>TAX 0</p>

          <div className={styles.contract}>
            <div className={styles.contractLabel}>CONTRACT ADDRESS</div>
            <div className={styles.contractValue}>HU1qaZFFLNnegttnjaqvSKekALVyGtHcbxA2ykDPHpump</div>
          </div>
        </div>
      </div>
    </section>
  );
};
 