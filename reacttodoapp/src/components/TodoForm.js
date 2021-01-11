import React, {useState, useEffect, useRef} from "react";

function TodoForm(props) {
    const [input, setInput] = 
        useState(props.edit ? props.edit.value : "");
    const inputRef = React.createRef();

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: inputRef.current.value
        });
        inputRef.current.value = "";
        //setInput("");
    }

    let btnText = "Add todo";
    let placeholder = "Add a todo...";
    if (props.edit) {
        btnText = "Update todo";
        placeholder = "Update the todo...";
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" 
                placeholder={placeholder}
                name="text" className="todo-input"/>
            <button className="todo-button">{btnText}</button>
        </form>
    );
}

export default TodoForm;