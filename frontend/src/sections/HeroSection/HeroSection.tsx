import styles from "./HeroSection.module.css";
import ovalOffice from "../../assets/oval-office.png";
import piggy from "../../assets/piggy.png";
import Marquee from "../../components/Marquee/Marquee";

const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <img
        src={ovalOffice}
        alt="Oval office background"
        className={styles.background}
      />
 
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          <span className={styles.titleAccent}>QUIET PIGGY</span>
        </h1>

        <img src={piggy} alt="Character" className={styles.character} />
      </div>

      <Marquee />
    </section>
  ); 
};

export default HeroSection;
