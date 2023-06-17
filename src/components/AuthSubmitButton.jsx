function AuthSubmitButton({ name, email, password, onClick, testid }) {
  return (
    <button
      type="submit"
      data-testid={testid}
      disabled={email.includes("@") && password.length >= 8 ? false : true}
      onClick={onClick}
      className="btn btn-block btn-primary text-base"
    >
      {name}
    </button>
  );
}

export default AuthSubmitButton;
