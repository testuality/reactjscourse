import React, {Component} from "react";
import PropTypes from "prop-types";

class AddTodo extends Component {

    state = {
        title: ""
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ""});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: "flex"}}>
                <input type="text"
                    name="title"
                    style={{flex: "10", padding: "10px"}}
                    placeholder="Add todo...."
                    value={this.state.title}
                    onChange={this.onChange}></input>
                <input type="submit" value="Add"
                    className="btn"
                    style={{flex: "1"}}/>
            </form>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddTodo;

