import React, { useState } from "react";
import Galleries from "./Galleries";
// import Context from "./context";


const AddingForm = (props) => {
  // const ctx = useContext(Context);

  const [gallery, setGallery] = useState(1);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  

  const GalleryChangeHandler = (value) => {
    setGallery(value);
  };

  const nameChangeHandler = (event) => {
    

      setName(event.target.value);
    
    
  };

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  const yearChangeHandler = (event) => {
    setYear(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  // var nameIsValid = true;

  const postRequest = async (data) => {
    var tokenSt = localStorage.getItem("token");
    const response = fetch("http://localhost:52640/api/pictures", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + tokenSt,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response;
    console.log(responseData);
    props.newPicture();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // if (name.trim().length === 0 || name.trim().length > 120) {
      
    //   console.log("validacija nije prosla!")
    //   ctx.validation = false;
    // } else {
    //   ctx.validation = true;
    var sendData = {
      GaleryId: gallery,
      Name: name,
      Author: author,
      MadeYear: year,
      Price: price,
    };
    postRequest(sendData);
    console.log(
      "Gallery " +
        gallery +
        " name " +
        name +
        " author " +
        author +
        " year " +
        year +
        " price " +
        price
    );
    setName("");
    setAuthor("");
    setYear("");
    setPrice("");
    // }
  };

  const cancelHandler = () => {
    setName("");
    setAuthor("");
    setYear("");
    setPrice("");
  };

  return (
    <div className="text-center">
      <label className="col-sm-2" htmlFor="Gallery">
        <strong>Gallery</strong>
      </label>
      <Galleries current={GalleryChangeHandler} />
      <br />
      <label className="col-sm-2" htmlFor="name">
        <strong>Name</strong>
      </label>
      <input
        className="col-sm-4 bg-transparent"
        type="text"
        id="name"
        value={name}
        onChange={nameChangeHandler}
      />
      {/* {!ctx.validation && <p>Name field can't be empty or longer then 120 caracters!</p>} */}
      <br />
      <label className="col-sm-2" htmlFor="author">
        <strong>Author</strong>
      </label>
      <input
        className="col-sm-4 bg-transparent"
        type="text"
        id="author"
        value={author}
        onChange={authorChangeHandler}
      />
      <br />
      <label className="col-sm-2" htmlFor="year">
        <strong>Made year</strong>
      </label>
      <input
        className="col-sm-4 bg-transparent"
        type="number"
        id="year"
        value={year}
        onChange={yearChangeHandler}
      />
      <br />
      <label className="col-sm-2" htmlFor="price">
        <strong>Price</strong>
      </label>
      <input
        className="col-sm-4 bg-transparent"
        type="number"
        id="price"
        step="0.01"
        value={price}
        onChange={priceChangeHandler}
      />
      <br />

      <div className="text-center">
        <br />
        <button
          type="button"
          onClick={submitHandler}
          className="btn btn-info col-sm-1 mr-5"
        >
          Create
        </button>
        <button
          type="button"
          onClick={cancelHandler}
          className="btn btn-danger col-sm-1 mr-5"
        >
          Cancel
        </button>
        
      </div>
      <br />
    </div>
  );
};

export default AddingForm;
