import React, { Component } from "react";

import "./style.scss";

class Todo extends Component {
  constructor(props) {
    super(props);
    let title = props.title;
    title = title.length >= 30 ? title.slice(0, 30) + "..." : title;
    this.state = {
      isActive: false,
      title
    };
  }

  handleTodo = ({ currentTarget: div }) => {
    console.log(div);

    let status = this.state.isActive;
    let { title } = this.props;
    if (status) {
      div.classList.remove("active");
      title = title.length >= 30 ? title.slice(0, 30) + "..." : title;
    } else div.classList.add("active");
    this.setState({
      isActive: !status,
      title
    });
  };

  handleDone = () => {
    console.log("done");
  };

  handleInProgress = () => {
    console.log("inProgress");
  };

  handleDelete = () => {
    console.log("Delete");
  };

  render() {
    let { isActive, title } = this.state;
    return (
      <div className="todo flex-container">
        <div
          className="todo-header item flex-container"
          onClick={this.handleTodo}
        >
          <div className="title item">
            <h4>{title}</h4>
          </div>
          <div className="priority item">MG</div>
        </div>
        {isActive && (
          <div
            className="todo-section item flex-container"
            onClick={this.handleTodo}
          >
            <div className="content item">
              <p>{this.props.description}</p>
            </div>
            <span className="date item">{this.props.date}</span>
          </div>
        )}
        <div className="todo-action item flex-container">
          <button className="item btn blue" onClick={() => this.handleDone()}>
            Done
          </button>
          <button
            className="item btn purple"
            onClick={() => this.handleInProgress()}
          >
            InProgress
          </button>
          <button className="item btn grey" onClick={() => this.handleDelete()}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
