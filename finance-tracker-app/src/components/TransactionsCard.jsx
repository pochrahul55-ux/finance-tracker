import TransactionsList from "./TransactionsList";

export default function TransactionsCard({ transactions }) {
  return (
    <>
      <h3>Recent Transactions</h3>
      {transactions.map((transaction) => (
        <TransactionsList
          key={transaction.id}
          amount={transaction.amount}
          category={transaction.category}
          date={transaction.date}
          type={transaction.type}
        />
      ))}
    </>
  );
}
