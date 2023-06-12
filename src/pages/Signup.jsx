import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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

      <button
        type="submit"
        data-testid="signup-button"
        disabled={
          email && email.includes("@") && password.length >= 8 ? false : true
        }
        onClick={e => {
          e.preventDefault();
          axios
            .post(
              `${process.env.REACT_APP_BASE_URL}/auth/signup`,
              { email, password },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then(() => {
              alert("성공적으로 가입되었습니다.");
              return navigate("/signin");
            })
            .catch(err => {
              if (err.response.data.statusCode === 400) {
                console.log(err.response.data.message);
              }
            });
        }}
      >
        회원가입
      </button>
    </form>
  );
}

export default Signup;
