import React, { Component } from "react";

class ActionBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="actionBar item flex-container">
        <button className="item btn close">
          <i className="fa fa-close" />
        </button>
        <button className="item btn add">
          <i className="fa fa-plus" />
        </button>
        <button className="item btn activity active">
          <i className="fa fa-exclamation-triangle" />
        </button>
      </div>
    );
  }
}

export default ActionBar;
