import React, { Component } from "react";
import "./App.css";
import Todo from "./component/todo/todo";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </React.Fragment>
    );
  }
}

export default App;
