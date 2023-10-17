import React from "react";

import Carousel from "../../../components/carousel/carousel";
import useFetch from "../../../hooks/UseFetch";

const Similar = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <Carousel
      title={title}
      data={data?.results}
      loading={loading}
      timeWindow={mediaType}
    />
  );
};

export default Similar;