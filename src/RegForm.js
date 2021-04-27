import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const RegForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  async function registrationFunc(data1) {
    const response = await fetch(
      "http://localhost:52640/api/Account/Register",
      {
        method: "POST",
        headers: {
          // 'Accept': "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data1),
      }
    );
    const data = await response;
    console.log(data.status);
    if (data.status === 200) {
      alert("usepesno ste se registrovali!");
    }
    // setEnteredEmail("");
    // setEnteredPassword("");
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(
      "email: " +
        enteredEmail +
        " password: " +
        enteredPassword +
        " confirm password: " +
        confirmPassword
    );
    var sendData = {
      Email: enteredEmail,
      Password: enteredPassword,
      ConfirmPassword: confirmPassword,
    };
    registrationFunc(sendData);
  };

  return (
    <div>
      <form className="form-group" onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
        <label htmlFor="password">Confirm password</label>
        <input
          className="form-control"
          type="password"
          id="password"
          value={confirmPassword}
          onChange={confirmPasswordChangeHandler}
        />
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default RegForm;
