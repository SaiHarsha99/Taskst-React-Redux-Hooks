import React, { useState } from "react";

import "./Users.css";

function Users() {
  const [users, setUsers] = useState([
    {
      content: "Joseph",
      values: "Joseph.harmu@hotmail.com",
      error: "",
      isCompleted: true
    },
    {
      content: "Gaurav",
      values: "gaurav.testify@lindein.com",
      error: "",
      isCompleted: false
    },
    {
      content: "Baradwaaj",
      values: "baradwaaj.kasel@gmail.com",
      error: "",
      isCompleted: false
    }
  ]);

  const [errors, setErrors] = useState({ email: "" });

  function handleKeyDown(e, i) {
    if (e.key === "Enter" && users[i].error === "") {
      createUserAtIndex(e, i);
    }
    if (e.key === "Backspace" && users[i].content === "") {
      e.preventDefault();
      return removeUserAtIndex(i);
    }
  }

  function createUserAtIndex(e, i) {
    const newUsers = [...users];
    newUsers.splice(i + 1, 0, {
      content: "",
      values: "",
      isCompleted: false
    });
    setUsers(newUsers);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateUserAtIndex(e, i) {
    const newUsers = [...users];
    newUsers[i].content = e.target.value;
    setUsers(newUsers);
  }

  function removeUserAtIndex(i) {
    if (i === 0 && users.length === 1) return;
    setUsers(Users =>
      Users.slice(0, i).concat(Users.slice(i + 1, Users.length))
    );
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function toggleUserCompleteAtIndex(index) {
    const temporaryUsers = [...users];
    temporaryUsers[index].isCompleted = !temporaryUsers[index].isCompleted;
    setUsers(temporaryUsers);
  }

  function validate(e, i) {
    const newUsers = [...users];
    newUsers[i].values = e.target.value;
    setUsers(newUsers);
    if (!newUsers[i].values) {
      newUsers[i].error = "Email is required";
      setErrors(newUsers);
    } else if (!/\S+@\S+\.\S+/.test(newUsers[i].values)) {
      newUsers[i].error = "Email is invalid";
      setErrors(newUsers);
    } else {
      newUsers[i].error = "";
      setErrors(newUsers);
    }
  }

  return (
    <div className="app">
      <div className="header">Users List</div>
      <form className="user-list  col-md-offset-4 col-md-4 col-md-ffset-4 col-lg-offset-4 col-lg-4 col-lg-offset-4">
        <ul>
          {users.map((user, i) => (
            <div className={`user ${user.isCompleted && "user-is-removed"}`}>
              <div
                className={"checkbox"}
                onClick={() => toggleUserCompleteAtIndex(i)}
              >
                {user.isCompleted && <span>&#x2714;</span>}
              </div>
              <input
                type="text"
                value={user.content}
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateUserAtIndex(e, i)}
              />

              <input
                className="email"
                type="email"
                onChange={e => validate(e, i)}
                onKeyDown={e => handleKeyDown(e, i)}
                value={user.values}
                required
              />
              {errors && (
                <div id="error" className="text-danger">
                  {user.error}
                </div>
              )}
            </div>
          ))}
        </ul>
      </form>
      <div className="footer">
        <marquee behavior="alternate">
          ! Use Enter key to add new users :D
        </marquee>
      </div>
    </div>
  );
}

export default Users;
