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
  // var token = "BrH_XG9Ykk2KNvQTILhedK7x3hz0TTTxZkJqy7L447sGjqFj8HYs5ByevEfmPuO9I0fxMCsPC17kiqi8ZFH4zRikPnJNMKslyZSBSnB_P6C6BJAdJOTJuxkIFTm_n7rFQuoeIc07V42rkadOA2-ySS8hyL1lj3vwHx_HkuQOzfYF2i2l9AbOsboqHgIXNQZYwT4pn3EtEbQQrC1lkbWG1Mpv9_OYre6O2M5dhDQwj-EbFxEsFTMlF_enVV_1ytreb5a2s40zkffrWKY5FnEXQbC7J_X2Y-QaAuMjDpDsmt8M0xEB5-m1DXTTrcAzDiBvsnpGPY2QMa7IhwPOuL8dZAUO8Uj_-mQbrGc5FXAw7VTjPR7vfcXHpb7tQwfhISzl7UhMMCwLhfpk3ILM9YtC5MOVORvYSBzIHc73NZKhc2RN77JYk8BCpbDHIc4192UDJ_-IKsItXlFWHLkWVQ6Gnf2c1LwUf_6nViOgG_aiUug";
  
  const sendValues = async (valMin, valMax) => {
    ctx.token = localStorage.getItem("token");
    const response = await fetch(
        "http://localhost:52640/api/search?min=" + valMin.toString() + "&max=" + valMax.toString(),
        {
          method: "POST",
          headers: {
            'Accept': "application/json",
            'Authorization': "Bearer " + ctx.token
            // "Content-Type": "application/json",
          }
        }
      );
      const data = await response.json();
      console.log(data);
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
    <div className="col-sm-6">
      <label className="col-sm-6" htmlFor="min">
        Minimum
      </label>
      <input
        // className="form-control"
        className="col-sm-6"
        type="number"
        id="min"
        value={minimum}
        onChange={minChangeHandler}
      />
      <label className="col-sm-6" htmlFor="min">
        Maksimum
      </label>
      <input
        // className="form-control"
        className="col-sm-6"
        type="number"
        id="max"
        value={maximum}
        onChange={maxChangeHandler}
      />
      <div  className="text-center">
        <button type="button" onClick={submitHandler} className="btn btn-success col-sm-4">Find</button>
      </div>
    </div>
  );
};

export default Find;
