import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
          name="로그인"
          email={email}
          password={password}
          testid="signin-button"
          onClick={signinRequest}
        />
      </form>
      <p>
        아직 회원이 아니신가요?{" "}
        <Link to="/signup" className="font-semibold hover:underline">
          회원가입
        </Link>
      </p>
    </div>
  );
}

export default Signin;
