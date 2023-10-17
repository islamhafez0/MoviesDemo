import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import UseFetch from "../../../hooks/UseFetch";
import Carousel from "../../../components/carousel/carousel";

const TopRated = () => {
  const [timeWindow, setTimeWindow] = useState("movie");
  const { data, loading } = UseFetch(`/${timeWindow}/top_rated`);
  console.log(data);
  const onTabChange = (tab) => {
    setTimeWindow(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carousel_section">
      <ContentWrapper>
        <span className="carousel_title">Top Rated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel
        data={data?.results}
        loading={loading}
        timeWindow={timeWindow}
      />
    </div>
  );
};

export default TopRated;
