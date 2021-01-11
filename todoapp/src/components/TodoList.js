import React, { Component } from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.filteredTodos.map(todo => {
                    return (<Todo key={todo.id}  todos={props.todos} todo={todo} setTodos={props.setTodos}/>);
                })}


            </ul>
        </div>
    );
}

export default TodoList;