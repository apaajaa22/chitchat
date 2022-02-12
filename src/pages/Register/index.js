import React from "react";
import { Button, TextInput } from "../../components";
import { useNavigate } from "react-router-dom";

const TEXT = {
  GREETINGS: "Register",
  REGISTER: "Register Now",
};

const LABEL = {
  FULL_NAME: "Fullname",
  EMAIL: "Email",
  PASSWORD: "Password",
};
const PLACEHOLDER = {
  FULL_NAME: "steve jobs",
  EMAIL: "steve@test.com",
  PASSWORD: "Enter your password here",
};

function Register() {
  const navigate = useNavigate();

  function onRegister() {
    console.log("register");
    navigate("/");
  }

  return (
    <div className="bg-main h-screen items-center flex flex-col space-y-8 justify-center">
      <h1 className="text-white text-3xl text-center">{TEXT.GREETINGS}</h1>
      <TextInput label={LABEL.FULL_NAME} placeholder={PLACEHOLDER.FULL_NAME} />
      <TextInput label={LABEL.EMAIL} placeholder={PLACEHOLDER.EMAIL} />
      <TextInput
        label={LABEL.PASSWORD}
        placeholder={PLACEHOLDER.PASSWORD}
        type={"password"}
      />
      <Button onClick={onRegister} label={TEXT.REGISTER} />
    </div>
  );
}

export default Register;
