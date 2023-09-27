import { useEffect, useState } from "react";

import Categories from "./Categories";
import Videos from "./Videos";
import { fetchData } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Emotional Reminders"
  );
  const [videos, setVideos] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    fetchData(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className="flex flex-col">
      <Categories setSelectedCategory={setSelectedCategory} />
      <Videos videos={videos} />
    </div>
  );
};

export default Feed;
