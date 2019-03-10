import React, { Component } from "react";
import "./style.scss";
import Todo from "../todo/todo";

class Done extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="item done flex-container">
        <div className="flex-container p-relative inner-box item">
          <header className="item flex-container">
            <div className="item">
              <i className="fa fa-check-square-o" />
            </div>
            <div className="item">
              <h4>Done</h4>
            </div>
            <div className="item">
              <span>1</span>
            </div>
          </header>
        </div>
        <div className="item section">
          {this.props.data.map(item => (
            <Todo
              key={item._id}
              title={item.title}
              description={item.description}
              date={item.date}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Done;
