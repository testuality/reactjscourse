import React, { useEffect, useState } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  },[]);

  useEffect(() => {
    filteredHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filteredHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => {
          return todo.completed;
        }));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => {
          return !todo.completed;
        }));
        break;
      case "all":
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      setTodos([]);
    }
    else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }

  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form todos={todos} 
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus} />
      <TodoList status={status} 
        filteredTodos={filteredTodos}
        todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
