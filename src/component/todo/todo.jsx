import React, { Component } from "react";
import "./style.scss";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let todo = this.props.text;
    let style =
      this.props.width && this.props.height
        ? {
            width: this.props.width + "px",
            height: this.props.height + "px"
          }
        : {
            width: "100px",
            height: "100px"
          };

    return (
      <React.Fragment>
        <div
          className={!isNaN(todo) ? "todo" : "todo-hover todo"}
          style={style}
        >
          <p>{todo.length > 35 ? todo.slice(0, 35).concat("...") : todo}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Todo;
