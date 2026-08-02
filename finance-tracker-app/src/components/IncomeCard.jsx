import styles from "./IncomeCard.module.css";

export default function IncomeCard({ totalIncome }) {
  return (
    <div className={styles.summaryCard}>
      <div className={styles.iconWrap}>↑</div>
      <div className={styles.summaryText}>
        <span className={styles.summaryLabel}>Total Income</span>
        <span className={styles.summaryAmount}>${totalIncome.toFixed(2)}</span>
      </div>
    </div>
  );
}
