// src/components/ContractToast/ContractToast.tsx
import React, { useState } from "react";
import styles from "./ContractToast.module.css";

interface ContractToastProps {
  address: string;
}

const ContractToast: React.FC<ContractToastProps> = ({ address }) => {
  const [hidden, setHidden] = useState(false);
  const [copied, setCopied] = useState(false);

  if (hidden) return null;

  const handleCopy = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(address)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500); // 1.5 сек “скопировано”
        })
        .catch(() => {});
    }
  };

  return (
    <div className={styles.toast}>
      <button
        type="button"
        className={styles.close}
        onClick={() => setHidden(true)}
      >
        ×
      </button>

      <div className={styles.text} onClick={handleCopy}>
        <span className={styles.label}>CA:</span>
        <span className={styles.value}>{address}</span>

        {copied && (
          <span className={styles.copied}>COPIED</span>
        )}
      </div>
    </div>
  );
};

export default ContractToast;
