import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const PictureList = (props) => {
  return (
    <React.Fragment>
      {props.pictures.map((item) => (
        <tr key={item.Id}>
          <td>{item.Name}</td>
          <td>{item.Author}</td>
          <td>{item.Price}</td>
          <td>{item.GaleryName}</td>
          {props.logStatus === true && <td><button type="button" className="btn btn-outline-secondary">obrisi</button></td>}
        </tr>
      ))}
    </React.Fragment>
  );
};

export default PictureList;
