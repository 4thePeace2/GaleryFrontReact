import React, { useState, useEffect, useCallback, useContext } from "react";
// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PictureList from "./PictureList";
import Context from "./context";

const Table = (props) => {
  const [pictures, setPictures] = useState([]);
  const ctx = useContext(Context);

  const picturesHandler = (data) => {
    setPictures(data);
  };

  const fetchPicturesHandler = useCallback(async () => {
    if (props.itemsToDisplay.length === 0) {
      try {
        const response = await fetch("/api/pictures");
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();

        for (const key in data) {
          ctx.picturesData.push({
            Id: key,
            OrgId: data[key].Id,
            Name: data[key].Name,
            Author: data[key].Author,
            Price: data[key].Price,
            GaleryName: data[key].GaleryName,
          });
        }
        picturesHandler(ctx.picturesData);
        console.log(ctx.picturesData);
      } catch (error) {
        alert(error);
      }
    }
  }, [props.itemsToDisplay.length, ctx.picturesData]);

  useEffect(() => {
    fetchPicturesHandler();
  }, [fetchPicturesHandler, ctx.isLoggedIn]);

  return (
    <div className="container">
      <br />
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Price</th>
            <th>Gallery</th>
            {ctx.isLoggedIn && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          <PictureList
            pictures={
              props.itemsToDisplay.length === 0
                ? pictures
                : props.itemsToDisplay
            }
            logStatus={ctx.isLoggedIn}
            itemWasDeleted={props.itemIsDeleted}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
