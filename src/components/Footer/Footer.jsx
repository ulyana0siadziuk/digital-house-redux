import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.brand}>Digital House</p>
      <p className={styles.text}>Цифровые товары для умного дома © 2026</p>
    </footer>
  );
}

export default Footer;
