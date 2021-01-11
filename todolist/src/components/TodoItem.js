import React, {Component} from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {

    getStyle() {
        let style;
        if (this.props.todo.completed) {
            style = {textDecoration: "line-through"};
        }
        else {
            style = {textDecoration: "none"};
        }
        style.background = "#f4f4f4";
        style.padding = "10px";
        style.borderBottom = "1px #ccc dotted";
        return style;
    }

    isCompleted() {
        return this.props.todo.completed;
    }

    render() {
        return (
        <div style={this.getStyle()}>
            <input type="checkbox" 
                checked={this.isCompleted()}
                onChange={this.props.onCompleted.bind(this, this.props.todo.id, 23)}/>
            {this.props.todo.title}
            <button style={btnStyle} 
                onClick={this.props.onDeleted.bind(this, this.props.todo.id)}>X</button>
        </div>);
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onCompleted: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5ps 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

export default TodoItem;