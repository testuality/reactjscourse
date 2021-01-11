import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import "./App.css";
// import {v4 as uuidv4} from "uuid";
import axios from "axios";

class App extends Component {

    state = {
      todos: []
    }

    componentDidMount() {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
        let newTodos = response.data.map(
          (todo) => {
            todo.completed = false;
            return todo;
          });
          this.setState({todos: newTodos});
      });
    }

    markCompleted = (id, kk) => {
      this.setState({todos: this.state.todos.map((todo) => {
          let newTodo = {};
          newTodo.id = todo.id;
          newTodo.title = todo.title;
          if (todo.id === id) {
            newTodo.completed = !todo.completed;
          }
          else {
            newTodo.completed = todo.completed;
          }
          return newTodo;
      })});
    }

    onDeleted = (id) => {
      axios.delete("https://jsonplaceholder.typicode.com/posts/" + id).then(
        response => {
            this.setState({todos: this.state.todos.filter((todo) => {
              return todo.id !== id;
              })});

          });
    }

    addTodo = (title) => {
      axios.post("https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body: title,
          userId: 1,
          completed: false
        }).then(response => {
          this.setState({todos: [...this.state.todos, response.data]});
        });
    }

    render() {
      return (
        <Router>
          <div className="App">
            <div className="container">
              <Header style={headerStyle}/>
              <Route exact path="/" render={props => {
                return (
                  <React.Fragment>
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos} 
                      onCompleted={this.markCompleted}
                      onDeleted={this.onDeleted}/>
                  </React.Fragment>
                );
              }}/>
              <Route path="/about" component={About}/>
            </div>
          </div>
        </Router>
      );
    
    }
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default App;
