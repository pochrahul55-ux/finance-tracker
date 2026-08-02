import TransactionsList from "./TransactionsList";
import styles from "./TransactionsCard.module.css";

export default function TransactionsCard({ transactions }) {
  return (
    <div className={styles.transactionsSection}>
      <div className={styles.transactionsHeader}>
        <span className={styles.transactionsTitle}>Recent Transactions</span>
        <button className={styles.addButton}>Add Transaction</button>
      </div>
      {transactions.map((t) => (
        <TransactionsList key={t.id} {...t} />
      ))}
    </div>
  );
}
