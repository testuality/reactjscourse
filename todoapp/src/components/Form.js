import React , {Component} from "react";

const Form = (props) => {
    

    const inputTextHandler = (event) => {
        props.setInputText(event.target.value);
    };
 
    const submitTodoHandler = (event) => {
        event.preventDefault();
        console.log(event.type);
        if (props.inputText === "") return;

        props.setTodos([...props.todos, {
            text: props.inputText,
            completed: false,
            id: Math.random() * 1000
        }]);
        props.setInputText("");
    }

    const statusHandler = (event) => {
        props.setStatus(event.target.value);
    }

// onClick={submitTodoHandler}
// 
    return (
        <form>
            <input type="text" value={props.inputText} onChange={inputTextHandler}
                className="todo-input" 
                />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;