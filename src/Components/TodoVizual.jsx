import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoVizual() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    console.log("Deleting todo with ID:", id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem text={todo.text} onDelete={() => handleDelete(todo.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoVizual;
