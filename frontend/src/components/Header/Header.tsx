import { useState } from "react";
import styles from "./Header.module.css";
import piggy from "../../assets/piggy.png";
import Button from "../Button/Button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* основная таблетка-хедер (десктоп + круглая кнопка на мобиле) */}
      <div className={styles.shell}>
        {/* логотип слева — только десктоп */}
        <div className={styles.logoGroup}>
          <img src={piggy} alt="Logo" className={styles.logoIcon} />
        </div>

        {/* навигация по центру — только десктоп */}
        <nav className={styles.nav}>
          <a href="#hero" className={styles.link}>
            QUIET,PIGGY
          </a>
          <a
            href="https://x.com/i/communities/1990687348791853131"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a href="#general" className={styles.link}>
            GENERAL
          </a>
          <a href="#tokenomics" className={styles.link}>
            TOKENOMICS
          </a>
          <a
            href="https://dexscreener.com/solana/HU1qaZFFLNneXjnjaqvSKekALVyGtHcbxA2ykDPHpump"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            DEX
          </a>
        </nav>

        {/* BUY — только десктоп */}
        <div className={styles.desktopButton}>
          <Button link="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=HU1qaZFFLNneXjnjaqvSKekALVyGtHcbxA2ykDPHpump" />
        </div>

        {/* круглая кнопка с пигги + бургер — только мобилка */}
        <button
          type="button"
          className={styles.mobileTrigger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <img src={piggy} alt="" className={styles.mobileIcon} />
          <span className={styles.mobileBurger}>
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* выпадающее мобильное меню */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNav} onClick={closeMobileMenu}>
          <a href="#hero" className={styles.mobileLink}>
            QUIET,PIGGY
          </a>
          <a
            href="https://x.com/i/communities/1990687348791853131"
            className={styles.mobileLink}
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a href="#general" className={styles.mobileLink}>
            GENERAL
          </a>
          <a href="#tokenomics" className={styles.mobileLink}>
            TOKENOMICS
          </a>
          <a
            href="https://dexscreener.com/solana/HU1qaZFFLNneXjnjaqvSKekALVyGtHcbxA2ykDPHpump"
            className={styles.mobileLink}
            target="_blank"
            rel="noreferrer"
          >
            DEX
          </a>

          <div className={styles.mobileButtonWrapper}>
            <Button link="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=HU1qaZFFLNneXjnjaqvSKekALVyGtHcbxA2ykDPHpump" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
