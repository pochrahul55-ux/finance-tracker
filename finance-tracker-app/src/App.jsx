import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import AddTransactions from "./components/AddTransactions";
import EditTransaction from "./components/EditTransaction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/add" element={<AddTransactions />}></Route>
        <Route path="/edit/:id" element={<EditTransaction />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
