import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>Joel Toulan</div>
      <nav className={styles.nav}>
        <a href="#services">Services</a>
        <a href="#work">Programme</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
