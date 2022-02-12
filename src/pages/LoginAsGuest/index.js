import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "../../components";

const TEXT = {
  GREETINGS: "Hello",
  LOGIN_AS_GUEST: "Login as Guest",
};

const LABEL = {
  FULL_NAME: "Full name",
  PASSWORD: "Password",
};
const PLACEHOLDER = {
  FULL_NAME: "steve jobs",
};

function LoginAsGuest() {
  const navigate = useNavigate();

  function onRegister() {
    console.log("register");
    navigate("/");
  }

  return (
    <div className="bg-main h-screen items-center flex flex-col space-y-8 justify-center">
      <h1 className="text-white text-3xl text-center">{TEXT.GREETINGS}</h1>
      <TextInput label={LABEL.FULL_NAME} placeholder={PLACEHOLDER.FULL_NAME} />
      <Button onClick={onRegister} label={TEXT.LOGIN_AS_GUEST} />
    </div>
  );
}

export default LoginAsGuest;
