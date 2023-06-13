function AuthInput({ label, type, id, testid, setValue }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        data-testid={testid}
        required
        onChange={e => {
          setValue(e.target.value);
        }}
      />
    </>
  );
}

export default AuthInput;
