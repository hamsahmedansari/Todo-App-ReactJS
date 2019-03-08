import React, { Component } from "react";
import "./style.scss";
import Todo from "../todo/todo";
class Open extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="item open">
        <div className="flex-container p-relative inner-box">
          <header className="item flex-container">
            <div className="item">
              <i className="fa fa-lightbulb-o	" />
            </div>
            <div className="item">
              <h4>Open</h4>
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
        </div>
      </div>
    );
  }
}

export default Open;
