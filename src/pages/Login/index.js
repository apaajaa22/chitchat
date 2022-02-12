import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function onRegister() {
    console.log("register");
    navigate("/");
  }

  return (
    <div>
      Login
      <button
        onClick={onRegister}
        className="bg-button text-white w-72 h-12 rounded-md hover:scale-105 transform-gpu"
      >
        asdasd
      </button>
    </div>
  );
}

export default Login;
