import React, { Component } from "react";

import "./style.scss";
import { connect } from "react-redux";
import { deleteTodo } from "../../store/action/todo";
import { changeTodo } from "../../store/action/todo";
class Todo extends Component {
  constructor(props) {
    super(props);
    let title = props.data.title;
    title = title.length >= 30 ? title.slice(0, 30) + "..." : title;
    this.state = {
      isActive: false,
      title
    };
  }

  handleTodo = ({ currentTarget: div }) => {
    let status = this.state.isActive;
    let { title } = this.props.data;
    if (status) {
      div.classList.remove("active");
      title = title.length >= 30 ? title.slice(0, 30) + "..." : title;
    } else div.classList.add("active");
    this.setState({
      isActive: !status,
      title
    });
  };

  handleDone = () => {
    console.log("done");
    let data = this.props.data;
    data.status = "done";
    this.props.changeTodo(data);
  };

  handleInProgress = () => {
    console.log("inProgress");
    let data = this.props.data;
    data.status = "inprogress";
    this.props.changeTodo(data);
  };

  handleDelete = () => {
    console.log("Delete");
    this.props.deleteTodo(this.props.data);
  };

  render() {
    let { isActive, title } = this.state;
    let date = () => {
      let date1 = new Date(this.props.data.date);
      let date2 = new Date();
      let timeDiff = Math.abs(date2.getTime() - date1.getTime());
      let result;
      if (Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) > 1) {
        result = String(Math.ceil(timeDiff / (1000 * 60 * 60 * 24))).concat(
          " days"
        );
      } else {
        if (Math.ceil(timeDiff / (1000 * 60 * 60)) > 1) {
          result = String(Math.ceil(timeDiff / (1000 * 60 * 60))).concat(
            " hours"
          );
        } else {
          if (Math.ceil(timeDiff / (1000 * 60) > 1)) {
            result = String(Math.ceil(timeDiff / (1000 * 60))).concat(" mins");
          } else {
            result = String(Math.ceil(timeDiff / 1000)).concat(" sec");
          }
        }
      }
      return result;
    };
    return (
      <div className="todo flex-container">
        <div
          className="todo-header item flex-container"
          onClick={this.handleTodo}
        >
          <div className="title item">
            <h4>{title}</h4>
          </div>
          <div className="priority item">{this.props.data.type}</div>
        </div>
        {isActive && (
          <div
            className="todo-section item flex-container"
            onClick={this.handleTodo}
          >
            <div className="content item">
              <p>
                {this.props.data.description.slice(0, 1).toUpperCase() +
                  this.props.data.description.slice(1).toLowerCase()}
              </p>
            </div>
            <span className="date item">{date()}</span>
          </div>
        )}
        <div className="todo-action item flex-container">
          <button
            className="item btn blue"
            onClick={() => this.handleDone()}
            disabled={this.props.active === "done" ? true : false}
          >
            Done
          </button>
          <button
            className="item btn purple"
            onClick={() => this.handleInProgress()}
            disabled={this.props.active === "inprogress" ? true : false}
          >
            InProgress
          </button>
          <button className="item btn grey" onClick={() => this.handleDelete()}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    prop: state
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteTodo: param => {
      dispatch(deleteTodo(param));
    },
    changeTodo: param => {
      dispatch(changeTodo(param));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
