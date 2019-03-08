import React, { Component } from "react";
import "./style.scss";
import Activity from "../activity/activity";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar">
        <div className="inner">
          <div className="flex-container header">
            <div className="item">
              <h3>Activity</h3>
            </div>
            <div className="item icon">
              <i className="fa fa-paper-plane-o" />
            </div>
          </div>
          <div className="flex-container section">
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
