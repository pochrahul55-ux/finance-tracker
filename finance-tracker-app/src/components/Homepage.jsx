import { useEffect, useState } from "react";
import axios from "axios";
import BalanceCard from "./BalanceCard";
import IncomeCard from "./IncomeCard";
import ExpenseCard from "./ExpenseCard";
import TransactionsCard from "./TransactionsCard";
import MoneyBackground from "./MoneyBackground";
import styles from "./HomePage.module.css";
import Error from "./Error";
import Loader from "./Loader";

const BASE_URL = "http://localhost:8000";

export default function Homepage() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, currVal) => acc + currVal.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, currVal) => acc + currVal.amount, 0);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setError("");
        setIsLoading(true);
        const res = await axios.get(`${BASE_URL}/transactions`);
        setTransactions(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <>
      <MoneyBackground />
      <div className={styles.container}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <BalanceCard totalIncome={totalIncome} totalExpense={totalExpense} />
            <IncomeCard totalIncome={totalIncome} />
            <ExpenseCard totalExpense={totalExpense} />
            <TransactionsCard transactions={transactions} />
          </>
        )}
      </div>
      {error && <Error message={error} />}
    </>
  );
}
