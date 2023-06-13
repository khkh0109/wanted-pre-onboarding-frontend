function TodoItem({ id, todo }) {
  return (
    <li id={id}>
      <label>
        <input type="checkbox" />
        <span>{todo}</span>
      </label>
    </li>
  );
}

export default TodoItem;
