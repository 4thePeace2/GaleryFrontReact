import React, { useState, useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Context from "./context";


const Find = (props) => {
  const ctx = useContext(Context);
  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");

  const minChangeHandler = (event) => {
    setMinimum(event.target.value);
  };

  const maxChangeHandler = (event) => {
    setMaximum(event.target.value);
  };
  
  const sendValues = async (valMin, valMax) => {
    ctx.token = localStorage.getItem("token");
    const response = await fetch(
        "http://localhost:52640/api/search?min=" + valMin.toString() + "&max=" + valMax.toString(),
        {
          method: "POST",
          headers: {
            'Accept': "application/json",
            'Authorization': "Bearer " + ctx.token,
          }
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.length > 0) {
        props.foundItems(data);
      } else {
        alert("No data was found!");
      }
      
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(
      "Minimum: " +
        minimum +
        " Maximum: " +
        maximum
    );

    sendValues(minimum, maximum);
  };

  return (
    <div className="text-center">
      <h3>Search by price</h3>
      <label className="col-sm-2" htmlFor="min">
        Minimum
      </label>
      <input
        className="col-sm-2 bg-transparent"
        type="number"
        id="min"
        step="0.01"
        value={minimum}
        onChange={minChangeHandler}
      />
      <br />
      <label className="col-sm-2" htmlFor="min">
        Maksimum
      </label>
      <input
        className="col-sm-2 bg-transparent"
        type="number"
        id="max"
        step="0.01"
        value={maximum}
        onChange={maxChangeHandler}
      />
      <div  className="text-center">
        <br />
        <button type="button" onClick={submitHandler} className="btn btn-success col-sm-1">Find</button>
      </div>
    </div>
  );
};

export default Find;
