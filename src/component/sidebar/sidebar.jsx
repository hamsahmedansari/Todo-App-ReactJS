import React, { Component } from "react";
import "./style.scss";
import ActivityPanel from "./activityPanel/activityPanel";
import ActionBar from "./actionBar/actionBar";
import Add from "./add/add";
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar flex-container">
        {/* <ActivityPanel /> */}
        <Add />
        <ActionBar />
      </div>
    );
  }
}

export default SideBar;
