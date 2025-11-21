// src/components/Header/MobileHeader.tsx
import { useState } from "react";
import styles from "./Header.module.css";
import piggy from "../../assets/piggy.png";
import Button from "../Button/Button";

const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className={styles.mobileWrapper}>
      {/* круглая кнопка с пигги + бургер */}
      <button
        type="button"
        className={styles.mobileTrigger}
        onClick={toggleMenu}
      >
        <img src={piggy} alt="Menu" className={styles.mobilePig} />

        <span className={styles.burger}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {/* выпадающее меню */}
      <nav
        className={`${styles.mobileMenu} ${
          isOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <a href="#hero" onClick={handleLinkClick}>
          QUIET,PIGGY
        </a>
        <a
          href="https://x.com/i/communities/1990687348791853131"
          onClick={handleLinkClick}
        >
          X
        </a>
        <a href="#general" onClick={handleLinkClick}>
          GENERAL
        </a>
        <a href="#tokenomics" onClick={handleLinkClick}>
          TOKENOMICS
        </a>
        <a
          href="https://dexscreener.com/solana/HU1qaZFFLNneXjnjaqvSKekALVyGtHcbxA2ykDPHpump"
          onClick={handleLinkClick}
        >
          DEX
        </a>

        <Button
          link="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=HU1qaZFFLNneXjnjaqvSKekALVyGtHcbxA2ykDPHpump"
        />
      </nav>
    </div>
  );
};

export default MobileHeader;
