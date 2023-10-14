import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSend } from "react-icons/ai";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { setChatsRedux } from "../../utils/chatSlice";
import LiveChatMessage from "./LiveChatMessage";

const LiveChat = ({ id }) => {
  const [liveChat, setLiveChat] = useState("");
  const dispatch = useDispatch();
  const chats = useSelector((store) => store.chat.chats[id]) || [];

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        setChatsRedux({
          videoId: id,
          chat: {
            name: "Azam Mustufa",
            message: "LiveChat feature",
          },
        })
      );
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, id]);

  const handleLiveInput = (event) => {
    event.preventDefault();
    dispatch(
      setChatsRedux({
        name: "Live",
        message: liveChat,
      })
    );
    setLiveChat("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="overflow-y-scroll no-scrollbar flex-grow">
        {chats.map((chat, index) => (
          <LiveChatMessage
            key={index}
            name={chat.name}
            message={chat.message}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-x-2 mt-3 border-t border-gray-300">
        <form onSubmit={(event) => handleLiveInput(event.target.value)}>
          <input
            placeholder="Type your comment"
            className="w-10/12 bg-transparent p-2 outline-none border-b border-gray-400 focus:border-b-[2px] focus:border-blue-600"
            value={liveChat}
            onChange={(event) => setLiveChat(event.target.value)}
          />
        </form>
        <AiOutlineSend onClick={handleLiveInput} />
      </div>
    </div>
  );
};

LiveChat.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LiveChat;
