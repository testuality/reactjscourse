import React, {Component} from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <h1>TodoList</h1>
                <Link to="/" style={linkStyle}>Todos</Link> | <Link to="/about" style={linkStyle}>About</Link>
            </header>
        );
    }
}

const linkStyle = {
    color: "#ccc",
    textDecoration: "none"
};
export default Header;