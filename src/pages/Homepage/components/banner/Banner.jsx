import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import "./Banner.style.css";


const Banner = () => {
  const { data } = usePopularMoviesQuery();
  console.log("AAAAA", data);

  
  return (
    <div className="banner">
      banner
    </div>
  );
};

export default Banner;
