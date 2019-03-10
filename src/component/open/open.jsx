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
              <span>{this.props.data.length}</span>
            </div>
          </header>
        </div>
        <div className="item section">
          {this.props.data.map(item => (
            <Todo key={item._id} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Open;
