import React, { useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Context from "./context";




const PictureList = (props) => {
  const ctx = useContext(Context);


  const removePictureHandler = async (OrgId) => {
    console.log(OrgId);
    ctx.token = localStorage.getItem("token");
    const response = await fetch(
      "http://localhost:52640/api/pictures?id=" + OrgId,
      {
        method: "DELETE",
        headers: {
          // 'Accept': "application/json",
          'Authorization': "Bearer " + ctx.token
          // "Content-Type": "application/json",
        }
      }
    );
    const data = await response;
    
    console.log(data);
    if (data.status === 204) {
      props.itemWasDeleted();
    }
    
  }
  return (
    <React.Fragment>
      {props.pictures.map((item) => (
        <tr key={item.Id}>
          <td className="table-secondary">{item.Name}</td>
          <td className="table-secondary">{item.Author}</td>
          <td className="table-secondary">{item.Price}</td>
          <td className="table-secondary">{item.GaleryName}</td>
          {props.logStatus === true && <td className="table-secondary"><button onClick={removePictureHandler.bind(null, item.OrgId)} type="button" className="btn btn-outline-secondary">delete</button></td>}
        </tr>
      ))}
    </React.Fragment>
  );
};

export default PictureList;
