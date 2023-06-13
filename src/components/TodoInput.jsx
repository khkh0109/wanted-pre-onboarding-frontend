function TodoInput({ onChange, value }) {
  return (
    <input data-testid="new-todo-input" onChange={onChange} value={value} />
  );
}
export default TodoInput;
