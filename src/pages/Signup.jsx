import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        >
          회원가입
        </button>
      </form>
    </>
  );
}

export default Signup;
