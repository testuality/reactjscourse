import React from "react";

const Todo = (props) => {

    const deleteHandler = () => {
        props.setTodos(props.todos.filter((todo) => {
            return todo.id !== props.todo.id;
        }));
    };

    const completeHandler = () => {
        props.setTodos(props.todos.map((todo => {
            if (todo.id === props.todo.id) {
                todo.completed = !props.todo.completed;
            }
            return todo;
        })));
    };
    //   
    //     

    return (
        <div className="todo">
            <li className={`todoItem ${props.todo.completed ? "completed" : ""}`}>{props.todo.text}
            </li>
                <button className="complete-btn" onClick={completeHandler}>
                    <i className="fas fa-check"></i>
                </button>
                <button className="trash-btn" onClick={deleteHandler}>
                    <i className="fas fa-trash"></i>
                </button>
            
        </div>
    );
}

export default Todo;