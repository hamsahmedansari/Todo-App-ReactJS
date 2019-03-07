import React, { Component } from "react";

class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="item">
        <div className="flex-container p-relative inner-box">First</div>
      </div>
    );
  }
}

export default Left;
