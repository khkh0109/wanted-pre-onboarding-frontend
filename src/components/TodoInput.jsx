function TodoInput({ onChange, value }) {
  return (
    <input
      data-testid="new-todo-input"
      onChange={onChange}
      value={value}
      placeholder="할 일을 입력해 주세요."
      className="input input-bordered input-primary w-full grow"
    />
  );
}
export default TodoInput;
