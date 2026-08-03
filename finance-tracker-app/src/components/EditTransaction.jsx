import { useParams } from "react-router-dom";
import AddTransactions from "./AddTransactions";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";

const BASE_URL = "http://localhost:8000";

export default function EditTransaction() {
  const [transaction, setTransaction] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError("");
        setIsLoading(true);
        const res = await axios.get(`${BASE_URL}/transactions/${id}`);
        setTransaction(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {isLoading && <Loader /> }
      {error && <Error message={error} />}
      {!isLoading && !error && <AddTransactions transaction={transaction} />}
    </>
  );
}
