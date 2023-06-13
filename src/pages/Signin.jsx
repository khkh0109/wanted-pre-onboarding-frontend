import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthInput from "../components/AuthInput";
import AuthSubmitButton from "../components/AuthSubmitButton";

import { authAPI } from "../api/apiUtils";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signinRequest = e => {
    e.preventDefault();
    authAPI
      .postSignin(email, password)
      .then(res => {
        localStorage.setItem("access_token", res["access_token"]);
        return navigate("/todo");
      })
      .catch(err => {
        if (err.statusCode === 404) {
          alert(err.message);
        }
      });
  };

  return (
    <form>
      <AuthInput
        label="이메일"
        type="text"
        id="email"
        testid="email-input"
        setValue={setEmail}
      />

      <AuthInput
        label="비밀번호"
        type="password"
        id="password"
        testid="password-input"
        setValue={setPassword}
      />

      <AuthSubmitButton
        name="회원가입"
        email={email}
        password={password}
        testid="signin-button"
        onClick={signinRequest}
      />
    </form>
  );
}

export default Signin;
