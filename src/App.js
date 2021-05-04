import React, { useState, useContext } from "react";
// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FormHolder from "./FormHolder";

import Find from "./Find";
import Context from "./context";

import Table from "./Table";
import AddingForm from "./AddingForm";

function App() {
  const ctx = useContext(Context);

  const [logStatus, setLogStatus] = useState(false);
  const [picturesData, setPictureData] = useState([]);
  // const [validInputs, setValidInputs] = useState(true);


  const changeStatus = () => {
    setLogStatus(!logStatus);
    if (logStatus === false) {
      ctx.isLoggedIn = false;
    }
    console.log("log status iz appa " + logStatus);
  };

  
  const sendItems = (items) => {
    setPictureData(items);
  };
  const pictureDataChanged = () => {
    setPictureData([]);
  }
  // const validInputsChecker = () => {
  //   setValidInputs(false);
  // }
  

  return (
    <div className="container">
      {!logStatus && <FormHolder onLogin={changeStatus} />}
      {logStatus && (
        <div className="text-center">
          <p>Current user: <b>{ctx.user}</b></p>
        </div>
      )}
      {logStatus && (
        <div className="text-center">
          <button onClick={changeStatus} className="btn btn-secondary">
            Logout
          </button>
        </div>
      )}
      <br />
      <Context.Provider
        value={{ isLoggedIn: logStatus, picturesData: []}}
      >
        {logStatus && <Find foundItems={sendItems} />}

        <Table itemsToDisplay={picturesData} itemIsDeleted={pictureDataChanged}/>
      
      <br />
      {logStatus && <AddingForm newPicture={pictureDataChanged} /> }
      </Context.Provider>
    </div>
  );
}

export default App;
