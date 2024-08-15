import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
