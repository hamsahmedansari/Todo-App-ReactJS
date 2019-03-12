import React, { Component } from "react";
import Activity from "../activity/activity";
import { connect } from "react-redux";
class ActivityPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { todo } = this.props;
    return (
      <div className="inner item">
        <div className="flex-container header">
          <div className="item">
            <h3>Activity</h3>
          </div>
          <div className="item icon">
            <i className="fa fa-paper-plane-o" />
          </div>
        </div>
        <div className="flex-container section">
          {todo.map(item => (
            <Activity key={item._id} data={item} />
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
)(ActivityPanel);
