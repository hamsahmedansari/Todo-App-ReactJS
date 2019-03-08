import React, { Component } from "react";

class ActionBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="actionBar item flex-container">
        <button
          className="item btn close"
          onClick={() => this.props.handleDestroy()}
        >
          <i className="fa fa-close" />
        </button>
        <button
          className={
            this.props.panel === "add" ? "item btn add active" : "item btn add"
          }
          onClick={() => this.props.handleSide("add")}
        >
          <i className="fa fa-plus" />
        </button>
        <button
          className={
            this.props.panel === "activity"
              ? "item btn activity active"
              : "item btn add"
          }
          onClick={() => this.props.handleSide("activity")}
        >
          <i className="fa fa-exclamation-triangle" />
        </button>
      </div>
    );
  }
}

export default ActionBar;
