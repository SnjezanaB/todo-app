import Logo from "./Images/Logo.svg";
import "./App.css";
import ToDoList from "./Components/TodoList";
import TodoItem from "./Components/TodoItem";
import TodoVizual from "./Components/TodoVizual";
import React, { useState, useEffect } from "react";
import TodoUseState from "./Components/TodoUseState";
import Storage from "./Components/Storage";

function Nova() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // Load TODOs from local storage on app startup
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Update local storage whenever TODOs change
  /*
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
*/
  const handleAddTodo = () => {
    if (task.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: task,
        checked: false,
      };

      setTodos([...todos, newTodo]);
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      setTask("");
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  function handleCheckItem(id) {
    const checkedTodo = todos.filter((todo) => todo.id === id);
    checkedTodo[0].checked = !checkedTodo[0].checked;
    const newTodos = todos.filter((_, i) => i !== index);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO App</h1>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.checked}
                onClick={() => handleCheckItem(todo.id)}
              />

              {todo.text}
              <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Nova;
