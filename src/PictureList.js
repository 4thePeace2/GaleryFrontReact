import React, { useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Context from "./context";




const PictureList = (props) => {
  const ctx = useContext(Context);
  const test = () => {
    props.listChange();
  }


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
    test();
    
  }
  return (
    <React.Fragment>
      {props.pictures.map((item) => (
        <tr key={item.Id}>
          <td>{item.Name}</td>
          <td>{item.Author}</td>
          <td>{item.Price}</td>
          <td>{item.GaleryName}</td>
          {props.logStatus === true && <td><button onClick={removePictureHandler.bind(null, item.OrgId)} type="button" className="btn btn-outline-secondary">obrisi</button></td>}
        </tr>
      ))}
    </React.Fragment>
  );
};

export default PictureList;
