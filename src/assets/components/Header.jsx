import styles from "./Header.module.css";
import logo from "../../assets/rocket.svg";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
        <h1>
          to<span>do</span>
        </h1>
      </div>
    </header>
  );
};
