import styles from "./PromoBar.module.css";

interface PromoBarProps {
  text: string;
}

export function PromoBar({ text }: PromoBarProps) {
  return (
    <div className={styles.promoBar}>
      <p>{text}</p>
      <a href="#work">Découvrir</a>
    </div>
  );
}
