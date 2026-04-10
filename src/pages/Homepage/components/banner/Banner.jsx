import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import "./banner.style.css";


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
