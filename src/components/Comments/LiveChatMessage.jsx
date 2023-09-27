import { LuUserCircle2 } from "react-icons/lu";
import PropTypes from "prop-types";

const LiveChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center justify-between flex-wrap px-4 mb-2">
      <LuUserCircle2 size={25} />
      <p className="text-sm font-bold">{name}</p>
      <p className="text-sm">{message}</p>
    </div>
  );
};

LiveChatMessage.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default LiveChatMessage;
