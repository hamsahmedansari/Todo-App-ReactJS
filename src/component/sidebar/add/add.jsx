import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { addTodo } from "../../../store/action/todo";
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: "",
        description: "",
        type: "",
        isDelete: false,
        status: ""
      },
      error: true
    };
  }
  componentDidMount() {
    console.log(this.props);
  }

  handleInputBlur = ({ currentTarget: target }) => {
    let label = target.parentElement.children[0];
    if (target.value) return label.classList.add("active");
    label.classList.remove("active");
    if (target.value.length === 0) {
      target.parentElement.classList.add("error");
    } else {
      target.parentElement.classList.remove("error");
    }
  };
  handleInputFocus = ({ currentTarget: target }) => {
    let label = target.parentElement.children[0];
    if (target.value) return label.classList.add("active");
    label.classList.add("active");
  };
  handelChange = ({ currentTarget: target }) => {
    const { value, name } = target;
    if (value.length === 0) {
      target.parentElement.classList.add("error");
    } else {
      target.parentElement.classList.remove("error");
    }
    const { data } = this.state;
    data[name] = value;
    const error = this.isValidate();
    this.setState({ data, error });
  };
  isValidate = () => {
    const { title, description, type, status } = this.state.data;
    if (title.length === 0) return "title";
    if (description.length === 0) return "description";
    if (type.length === 0) return "type";
    if (status.length === 0) return "status";
    return false;
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.data);
    let data = {
      title: "",
      description: "",
      type: "",
      status: "",
      isDelete: false
    };
    this.setState({ data });
  };

  render() {
    return (
      <div className="addTodo item">
        <div className="flex-container header">
          <div className="item">
            <h3>Add Todo</h3>
          </div>
          <div className="item icons">
            <i className="fa fa-paper-plane-o" />
          </div>
        </div>
        <div className="flex-container section">
          <form className="flex-container" onSubmit={this.handleSubmit}>
            <div className="form-element">
              <label htmlFor="title" className="item">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="title form item"
                onBlur={this.handleInputBlur}
                onFocus={this.handleInputFocus}
                onChange={this.handelChange}
                name="title"
                value={this.state.data.title}
              />
            </div>
            <div className="form-element">
              <label htmlFor="title" className="item">
                Description
              </label>
              <textarea
                type="text"
                id="title"
                className="title form item"
                onBlur={this.handleInputBlur}
                onFocus={this.handleInputFocus}
                onChange={this.handelChange}
                name="description"
                value={this.state.data.description}
              />
            </div>
            <select
              onChange={this.handelChange}
              name="type"
              value={this.state.data.type}
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="WK">Work</option>
              <option value="AG">Assignment</option>
              <option value="OT">Other</option>
            </select>
            <select
              onChange={this.handelChange}
              name="status"
              value={this.state.data.status}
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="open">Open</option>
              <option value="inprogress">InProgress</option>
              <option value="done">Done</option>
            </select>
            <button
              className="btn blue"
              disabled={this.state.error ? "disabled" : false}
            >
              Added
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.todos
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: param => {
      dispatch(addTodo(param));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);
