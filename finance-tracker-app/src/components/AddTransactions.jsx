import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import styles from "./AddTransactions.module.css";
import addNewTransaction from "../utils/AddNewTransaction";
import { useNavigate } from "react-router-dom";

export default function AddTransactions() {
  const [date, setDate] = useState();
  const [showPicker, setShowPicker] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleForm(e) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.target);
    const amount = formData.get("amount");
    const type = formData.get("type");
    const category = formData.get("category");
    const date = formData.get("date");
    const note = formData.get("note");

    if (!amount || type === "select" || !category || !date || !note) return;

    const newTransaction = {
      amount: Number(amount),
      type,
      category,
      date,
      note,
    };

    try {
      await addNewTransaction(newTransaction);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleForm}>
        <label className={styles.label} htmlFor="amount">
          Amount
        </label>
        <input className={styles.input} type="number" name="amount" />

        <label className={styles.label} htmlFor="type">
          Type
        </label>
        <select className={styles.select} name="type">
          <option value="select">Select</option>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <label className={styles.label} htmlFor="category">
          Category
        </label>
        <input className={styles.input} type="text" name="category" />

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
        <input className={styles.input} type="text" name="note" />

        <div className={styles.buttonRow}>
          <button className={styles.primaryButton}>Add</button>
          <button className={styles.secondaryButton}>Back</button>
        </div>
      </form>
      {error && <Error message={error} />}
    </div>
  );
}
