import React, { useState } from "react";
import { Button, TextInput } from "../../components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../../Fire";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onRegister() {
    console.log("email", email);
    console.log("password", password);
    try {
      await createUserWithEmailAndPassword(Auth, email, password);
      setEmail("");
      setPassword("");
    } catch (e) {
      setEmail("");
      setPassword("");
      console.log(e.message);
    }
  }

  return (
    <div className="bg-main h-screen items-center flex flex-col space-y-8 justify-center">
      <h1 className="text-white text-3xl text-center">{TEXT.GREETINGS}</h1>
      <TextInput label={LABEL.FULL_NAME} placeholder={PLACEHOLDER.FULL_NAME} />
      <TextInput
        label={LABEL.EMAIL}
        placeholder={PLACEHOLDER.EMAIL}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        label={LABEL.PASSWORD}
        placeholder={PLACEHOLDER.PASSWORD}
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onRegister} label={TEXT.REGISTER} />
    </div>
  );
}

export default Register;
