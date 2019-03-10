import React, { Component } from "react";
import Open from "../open/open";
import InProgress from "../inprogress/inprogress";
import Done from "../done/done";
import SideBar from "../sidebar/sidebar";
import { connect } from "react-redux";
import { getTodos } from "../../store/action/todo";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideBarActive: false
    };
  }
  componentWillMount() {
    this.props.getTodos();
  }

  handleDestroy = () => {
    this.setState({ isSideBarActive: false });
  };
  handleCreateSideBar = () => {
    this.setState({ isSideBarActive: true });
  };
  render() {
    let { todo } = this.props;

    let open = todo.filter(item => item.status === "open");
    let inprogress = todo.filter(item => item.status === "inprogress");
    let done = todo.filter(item => item.status === "done");

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
          <Open data={open} />
          {/* InProgress */}
          <InProgress data={inprogress} />
          {/* Done */}
          <Done data={done} />
        </div>
        {/* addBtn */}
        <button
          className="float-btn"
          onClick={() => this.handleCreateSideBar()}
        >
          <i className="fa fa-plus-square-o" />
        </button>
        {/* sideBar */}
        {this.state.isSideBarActive && (
          <SideBar handleDestroy={this.handleDestroy} />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todo.todos
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTodos: () => {
      dispatch(getTodos());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
