import React, { Component } from "react";
import "./style.scss";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let todo = "Lorem ipsum dolor sit amet consectetur";
    return (
      <React.Fragment>
        <div className="todo" style={{ width: "100px", height: "100px" }}>
          <p>{todo.slice(0, 35).concat("...")}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Todo;
