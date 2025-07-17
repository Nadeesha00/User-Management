// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserTable from "./components/moleculas/UserTable";
import { Import } from "lucide-react";
import LoginPage from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/dashboard" element={<UserTable/>} />
     
      </Routes>
    </Router>
  );
}

export default App;
