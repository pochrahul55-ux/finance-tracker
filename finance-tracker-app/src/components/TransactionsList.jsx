import styles from "./TransactionsList.module.css";
import { Link } from "react-router-dom";

export default function TransactionsList({ amount, category, date, type, id, onDelete }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link to={`/edit/${id}`}>
      <div className={styles.transactionItem}>
        <div className={styles.transactionLeft}>
          <div className={styles.transactionIcon}>💵</div>
          <div>
            <div className={styles.transactionName}>{category}</div>
            <div className={styles.transactionDate}>{formattedDate}</div>
          </div>
        </div>

        <div className={styles.amountWithDelete}>
          <div
            className={`${styles.transactionAmount} ${type === "income" ? styles.positive : styles.negative}`}
          >
            {type === "expense" ? "-" : "+"}${amount.toFixed(2)}
          </div>
          <button
            className={styles.deleteButton}
            onClick={(e) => {
              e.preventDefault();
              onDelete(id);
            }}
          >
            ✕
          </button>
        </div>
      </div>
    </Link>
  );
}
