import React, { useState, useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Context from "./context";

const LoginForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const ctx = useContext(Context);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  async function loginReq(data1) {
    const response = await fetch("/Token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data1,
    });
    const data = await response.json();
    localStorage.setItem("token", data.access_token);
    console.log(data);
    ctx.user = data.userName;
    console.log(ctx.isLoggedIn);
    props.changeSt();

    if (data) {
      ctx.isLoggedIn = true;
      console.log(ctx.isLoggedIn);
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("email: " + enteredEmail + " password: " + enteredPassword);
    var sendData =
      "username=" +
      enteredEmail +
      "&password=" +
      enteredPassword +
      "&grant_type=password";
    loginReq(sendData);
  };

  const cancelLogin = () => {
    setEnteredEmail("");
    setEnteredPassword("");
    props.isCanceled();
  };

  return (
    
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
          id="password0"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
        <br />
        <button type="submit" className="btn btn-success mr-5">
          Submit
        </button>
        <button type="button" className="btn btn-danger mr-5" onClick={cancelLogin}>
          Cancel
        </button>
      </form>
    
  );
};

export default LoginForm;
