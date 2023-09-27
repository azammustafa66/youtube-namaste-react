import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";

import CardLoader from "./CardLoader";

const VideoCard = ({ video }) => {
  const {
    id: { videoId },
    snippet: { title, channelTitle, channelId },
  } = video;

  const { url } =
    video.snippet.thumbnails.high || video.snippet.thumbnails.default;

  return video ? (
    <div className="w-72 rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <Link to={`/watch?v=${videoId}`}>
        <img className="w-full h-48 object-cover" src={url} alt="Thumbnail" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 truncate">{title}</div>
          <Link to={`/channel/${channelId}`}>
            <p className="text-gray-700 text-base truncate">
              {channelTitle} <BsCheckCircle className="inline ml-2" />
            </p>
          </Link>
        </div>
      </Link>
    </div>
  ) : (
    <CardLoader />
  );
};

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoCard;
