import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { fetchComments } from "../../utils/fetchFromAPI";
import Comment from "./Comment";

const CommentsContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [showReplies, setShowReplies] = useState(false);
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    fetchComments(`commentThreads?part=snippet&videoId=${videoId}`)
      .then((data) => {
        setComments(data.items);
      })
      .catch((error) => console.error("Error fetching comment replies", error));
  }, [videoId]);

  const toggleShowReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <React.Fragment>
      <button onClick={toggleShowReplies}>
        {showReplies ? "Hide All Replies" : "View All Replies"}
      </button>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          comment={comment}
          showReplies={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </React.Fragment>
  );
};

CommentsContainer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default CommentsContainer;
