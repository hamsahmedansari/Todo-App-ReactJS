import React, { Component } from "react";
import "./App.css";
import TodoRow from "./component/todo-row/todo-row";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TodoRow />
      </React.Fragment>
    );
  }
}

export default App;
