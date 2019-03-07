import React, { Component } from "react";

import "./style.scss";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="todo">
        <div className="todo-header">
          <div className="title">Title</div>
          <div className="priority">MG</div>
        </div>
        <div className="todo-section">
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing...
          </div>
          <div className="meta">date</div>
        </div>
        <div className="todo-action">
          <button>Done</button>
          <button>InProgress</button>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}

export default Todo;
