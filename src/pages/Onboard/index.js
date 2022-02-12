import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

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
    navigate("/guest");
  }

  return (
    <div className="bg-main h-screen items-center flex flex-col space-y-8 justify-center">
      <h1 className="text-white text-3xl text-center">{TEXT.GREETINGS}</h1>
      <Button onClick={onRegister} label={TEXT.REGISTER} />
      <p className="text-white text-md text-center">{TEXT.DESCRIPTION}</p>
      <Button onClick={onLogin} label={TEXT.LOGIN} />
      <Button onClick={onLoginAsGuest} label={TEXT.LOGIN_AS_GUEST} />
    </div>
  );
}

export default Onboard;
