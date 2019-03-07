import React, { Component } from "react";
import "./style.scss";
class Open extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="item open">
        <div className="flex-container p-relative inner-box">
          <header className="item flex-container">
            <div className="item">
              <i className="fa fa-lightbulb-o	" />
            </div>
            <div className="item">
              <h4>Open</h4>
            </div>
            <div className="item">
              <span>1</span>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Open;
