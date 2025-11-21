import styles from "./Marquee.module.css";
import piggy from "../../assets/piggy.png";

const Marquee = () => {
  const phrase = "QUIET, PIGGY";

  return (
    <div className={styles.marquee}>
      <div className={styles.inner}>
        {/* первая дорожка */}
        <div className={styles.track}>
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} className={styles.item}>
              <span className={styles.text}>{phrase}</span>
              <img src={piggy} alt="" className={styles.icon} />
            </span>
          ))}
        </div>

        {/* вторая дорожка для бесшовной прокрутки */}
        <div className={styles.track} aria-hidden="true">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} className={styles.item}>
              <span className={styles.text}>{phrase}</span>
              <img src={piggy} alt="" className={styles.icon} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
