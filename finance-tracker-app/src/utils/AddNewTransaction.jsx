import axios from "axios";

const BASE_URL = "http://localhost:8000";

export default async function addNewTransaction(newTransaction) {
  try {
    await axios.post(`${BASE_URL}/transactions`, newTransaction);
  } catch (err) {
    console.log(err.message);
  }

  return null;
}
