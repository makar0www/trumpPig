import styles from "./Button.module.css";

type ButtonProps = {
  link: string;
};

const Button: React.FC<ButtonProps> = ({ link }) => {
  return (
    <a       
    href={link}
    className={styles.Btn}
    target="_blank"
    rel="noreferrer noopener">
      BUY
    </a>
  );
};

export default Button;
