import { todoAPI } from "../api/apiUtils";

function TodoItem({ id, todo, fetchTodos }) {
  const handleDeleteButton = () => {
    todoAPI
      .deleteTodo(id)
      .then(() => {
        fetchTodos();
      })
      .catch(err => {
        if (err === 404) {
          alert("존재하지 않는 TODO 입니다.");
        }
      });
  };

  return (
    <li id={id}>
      <label>
        <input type="checkbox" />
        <span>{todo}</span>
      </label>
      <div>
        <button data-testid="delete-button" onClick={handleDeleteButton}>
          삭제
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
