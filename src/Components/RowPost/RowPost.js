import "./RowPost.css";
import React, { useEffect, useState } from "react";
import axios from "../../Constants/axios";
import { imageUrl } from "../../Constants/constants";

function RowPost(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="row">
      <h2 className="row-title">{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <div key={obj.id} className="posters-section">
            <img
              className={props.isSmall ? "smallPoster" : "poster"}
              alt="poster"
              src={`${imageUrl + obj.backdrop_path}`}
            />
            <div className="poster-content">
              <h3>{obj.title}</h3>

              <p>Language : {obj.original_language}</p>
              <p>🗓 {obj.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RowPost;
