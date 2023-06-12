import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <form>
        <label htmlFor="email">이메일</label>
        <input
          type="text"
          id="email"
          data-testid="email-input"
          required
          onChange={e => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          data-testid="password-input"
          required
          onChange={e => {
            setPassword(e.target.value);
          }}
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
    </>
  );
}

export default Signup;
