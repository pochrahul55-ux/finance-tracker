import styles from "./TransactionsList.module.css";

export default function TransactionsList({ amount, category, date, type }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className={styles.transactionItem}>
      <div className={styles.transactionLeft}>
        <div className={styles.transactionIcon}>💵</div>
        <div>
          <div className={styles.transactionName}>{category}</div>
          <div className={styles.transactionDate}>{formattedDate}</div>
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
