import Logo from "./Images/Logo.svg";
import "./App.css";
import ToDoList from "./Components/TodoList";
import TodoItem from "./Components/TodoItem";
import TodoVizual from "./Components/TodoVizual";
import React, { useState } from "react";
import TodoUseState from "./Components/TodoUseState";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <TodoUseState />
      </main>
    </div>
  );
}

export default App;
