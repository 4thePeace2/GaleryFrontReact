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
      // mode: "cors",
      // cache: "no-cache",
      // credentials: "same-origin",
      // redirect: "follow",
      // referrerPolicy: "no-referrer",
      headers: {
        // 'Access-Control-Allow-Headers': '*',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Request-Method': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data1,
    });
    const data = await response.json();
    console.log(data);
    console.log(ctx.isLoggedIn);

    if (data) {
      ctx.isLoggedIn = true;
      console.log(ctx.isLoggedIn);
    }
    setEnteredEmail("");
    setEnteredPassword("");
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("email: " + enteredEmail + " password: " + enteredPassword);
    var sendData = "username="+ enteredEmail +"&password="+ enteredPassword +"&grant_type=password";
    // var sendData = {
    //   grant_type: "password",
    //   username: enteredEmail,
    //   password: enteredPassword,
    // };
    loginReq(sendData);
  };

  return (
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
      <button className="btn btn-success">Submit</button>
    </form>
  );
};

export default LoginForm;
