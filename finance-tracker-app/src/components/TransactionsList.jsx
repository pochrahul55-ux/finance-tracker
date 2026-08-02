import styles from "./TransactionsList.module.css";

export default function TransactionsList({ amount, category, date, type }) {
  return (
    <div className={styles.transactionItem}>
      <div className={styles.transactionLeft}>
        <div className={styles.transactionIcon}>💵</div>
        <div>
          <div className={styles.transactionName}>{category}</div>
          <div className={styles.transactionDate}>{date}</div>
        </div>
      </div>
      <div
        className={`${styles.transactionAmount} ${type === "income" ? styles.positive : styles.negative}`}
      >
        {type === "expense" ? "-" : "+"}${amount.toFixed(2)}
      </div>
    </div>
  );
}
