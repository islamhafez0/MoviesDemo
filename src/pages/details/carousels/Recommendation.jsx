import React from "react";

import Carousel from "../../../components/carousel/carousel";
import useFetch from "../../../hooks/UseFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    <Carousel
      title="Recommendations"
      data={data?.results}
      loading={loading}
      timeWindow={mediaType}
    />
  );
};

export default Recommendation;
