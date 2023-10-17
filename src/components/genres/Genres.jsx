import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
const Genres = ({ data }) => {
  const { genres } = useSelector((s) => s.home);
  return (
    <div className="genres">
      {data?.map((genre) => {
        return (
          <div key={genre} className="genre">
            {genres[genre]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
