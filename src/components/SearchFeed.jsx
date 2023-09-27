import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchData } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import CardLoader from "./CardLoader";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData(`search?part=snippet&q=${searchTerm}`).then((data) =>
        setVideos(data?.items)
      );
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  return (
    <section className="">
      {videos && videos.length ? <Videos videos={videos} /> : <CardLoader />}
    </section>
  );
};

export default SearchFeed;
