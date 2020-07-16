import React from "react";
import Form from "../components/Form";
import List from "../components/List";

const Todo = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <List />
      </div>
      <div className="col-md-6">
        <Form />
      </div>
    </div>
  </div>
);

export default Todo;
