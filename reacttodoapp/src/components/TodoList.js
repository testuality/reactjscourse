import React, {useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList(props) {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text ) {
            return;
        }
        setTodos([todo, ...todos]);
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text ) {
            return;
        }
        setTodos(todos.map((todo, index) => {
            if (todoId === todo.id) {
                todo.text = newValue.text;
            }
            return todo;
        }));
    }

    const completeTodo = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        }));
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((todo, index) => {
            return todo.id !== id;
        }));
    }

    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}/>
        </div>
    );
}

export default TodoList;
