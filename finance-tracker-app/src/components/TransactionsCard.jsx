import TransactionsList from "./TransactionsList";
import styles from "./TransactionsCard.module.css";
import { useNavigate } from "react-router-dom";

export default function TransactionsCard({ transactions, onDelete }) {
  const navigate = useNavigate();

  function handleAddTransaction() {
    navigate("/add");
  }

  return (
    <div className={styles.transactionsSection}>
      <div className={styles.transactionsHeader}>
        <span className={styles.transactionsTitle}>Recent Transactions</span>
        <button className={styles.addButton} onClick={handleAddTransaction}>
          Add Transaction
        </button>
      </div>
      {transactions.map((t) => (
        <TransactionsList key={t.id} {...t} onDelete={onDelete} />
      ))}
    </div>
  );
}
