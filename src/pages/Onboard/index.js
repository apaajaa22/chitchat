import React from "react";
import { useNavigate } from "react-router-dom";

const TEXT = {
  GREETINGS: "Welcome to our App",
  REGISTER: "Register Now",
  LOGIN: "Login",
  LOGIN_AS_GUEST: "Login as Guest",
  DESCRIPTION: "Already have an account ?",
};

function Onboard() {
  let navigate = useNavigate();

  function onRegister() {
    navigate("/register");
  }

  function onLogin() {
    navigate("/login");
  }

  function onLoginAsGuest() {
    console.log("login as guest");
  }

  return (
    <div className="bg-main h-screen items-center flex flex-col space-y-8 justify-center">
      <h1 className="text-white text-3xl text-center">{TEXT.GREETINGS}</h1>
      <button
        onClick={onRegister}
        className="bg-button text-white w-72 h-12 rounded-md hover:scale-105 transform-gpu"
      >
        {TEXT.REGISTER}
      </button>
      <p className="text-white text-md text-center">{TEXT.DESCRIPTION}</p>
      <button
        onClick={onLogin}
        className="bg-button text-white  w-72 h-12 rounded-md hover:scale-105 transform-gpu"
      >
        {TEXT.LOGIN}
      </button>
      <button
        onClick={onLoginAsGuest}
        className="bg-button text-white  w-72 h-12 rounded-md hover:scale-105 transform-gpu"
      >
        {TEXT.LOGIN_AS_GUEST}
      </button>
    </div>
  );
}

export default Onboard;
