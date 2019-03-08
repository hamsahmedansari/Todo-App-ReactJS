import React, { Component } from "react";
import "font-awesome/scss/font-awesome.scss";
import "./App.scss";
import Open from "./component/open/open";
import InProgress from "./component/inprogress/inprogress";
import Done from "./component/done/done";
import SideBar from "./component/sidebar/sidebar";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Header */}
        <div className="header-container flex-container">
          <div className="item left-logo flex-container">
            <i className="fa fa-sticky-note-o	logo-icon item" />
            <span className="logo item">
              <h2>
                todo<span>With</span>
                <span>React</span>
              </h2>
            </span>
          </div>
          {/* <div className="item left-logo flex-container">
            <i className="fa fa-plus-square-o 	add-icon item" />
          </div> */}
        </div>

        <div className="flex-container w-100 h-100 outer-container">
          {/* Open */}
          <Open />
          {/* InProgress */}
          <InProgress />
          {/* Done */}
          <Done />
        </div>
        {/* addBtn */}
        <button className="float-btn">
          <i className="fa fa-plus-square-o" />
        </button>
        {/* sideBar */}
        <SideBar />
      </React.Fragment>
    );
  }
}

export default App;
