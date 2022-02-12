import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Onboard, Login, Register } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;