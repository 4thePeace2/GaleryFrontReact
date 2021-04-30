import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegForm from "./RegForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const FormHolder = (props) => {
  const [isLogging, setIsLoging] = useState(false);
  const [isRegistrating, setIsRegistrating] = useState(false);

  const loginHandler = () => {
    setIsLoging(!isLogging);
  };
  const regHandler = () => {
    setIsRegistrating(!isRegistrating);
  };

  return (
    <div className="text-center">
        <br />
        <br />
      {!isRegistrating && !isLogging && (
        <button
          type="button"
          onClick={loginHandler}
          className="btn btn-success col-sm-2 mr-5"
        >
          Login
        </button>
      )}
      {!isRegistrating && !isLogging && (
        <button
          type="button"
          onClick={regHandler}
          className="btn btn-info col-sm-2 mr-5"
        >
          Registration
        </button>
      )}

      {isRegistrating && !isLogging && <RegForm isCanceled={regHandler}/>}

      {isLogging && !isRegistrating && (
        <LoginForm changeSt={props.onLogin} isCanceled={loginHandler} />
      )}
    </div>
  );
};

export default FormHolder;
