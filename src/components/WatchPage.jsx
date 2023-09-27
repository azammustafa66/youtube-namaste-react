import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";

import { closeMenu } from "../utils/appSlice";
import { fetchData } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import Comments from "./Comments/CommentsContainer";
import LiveChat from "./Comments/LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const id = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());

    fetchData(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
      .catch((error) => console.error("Error fetching video detail:", error));

    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error("Error fetching related videos:", error));
  }, [id, dispatch]);

  if (!videoDetail?.snippet) return <h1>Loading....</h1>;

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num;
  };

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className="min-h-[95vh] px-6 flex">
      <div className="flex">
        <div className=''>
          <div className="top-20">
            <iframe
              width="960px"
              height="500px"
              src={`https://www.youtube.com/embed/${id}?si=JmYIkX3LyyskSeE5`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="text-3xl break-words font-semibold">{title}</h1>
          </div>
          <div className="p-2 flex justify-between">
            <Link to={`/channel/${channelId}`}>
              <div className="flex items-center gap-2">
                <h1 className="font-normal text-xl inline">{channelTitle}</h1>
                <BsCheckCircle />
              </div>
            </Link>
            <div className="flex gap-5 items-center">
              <h1>{formatNumber(Number(viewCount))} views</h1>
              <h6>
                <AiOutlineLike className="inline mr-2" size={20} />
                {formatNumber(Number(likeCount))}
              </h6>
            </div>
          </div>
          <div className="mt-4">
            <Comments videoId={id} />
          </div>
        </div>

        <div className="flex flex-col ml-1 gap-3">
          <div className="border border-black h-[500px] text-center bg-slate-100 rounded-lg w-[475px]">
            <LiveChat id={id} />
          </div>

          <div className="flex flex-col">
            {videos && <Videos videos={videos} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
