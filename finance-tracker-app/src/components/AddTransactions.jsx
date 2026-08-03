import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import styles from "./AddTransactions.module.css";
import addNewTransaction from "../utils/AddNewTransaction";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
import updateTransaction from "../utils/UpdateTransaction";

export default function AddTransactions({ transaction }) {
  const [transactionInfo, setTransactionInfo] = useState({
    amount: transaction?.amount || "",
    type: transaction?.type || "select",
    category: transaction?.category || "",
    note: transaction?.note || "",
  });

  const [date, setDate] = useState(transaction?.date ? new Date(transaction.date) : undefined);
  const [showPicker, setShowPicker] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleForm(e) {
    e.preventDefault();
    setError(null);

    // const formData = new FormData(e.target);
    // const amount = formData.get("amount");
    // const type = formData.get("type");
    // const category = formData.get("category");
    // const date = formData.get("date");
    // const note = formData.get("note");

    if (
      !transactionInfo.amount ||
      transactionInfo.type === "select" ||
      !transactionInfo.category ||
      !date ||
      !transactionInfo.note
    )
      return;

    const newTransaction = {
      amount: Number(transactionInfo.amount),
      type: transactionInfo.type,
      category: transactionInfo.category,
      date,
      note: transactionInfo.note,
    };

    try {
      if (transaction?.id) {
        await updateTransaction(transaction.id, newTransaction);
      } else {
        await addNewTransaction(newTransaction);
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  function handleBack() {
    navigate("/");
  }

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleForm}>
        <label className={styles.label} htmlFor="amount">
          Amount
        </label>
        <input
          value={transactionInfo.amount}
          className={styles.input}
          type="number"
          name="amount"
          onChange={(e) => setTransactionInfo({ ...transactionInfo, amount: e.target.value })}
        />

        <label className={styles.label} htmlFor="type">
          Type
        </label>
        <select
          value={transactionInfo.type}
          className={styles.select}
          name="type"
          onChange={(e) => setTransactionInfo({ ...transactionInfo, type: e.target.value })}
        >
          <option value="select">Select</option>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <label className={styles.label} htmlFor="category">
          Category
        </label>
        <input
          value={transactionInfo.category}
          className={styles.input}
          type="text"
          name="category"
          onChange={(e) => setTransactionInfo({ ...transactionInfo, category: e.target.value })}
        />

        <label className={styles.label} htmlFor="date">
          Date
        </label>
        <div className={styles.datePickerWrapper}>
          <input
            className={styles.input}
            type="text"
            name="date"
            readOnly
            value={date ? date.toLocaleDateString() : ""}
            onClick={() => setShowPicker(!showPicker)}
            onChange={(e) => setTransactionInfo({ ...transactionInfo, date: e.target.value })}
            placeholder="Select a date"
          />
          {showPicker && (
            <div className={styles.datePickerPopover}>
              <DayPicker
                mode="single"
                selected={date}
                onSelect={(selectedDate) => {
                  setDate(selectedDate);
                  setShowPicker(false);
                }}
              />
            </div>
          )}
        </div>

        <label className={styles.label} htmlFor="note">
          Note
        </label>
        <input
          value={transactionInfo.note}
          className={styles.input}
          type="text"
          name="note"
          onChange={(e) => setTransactionInfo({ ...transactionInfo, note: e.target.value })}
        />

        <div className={styles.buttonRow}>
          <button className={styles.primaryButton}>Add</button>
          <button className={styles.secondaryButton} type="button" onClick={handleBack}>
            Back
          </button>
        </div>
      </form>
      {error && <Error message={error} />}
    </div>
  );
}
