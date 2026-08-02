import { useEffect, useState } from "react";
import axios from "axios";
import BalanceCard from "./BalanceCard";
import IncomeCard from "./IncomeCard";
import ExpenseCard from "./ExpenseCard";
import TransactionsCard from "./TransactionsCard";

const BASE_URL = "http://localhost:8000";

export default function Homepage() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");

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
        const res = await axios.get(`${BASE_URL}/transactions`);
        setTransactions(res.data);
      } catch {
        setError("Failed to fetch the data");
      }
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <BalanceCard totalIncome={totalIncome} totalExpense={totalExpense} />
      <IncomeCard totalIncome={totalIncome} />
      <ExpenseCard totalExpense={totalExpense} />
      <TransactionsCard transactions={transactions} />
    </div>
  );
}
