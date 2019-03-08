import React, { Component } from "react";
import Todo from "../todo/todo";
import "./style.scss";

class InProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="item inProgress">
        <div className="flex-container p-relative inner-box">
          <header className="item flex-container">
            <div className="item">
              <i className="fa fa-bar-chart-o	" />
            </div>
            <div className="item">
              <h4>InProgress</h4>
            </div>
            <div className="item">
              <span>1</span>
            </div>
          </header>
        </div>
        <div className="item section">
          <Todo title="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" />
          <Todo title="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" />
          <Todo title="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" />
          <Todo title="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" />
          <Todo title="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" />
        </div>
      </div>
    );
  }
}

export default InProgress;
