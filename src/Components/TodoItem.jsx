import React from "react";

function TodoItem({ text, onDelete }) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="todo-item">
      <p>{text}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;
