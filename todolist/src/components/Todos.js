import React, {Component} from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
    render() {
        return (
            <div>
                <ul>
                {this.props.todos.map((todo) => {
                    return (<TodoItem key={todo.id} todo={todo} 
                        onCompleted={this.props.onCompleted}
                        onDeleted={this.props.onDeleted}/>);
                    })}
                </ul>
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    onCompleted: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired
}

export default Todos;