import { useState } from "react";

import TodoInput from "./TodoInput";
import TodoButton from "./TodoButton";

import { todoAPI } from "../api/apiUtils";

function TodoForm({ fetchTodos }) {
  const [value, setValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const createTodo = e => {
    e.preventDefault();

    if (value === "") {
      return;
    }

    todoAPI
      .postTodo(value)
      .then(() => {
        fetchTodos();
        setValue("");
        setIsDisabled(true);
      })
      .catch(err => {
        if (err === 400) {
          alert("빈 문자는 제출할 수 없습니다.");
        }
      });
  };

  const handleInput = e => {
    setValue(e.target.value);

    if (e.target.value === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  return (
    <form>
      <TodoInput onChange={handleInput} value={value} />
      <TodoButton onClick={createTodo} isDisabled={isDisabled} />
    </form>
  );
}
export default TodoForm;
