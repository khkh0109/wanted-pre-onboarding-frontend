import TodoItem from "../components/TodoItem";
import { todoAPI } from "../api/apiUtils";
import { useState, useEffect } from "react";

import TodoForm from "../components/TodoForm";

function Todo() {
  const [todoList, setTodoList] = useState([]);

  const fetchTodos = () => {
    return todoAPI
      .getTodos()
      .then(res => {
        setTodoList(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <TodoForm fetchTodos={fetchTodos} />
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          fetchTodos={fetchTodos}
          isCompleted={todo.isCompleted}
          setTodoList={setTodoList}
        />
      ))}
    </>
  );
}

export default Todo;
