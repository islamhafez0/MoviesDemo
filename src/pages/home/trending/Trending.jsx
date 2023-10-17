import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import UseFetch from "../../../hooks/UseFetch";
import Carousel from "../../../components/carousel/carousel";

const Trending = () => {
  const [timeWindow, setTimeWindow] = useState("day");
  const { data, loading } = UseFetch(`/trending/all/${timeWindow}`);
  console.log(data);
  const onTabChange = (tab) => {
    setTimeWindow(tab === "Today" ? "day" : "week");
  };
  return (
    <div className="carousel_section">
      <ContentWrapper>
        <span className="carousel_title">Trending</span>
        <SwitchTabs data={["Today", "This Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
