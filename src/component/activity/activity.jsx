import React, { Component } from "react";
import "./style.scss";
class Activity extends Component {
  state = {};
  render() {
    return (
      <div className="item activity flex-container">
        <div className="item icon">
          <i className="fa fa-paper-plane-o" />
        </div>
        <div className="item">
          <div className="flex-container activity-section">
            <div className="item date">
              <p>13 hour ago</p>
            </div>
            <div className="item title">
              <h5>Abc asd</h5>
            </div>
            <div className="item details">
              <p>Lorem ipsum dolor sit amet consectetur,</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activity;
