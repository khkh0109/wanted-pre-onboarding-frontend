function SubmitButton({ name, email, password, onClick, testid }) {
  return (
    <button
      type="submit"
      data-testid={testid}
      disabled={email.includes("@") && password.length >= 8 ? false : true}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default SubmitButton;
