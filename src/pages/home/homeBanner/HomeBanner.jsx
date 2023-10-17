import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetch from "../../../hooks/UseFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/lazyImage";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HomeBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
    console.log(bg);
  }, [data]);

  console.log(data);
  const handleSearchQuery = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="hero_banner">
      {!loading && (
        <div className="backdrop_img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity_layer"></div>
      <ContentWrapper>
        <div className="heroBanner_content">
          <span className="title">Welcome.</span>
          <span className="subtitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="search_bar">
            <input
              type="text"
              placeholder="Search for a movie, tv show, person......"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleSearchQuery}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HomeBanner;
