import PropTypes from "prop-types";
import { useState } from "react";
import { fetchCommentReplies } from "../../utils/fetchFromAPI";

const Comment = ({ comment, showReplies, setShowIndex }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentReplies, setCommentReplies] = useState([]);
  const { snippet: { totalReplyCount = 0, topLevelComment } = {} } =
    comment || {};

  const actualComment = topLevelComment || comment;
  const {
    id = "",
    snippet: {
      authorProfileImageUrl = "",
      authorDisplayName = "",
      textDisplay = "",
      textOriginal = "",
    } = {},
  } = actualComment || {};

  const handleClick = () => {
    setShowIndex();
    setIsExpanded(!isExpanded);
    fetchCommentReplies(`comments?part=snippet&parentId=${id}`)
      .then((data) => setCommentReplies(data.items))
      .catch((error) => console.error(error));
  };

  const getButtonText = () => {
    if (showReplies && isExpanded) {
      return totalReplyCount > 0 ? "Hide Replies" : "No Replies";
    }
    return "View Replies";
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-x-3 items-center justify-start">
        <img
          src={authorProfileImageUrl}
          alt="profile-pic"
          className="rounded-full"
        />
        <p className="font-bold">{authorDisplayName}</p>
      </div>
      <div className="ml-16 mb-3">
        <p>{textDisplay || textOriginal}</p>
        <div>
          <button onClick={handleClick}>{getButtonText()}</button>
          {showReplies && isExpanded ? (
            totalReplyCount > 0 ? (
              <div>
                {commentReplies.map((reply) => (
                  <Comment key={reply.id} comment={reply} />
                ))}
              </div>
            ) : null
          ) : null}
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  showReplies: PropTypes.bool,
  setShowIndex: PropTypes.func,
};

export default Comment;
