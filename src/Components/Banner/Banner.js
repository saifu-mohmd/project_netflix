import "./Banner.css";
import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/constants";
import axios from "../../Constants/axios";
import { FaPlay } from "react-icons/fa";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[0]);
      });
  }, []);

  return (
    <div className="banner-main-container">
      <div className="banner-background">
        <div
          style={{
            backgroundImage: `url(${
              movie ? imageUrl + movie.backdrop_path : ""
            })`,
          }}
          className="banner"
        >
          <div className="content">
            <h1 className="title">{movie ? movie.title : ""} </h1>
            <div className="banner_buttons">
              <button className="button">
                <FaPlay className="play-btn" />
                Play
              </button>
              <button className="button">My list</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ""}</h1>
          </div>
          <div className="fade_bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
