import React, { Component } from "react";
import Todo from "../todo/todo";
import { connect } from "react-redux";
import "./style.scss";

class InProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { todo } = this.props;
    let inprogress = todo.filter(item => item.status === "inprogress");
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
              <span>{inprogress.length}</span>
            </div>
          </header>
        </div>
        <div className="item section">
          {inprogress.map(item => (
            <Todo key={item._id} data={item} active="inprogress" />
          ))}{" "}
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
)(InProgress);
