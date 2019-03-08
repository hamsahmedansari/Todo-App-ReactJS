import React, { Component } from "react";
import "./style.scss";
import ActivityPanel from "./activityPanel/activityPanel";
import ActionBar from "./actionBar/actionBar";
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar flex-container">
        <ActivityPanel />
        <ActionBar />
      </div>
    );
  }
}

export default SideBar;
