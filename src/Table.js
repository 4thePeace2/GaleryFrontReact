import React, { useState, useEffect, useCallback, useContext } from "react";
// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PictureList from "./PictureList";
import Context from "./context";


const Table = (props) => {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const ctx = useContext(Context);

  const wasChanged = () => {
    props.itemDel();
  }

  const fetchPicturesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // const response = await fetch('https://swapi.dev/api/films/');
      const response = await fetch("/api/pictures");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedPictures = [];

      for (const key in data) {
        loadedPictures.push({
          Id: key,
          OrgId: data[key].Id,
          Name: data[key].Name,
          Author: data[key].Author,
          Price: data[key].Price,
          GaleryName: data[key].GaleryName,
        });
      }
      setPictures(loadedPictures);
      console.log(loadedPictures);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [ctx.isLoggedIn]);

  useEffect(() => {
    fetchPicturesHandler();
  }, [fetchPicturesHandler, ctx.isLoggedIn]);
  const loggedIn = true;

  return (
    <div className="container">
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th>Naziv</th>
            <th>Autor</th>
            <th>Cena</th>
            <th>Galerija</th>
            {ctx.isLoggedIn && <th>Akcija</th>}
          </tr>
        </thead>
        <tbody>
          <PictureList pictures={pictures} logStatus={ctx.isLoggedIn} listChange={wasChanged}/>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
