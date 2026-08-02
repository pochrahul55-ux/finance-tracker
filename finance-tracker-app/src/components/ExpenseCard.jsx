import styles from "./ExpenseCard.module.css";

export default function ExpenseCard({ totalExpense }) {
  console.log(totalExpense, typeof totalExpense);
  return (
    <div className={styles.summaryCard}>
      <div className={styles.iconWrap}>↓</div>
      <div className={styles.summaryText}>
        <span className={styles.summaryLabel}>Total Expenses</span>
        <span className={styles.summaryAmount}>${totalExpense.toFixed(2)}</span>
      </div>
    </div>
  );
}
