import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addTodo } from "../actions/index";
import "../styles.css";

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      date: "",
      isEmpty: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value, isEmpty: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, date } = this.state;
    if (title.trim() === "") {
      this.setState({ isEmpty: true });
      return;
    }
    const id = uuidv1();
    this.props.addTodo({ title, date, id });
    this.setState({ title: "", date: "" });
  }

  render() {
    const { title, date, isEmpty } = this.state;
    return (
      <div id="todo-wrapper">
        <h2>
          <span className="text-danger">*</span>Add a New todo
        </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <h3>Target Date</h3>
            <input
              type="date"
              className="form-inline text-center "
              id="date"
              value={date}
              onChange={this.handleChange}
            />
            <span className="text-danger">
              {" "}
              {isEmpty ? "Todo can not be empty" : ""}{" "}
            </span>
          </div>
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </form>
      </div>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
