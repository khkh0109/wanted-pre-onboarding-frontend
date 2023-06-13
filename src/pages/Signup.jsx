import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthInput from "../components/AuthInput";
import AuthSubmitButton from "../components/AuthSubmitButton";

import { authAPI } from "../api/apiUtils";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signupRequest = e => {
    e.preventDefault();
    authAPI
      .postSignup(email, password)
      .then(() => {
        alert("성공적으로 가입되었습니다.");
        return navigate("/signin");
      })
      .catch(err => {
        if (err.statusCode === 400) {
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
        testid="signup-button"
        onClick={signupRequest}
      />
    </form>
  );
}

export default Signup;
