import TransactionsList from "./TransactionsList";
import styles from "./TransactionsCard.module.css";

export default function TransactionsCard({ transactions }) {
  return (
    <div className={styles.transactionsSection}>
      <div className={styles.transactionsHeader}>
        <span className={styles.transactionsTitle}>Recent Transactions</span>
      </div>
      {transactions.map((t) => (
        <TransactionsList key={t.id} {...t} />
      ))}
    </div>
  );
}
