import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

function Login() {
  const navigate = useNavigate();

  function onRegister() {
    console.log("register");
    navigate("/");
  }

  return (
    <div>
      Login
      <Button onClick={onRegister} label={`TEXT.LOGIN_AS_GUEST`} />
    </div>
  );
}

export default Login;
