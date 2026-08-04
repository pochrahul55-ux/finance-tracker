import axios from "axios";
const BASE_URL = "http://localhost:8000";

export default async function deleteTransaction(id) {
  console.log("Deleting id:", id);
  const res = await axios.delete(`${BASE_URL}/transactions/${id}`);
  console.log(res.data);

  return null;
}
