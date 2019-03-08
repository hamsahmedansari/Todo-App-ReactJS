import React, { Component } from "react";
import "./style.scss";
import ActivityPanel from "./activityPanel/activityPanel";
import ActionBar from "./actionBar/actionBar";
import Add from "./add/add";
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panel: "activity"
    };
  }

  handleSide = param => {
    if (param === "activity") this.setState({ panel: "activity" });
    else this.setState({ panel: "add" });
  };

  render() {
    return (
      <div className="sidebar flex-container">
        {this.state.panel === "activity" && <ActivityPanel />}
        {this.state.panel === "add" && <Add />}
        <ActionBar
          handleSide={this.handleSide}
          panel={this.state.panel}
          handleDestroy={this.props.handleDestroy}
        />
      </div>
    );
  }
}

export default SideBar;
