import styles from "./MoneyBackground.module.css";

export default function MoneyBackground() {
  const bills = Array.from({ length: 12 });

  return (
    <div className={styles.moneyBackground}>
      {bills.map((_, i) => (
        <span key={i} className={styles.bill}>
          $
        </span>
      ))}
    </div>
  );
}