import React, { Component } from "react";
import "./style.scss";
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleInputBlur = ({ currentTarget: target }) => {
    let label = target.parentElement.children[0];
    // if(target.nodeValue)

    if (target.value) return label.classList.add("active");
    label.classList.remove("active");
  };
  handleInputFocus = ({ currentTarget: target }) => {
    let label = target.parentElement.children[0];
    if (target.value) return label.classList.add("active");
    label.classList.add("active");
  };
  render() {
    return (
      <div className="addTodo item">
        <div className="flex-container header">
          <div className="item">
            <h3>Add Todo</h3>
          </div>
          <div className="item icons">
            <i className="fa fa-paper-plane-o" />
          </div>
        </div>
        <div className="flex-container section">
          <form className="flex-container">
            <div className="form-element">
              <label htmlFor="title" className="item">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="title form item"
                onBlur={this.handleInputBlur}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="form-element">
              <label htmlFor="title" className="item">
                Description
              </label>
              <textarea
                type="text"
                id="title"
                className="title form item"
                onBlur={this.handleInputBlur}
                onFocus={this.handleInputFocus}
              />
            </div>
            <select>
              <option>Select Type</option>
              <option>Open</option>
              <option>Work</option>
              <option>Assignment</option>
              <option>Other</option>
            </select>
            <select>
              <option>Select Status</option>
              <option>Done</option>
              <option>InProgress</option>
              <option>Done</option>
            </select>
            <button className="btn blue">Added</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Add;
