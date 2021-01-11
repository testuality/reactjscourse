import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

function Todo(props) {

    const [edit, setEdit] = useState(
        {
            id: null,
            value: ""
        });

    const submitUpdate = (value) => {
        props.updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ""
        });
    }

    if (edit.id) {
        return (
            <TodoForm edit={edit} onSubmit={submitUpdate} />
        );
    }
    else {

        return (
            <div>
                {props.todos.map((todo, index) => {
                    return (
                        <div className={todo.isComplete ? "todo-row complete" : "todo-row"}
                            key={todo.index}>

                            <div key={todo.id}
                                onClick={() => { props.completeTodo(todo.id) }}>{todo.text}</div>
                            <div className="icons">
                                <RiCloseCircleLine
                                    className="delete-icon"
                                    onClick={() => { props.removeTodo(todo.id) }} />
                                <TiEdit
                                    className="edit-icon"
                                    onClick={() => { setEdit({ id: todo.id, value: todo.text }) }} />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Todo;