import TodoItem from "../components/TodoItem";
import { todoAPI } from "../api/apiUtils";
import { useState, useEffect } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    todoAPI
      .getTodos()
      .then(res => {
        setTodoList(res);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return todoList.map((todo, idx) => <TodoItem id={idx} todo={todo} />);
}

export default Todo;
