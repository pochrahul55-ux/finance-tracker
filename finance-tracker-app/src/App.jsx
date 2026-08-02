import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import AddTransactions from "./components/AddTransactions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/add" element={<AddTransactions />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
