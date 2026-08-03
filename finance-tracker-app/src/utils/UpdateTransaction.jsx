import axios from "axios";
const BASE_URL = "http://localhost:8000";

export default async function updateTransaction(id, updatedTransaction) {
  await axios.put(`${BASE_URL}/transactions/${id}`, updatedTransaction);
  return null;
}
