import React, { Component } from "react";
import "./style.scss";
class Activity extends Component {
  state = {};
  render() {
    let date = () => {
      let date1 = new Date(this.props.data.date);
      let date2 = new Date();
      let timeDiff = Math.abs(date2.getTime() - date1.getTime());
      let result;
      if (Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) > 1) {
        result = String(Math.ceil(timeDiff / (1000 * 60 * 60 * 24))).concat(
          " days"
        );
      } else {
        if (Math.ceil(timeDiff / (1000 * 60 * 60)) > 1) {
          result = String(Math.ceil(timeDiff / (1000 * 60 * 60))).concat(
            " hours"
          );
        } else {
          if (Math.ceil(timeDiff / (1000 * 60) > 1)) {
            result = String(Math.ceil(timeDiff / (1000 * 60))).concat(" mins");
          } else {
            result = String(Math.ceil(timeDiff / 1000)).concat(" sec");
          }
        }
      }
      return result;
    };
    let { title, description, status } = this.props.data;
    return (
      <div className="item activity flex-container">
        <div className="item">
          <div
            className={` icon ${
              status === "open"
                ? ""
                : status === "inprogress"
                ? "inprogress"
                : "done"
            }`}
          >
            <i
              className={`fa ${
                status === "open"
                  ? "fa-lightbulb-o"
                  : status === "inprogress"
                  ? "fa-bar-chart-o inprogress"
                  : "fa-check-square-o done"
              }`}
            />
          </div>
        </div>
        <div className="item">
          <div className="flex-container activity-section">
            <div className="item date">
              <p>{`${date()} ago`}</p>
            </div>
            <div className="item title">
              <h5>{title.length > 33 ? `${title.slice(0, 32)}...` : title}</h5>
            </div>
            <div className="item details">
              <p>
                {description.length >= 60
                  ? `${description.slice(0, 60)}...`
                  : description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activity;
