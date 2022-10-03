import React, { useState, useEffect } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { apiImageBaseUrl } from "../../Constants/Constants";

function RowPost(props) {
  const [shows, setShows] = useState([]);

  useEffect(() => {

    axios.get(props.url).then((response) => {
        setShows(response.data.results);
      });

  }, []);

  return (
    <div className="rowpost">
      <h2>{props.title}</h2>
      <div className="posters">
        {shows.map((obj) => (
          <img className={`${props.isSmall ? "posterSmall" : "poster"}`} src={`${apiImageBaseUrl + obj.backdrop_path}`} alt="poster" />
        ))}
      </div>
    </div>
  );
}

export default RowPost;
