import PropTypes from "prop-types";

import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {
  return (
    <section className={`flex flex-wrap justify-center gap-4`}>
      {videos?.map((video, index) => (
        <div key={index}>
          {video?.id?.channelId && <ChannelCard />}
          <VideoCard video={video} />
        </div>
      ))}
    </section>
  );
};

Videos.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Videos;
