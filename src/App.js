import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Active, Login, LoginAsGuest, Onboard, Register } from "@pages";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "@fire";

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
