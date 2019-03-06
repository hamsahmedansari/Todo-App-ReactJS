import React, { Component } from "react";
import "./style.scss";
import Todo from "../todo/todo";

class TodoRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="todo-row">
        <Todo text="Lorem ipsum dolor sit amet consectetur" />
        <Todo text="Lorem ipsum dolor sit amet consectetur" />
        <div className="more">
          <Todo text="3" width="25" height="25" />
          <Todo text="4" width="25" height="25" />
          <Todo text="5" width="25" height="25" />
          <Todo text="6" width="25" height="25" />
        </div>
      </div>
    );
  }
}

export default TodoRow;
