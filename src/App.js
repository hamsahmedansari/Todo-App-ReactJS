import React, { Component } from "react";
import "./App.scss";
import Left from "./component/left/left";
import Right from "./component/right/right";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Header */}
        <div className="header-container">ToDo App Using React</div>

        <div className="flex-container w-100 h-100 outer-container">
          {/* Left */}
          <Left />
          {/* Right */}
          <Right />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
