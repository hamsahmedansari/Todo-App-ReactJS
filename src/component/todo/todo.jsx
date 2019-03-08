import React, { Component } from "react";

import "./style.scss";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="todo flex-container">
        <div className="todo-header item flex-container">
          <div className="title item">
            <h4>Title</h4>
          </div>
          <div className="priority item">MG</div>
        </div>
        <div className="todo-section item flex-container">
          <div className="content item">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
          </div>
          <span className="date item">10 days ago</span>
        </div>
        <div className="todo-action item flex-container">
          <button className="item btn blue">Done</button>
          <button className="item btn purple">InProgress</button>
          <button className="item btn grey">Delete</button>
        </div>
      </div>
    );
  }
}

export default Todo;
