import React, { Component } from "react";
import "./style.scss";
import Todo from "../todo/todo";
import { connect } from "react-redux";
class Done extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { todo } = this.props;
    let done = todo.filter(item => item.status === "done");
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
              <span>{done.length}</span>
            </div>
          </header>
        </div>
        <div className="item section">
          {done.map(item => (
            <Todo key={item._id} data={item} active="done" />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todo.todos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Done);
