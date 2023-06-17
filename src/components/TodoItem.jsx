import { useState } from "react";
import { todoAPI } from "../api/apiUtils";

import ModifyButtonGroup from "./ModifyButtonGroup";
import TodoItemButtonGroup from "./TodoItemButtonGroup";

function TodoItem({ id, todo, fetchTodos, isCompleted, setTodoList }) {
  const [isModify, setIsModify] = useState(false);
  const [modifyValue, setModifyValue] = useState(todo);
  const [isCheckbox, setIsCheckbox] = useState(isCompleted);

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

  const handleModifyButton = () => {
    setIsModify(!isModify);
  };

  const handleCancelButton = () => {
    setIsModify(false);
    setModifyValue(todo);
  };

  const handleModifyInput = e => {
    setModifyValue(e.target.value);
  };

  const handleSubmitButton = () => {
    if (modifyValue === "") {
      return;
    }

    todoAPI
      .updateTodo(id, modifyValue, isCompleted)
      .then(() => {
        return fetchTodos();
      })
      .then(() => {
        setIsModify(false);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleCheckbox = e => {
    setIsCheckbox(!isCheckbox);

    todoAPI
      .updateTodo(id, modifyValue, e.target.checked)
      .then(() => {
        fetchTodos();
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <li
      id={id}
      className="flex justify-between items-center py-4 border-b border-slate-100"
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isCheckbox}
          onChange={handleCheckbox}
          className="checkbox checkbox-primary"
        />
        {isModify ? (
          <input
            type="text"
            data-testid="modify-input"
            value={modifyValue}
            onChange={handleModifyInput}
            autoFocus
            className="text-lg outline-0"
          />
        ) : (
          <p className="text-lg">{todo}</p>
        )}
      </div>
      {isModify ? (
        <ModifyButtonGroup
          handleSubmitButton={handleSubmitButton}
          handleCancelButton={handleCancelButton}
        />
      ) : (
        <TodoItemButtonGroup
          handleDeleteButton={handleDeleteButton}
          handleModifyButton={handleModifyButton}
        />
      )}
    </li>
  );
}

export default TodoItem;
