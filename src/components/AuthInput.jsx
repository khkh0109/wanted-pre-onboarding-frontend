function AuthInput({ label, type, id, testid, setValue, placeholder }) {
  return (
    <div className="w-full mb-4">
      <label htmlFor={id} className="block font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        data-testid={testid}
        required
        onChange={e => {
          setValue(e.target.value);
        }}
        placeholder={placeholder}
        className="grow input input-bordered input-primary w-full max-w-md"
      />
    </div>
  );
}

export default AuthInput;
