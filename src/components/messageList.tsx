import { useEffect, useRef, useState } from "react";
import type { Conversation } from "../models/conversation";
import type { Message } from "../models/message";
import { messages } from "../data/messages";

interface MessageListProps {
  conversation: Conversation | null;
}

const MessageList: React.FC<MessageListProps> = ({ conversation }) => {
  const [messageList, setMessageList] = useState<Message[]>([]);
  const messageListRef = useRef<HTMLDivElement>(null);


  //fetch message from conversationId
  const getMessageFromConversationId = (conversationId: number) => {
    
    const filterMessages = messages.filter(
      (message) => message.conversationId === conversationId.toString()
    );
    setMessageList(filterMessages ? filterMessages : []);
  };

  useEffect(() => {
    if (conversation) {
      getMessageFromConversationId(conversation.id);
    }
  }, [conversation]);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messageList]);

  if (!conversation) {
    return <div>No conversation selected</div>;
  }

  return (
    <div
      ref={messageListRef}
      className="bg-[#1F1F1F] w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#3A3B3C] scrollbar-track-[#1A1B1C] hover:scrollbar-thumb-[#5A5B5C]"
    >
      {messageList.map((message) => (
        <div className="w-full h-20 mt-3 flex" key={message.id}>
          <img
            src={conversation.avatar}
            alt="Avatar"
            className="w-15 h-15 rounded-full object-cover"
          />
          <div className="w-[80%] h-full ml-3 hover:bg-[#3A3A3A]">
            <div className="flex">
              <h1 className="text-white font-bold text-2xl truncate">
                {message.senderId}
              </h1>
              <h2 className="flex items-center justify-center ml-2">
                {message.createdAt}
              </h2>
            </div>

            <p className="text-gray-300 text-sm mt-1 truncate">
              {message.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
