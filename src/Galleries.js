import React, {useEffect, useCallback, useState} from 'react';

const Galleries = (props) => {

    const [galleries, setGalleries] = useState([]);

    const fetchGalleriesHandler = useCallback(async () => {
        try {
          // const response = await fetch('https://swapi.dev/api/films/');
          const response = await fetch("/api/galeries");
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
    
          const data = await response.json();
    
          const loadedGalleries = [];
    
          for (const key in data) {
            loadedGalleries.push({
              Id: key,
              OrgId: data[key].Id,
              Name: data[key].Name,
            });
          }
          console.log(loadedGalleries);
          setGalleries(loadedGalleries);
        } catch (error) {
          console.log(error.message);
        }
      }, []);
    
      useEffect(() => {
        fetchGalleriesHandler();
      }, [fetchGalleriesHandler]);

      const changeGalleryHandler = (event) => {
          console.log(event.target.value);
          props.current(event.target.value);
      }

    return(
        <select onChange={changeGalleryHandler} value='1'  className="col-sm-4">
            {galleries.map((item) => (
                <option key={item.Id} value={item.OrgId} >{item.Name}</option>
            ))}
        </select>
    )

}

export default Galleries;