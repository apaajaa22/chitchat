import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Onboard, Login, Register, LoginAsGuest, Active } from "./pages";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "./Fire";

function App() {
  const [login, setLogin] = useState(null);

  onAuthStateChanged(Auth, (e) => {
    setLogin(e);
  });

  return (
    <BrowserRouter>
      {login ? (
        <Routes>
          <Route path="/" element={<Active />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Onboard />} />
          <Route path="login" element={<Login />} />
          <Route path="guest" element={<LoginAsGuest />} />
          <Route path="register" element={<Register />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
