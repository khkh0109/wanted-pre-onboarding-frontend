import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
    <div className="container mx-auto h-screen flex flex-col justify-center items-center">
      <form className="w-full flex flex-col justify-center items-center max-w-md mb-4">
        <AuthInput
          label="이메일"
          type="text"
          id="email"
          testid="email-input"
          setValue={setEmail}
          placeholder="test@test.com"
        />

        <AuthInput
          label="비밀번호"
          type="password"
          id="password"
          testid="password-input"
          setValue={setPassword}
          placeholder="8자 이상 입력해 주세요."
        />

        <AuthSubmitButton
          name="회원가입"
          email={email}
          password={password}
          testid="signup-button"
          onClick={signupRequest}
        />
      </form>
      <p>
        이미 회원이신가요?{" "}
        <Link to="/signin" className="font-semibold hover:underline">
          로그인
        </Link>
      </p>
    </div>
  );
}

export default Signup;
