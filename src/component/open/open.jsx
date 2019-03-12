import React, { Component } from "react";
import "./style.scss";
import Todo from "../todo/todo";
import { connect } from "react-redux";
class Open extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { todo } = this.props;
    let open = todo.filter(item => item.status === "open");
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
              <span>{open.length}</span>
            </div>
          </header>
        </div>
        <div className="item section">
          {open.map(item => (
            <Todo key={item._id} data={item} active="open" />
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
)(Open);
