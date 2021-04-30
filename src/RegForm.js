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
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data1),
      }
    );
    const data = await response;
    console.log(data.status);
    if (data.status === 200) {
      alert("Registration was successful!");
      props.isCanceled();
    }
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

  const cancelReg = () => {
    props.isCanceled();
  }

  return (
    <div>
      <form className="form-group" onSubmit={submitHandler}>
        <label className="col-sm-3" htmlFor="email">Email</label>
        <input
          className="col-sm-3 bg-transparent"
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
        <br />
        <label className="col-sm-3" htmlFor="password">Password</label>
        <input
          className="col-sm-3 bg-transparent"
          type="password"
          id="password1"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
        <br />
        <label className="col-sm-3 bg-transparent" htmlFor="password">Confirm password</label>
        <input
          className="col-sm-3"
          type="password"
          id="password2"
          value={confirmPassword}
          onChange={confirmPasswordChangeHandler}
        />
        <br />
        <button type="submit" className="btn btn-info mr-5">Submit</button>
        <button type="button" onClick={cancelReg} className="btn btn-danger mr-5">Cancel</button>

      </form>
    </div>
  );
};

export default RegForm;
