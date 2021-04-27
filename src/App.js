import React, { useState, useContext, useEffect } from "react";
// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./LoginForm";
import RegForm from "./RegForm";
import Find from "./Find";
import Context from "./context";

import Table from "./Table";

function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  return (
    <Context.Provider value={{ isLoggedIn: false, picturesData: [] }}>
      <div className="container">
        <RegForm />
        <br />
        <LoginForm />
        <br />
        <Find />
        <Table />
      </div>
    </Context.Provider>
  );
}

export default App;
