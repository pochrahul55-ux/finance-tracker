import axios from "axios";

const BASE_URL = "http://localhost:8000";

export default async function addNewTransaction(newTransaction) {
  await axios.post(`${BASE_URL}/transactions`, newTransaction);

  return null;
}
