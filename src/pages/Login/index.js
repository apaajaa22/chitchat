import React, { useState } from "react";
import { Button, TextInput } from "@components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "@fire";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onLogin() {
    try {
      await signInWithEmailAndPassword(Auth, email, password);
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
      <TextInput
        label={LABEL.EMAIL}
        placeholder={PLACEHOLDER.EMAIL}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <TextInput
        label={LABEL.PASSWORD}
        placeholder={PLACEHOLDER.PASSWORD}
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button onClick={onLogin} label={TEXT.LOGIN} />
    </div>
  );
}

export default Login;
