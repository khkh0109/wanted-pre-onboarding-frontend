function TodoButton({ onClick, isDisabled }) {
  return (
    <button
      type="submit"
      data-testid="new-todo-add-button"
      onClick={onClick}
      disabled={isDisabled}
      className="btn btn-primary text-base px-6"
    >
      추가
    </button>
  );
}
export default TodoButton;
