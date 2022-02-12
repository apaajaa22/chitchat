import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "../../components";

const TEXT = {
  GREETINGS: "LOGIN",
  LOGIN: "Login",
};

const LABEL = {
  EMAIL: "Email",
  PASSWORD: "Password",
};
const PLACEHOLDER = {
  EMAIL: "steve@test.com",
  PASSWORD: "Enter your password here",
};

function Login() {
  const navigate = useNavigate();

  function onRegister() {
    console.log("register");
    navigate("/");
  }

  return (
    <div className="bg-main h-screen items-center flex flex-col space-y-8 justify-center">
      <h1 className="text-white text-3xl text-center">{TEXT.GREETINGS}</h1>
      <TextInput label={LABEL.EMAIL} placeholder={PLACEHOLDER.EMAIL} />
      <TextInput
        label={LABEL.PASSWORD}
        placeholder={PLACEHOLDER.PASSWORD}
        type={"password"}
      />
      <Button onClick={onRegister} label={TEXT.LOGIN} />
    </div>
  );
}

export default Login;
