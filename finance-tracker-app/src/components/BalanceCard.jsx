import styles from "./BalanceCard.module.css";

export default function BalanceCard({ totalIncome, totalExpense }) {
  const totalBalance = totalIncome - totalExpense;

  return (
    <div className={styles.balanceCard}>
      <div className={styles.balanceLabel}>Total Balance</div>
      <div className={styles.balanceAmount}>${totalBalance.toFixed(2)}</div>
    </div>
  );
}
