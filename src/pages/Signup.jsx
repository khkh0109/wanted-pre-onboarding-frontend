import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

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
      <Input
        label="이메일"
        type="text"
        id="email"
        testid="email-input"
        setValue={setEmail}
      />

      <Input
        label="비밀번호"
        type="password"
        id="password"
        testid="password-input"
        setValue={setPassword}
      />

      <SubmitButton
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
