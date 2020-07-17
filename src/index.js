import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import store from "./Store";
import { Provider } from "react-redux";
import Todo from "../src/components/todo";
import Users from "./components/Users";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <nav className="project-tab">
            <div className="nav nav-tabs nav-fill " id="nav-tab" role="tablist">
              <li className="nav-item col-sm-6">
                <Link className="nav-link" to="/users">
                  {" "}
                  Users{" "}
                </Link>
              </li>
              <li className="nav-item col-sm-6">
                <Link to="/todo" className="nav-link ">
                  Tasks
                </Link>
              </li>
            </div>
          </nav>

          <Route exact path="/" component={Users} />
          <Route path="/todo" component={Todo} />
          <Route path="/users" component={Users} />
        </React.Fragment>
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
