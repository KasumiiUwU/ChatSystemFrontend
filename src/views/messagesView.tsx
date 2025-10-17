import { useEffect, useState } from "react";
// import { conversations } from "../data/conversations";
import type { Conversation } from "../models/conversation";
import MessageList from "../components/messageList";
import type { Message } from "../models/message";
import { connection } from "../signalR/signalRConnection";

const MessagesView = () => {

  const [conversations, setConversations] = useState<Conversation[]>([]);

  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(conversations[0]);

  const handleConversationClick = (conversation: Conversation) => {
    setSelectedConversation(conversation);
  };

  const [messagesByConversation, setMessagesByConversation] = useState<
    Record<string, Message[]>
  >({});
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    
  }, []);

  return (
    <>
      {/* Left: Conversations */}
      <div className="flex flex-col w-1/3 bg-[#1F1F1F] rounded-2xl text-white shadow-md p-4">
        <h1 className="text-2xl font-bold mb-4">Conversations</h1>

        {/* Search box */}
        <div className="bg-[#3A3B3C] rounded-2xl px-4 py-2 mb-4">
          <input
            type="search"
            placeholder="Search..."
            className="w-full bg-transparent outline-none text-white"
          />
        </div>

        {/* Conversation list */}
        <div className="flex-1 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-[#3A3B3C] scrollbar-track-[#1A1B1C]">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => handleConversationClick(conversation)}
              className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all ${
                selectedConversation?.id === conversation.id
                  ? "bg-[#3A3B3C]"
                  : "bg-[#2A2B2C] hover:bg-[#3A3B3C]"
              }`}
            >
              <img
                src={conversation.avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h2 className="font-medium">{conversation.name}</h2>
                <p className="text-gray-400 text-sm truncate">
                  {conversation.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Chat area */}
      <div className="flex flex-col w-2/3 bg-[#1F1F1F] rounded-2xl text-white shadow-md p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 border-b border-[#2A2B2C] pb-3">
          <div className="flex items-center gap-3">
            <img
              src={
                selectedConversation?.avatar || "https://via.placeholder.com/40"
              }
              alt="Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-lg font-medium">
              {selectedConversation?.name}
            </span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto mb-3">
          <MessageList conversation={selectedConversation} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-[#3A3B3C] rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full bg-transparent outline-none text-white"
            />
          </div>
          <button className="flex items-center justify-center p-2 hover:scale-105 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              className="stroke-current text-blue-500"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14.76 12H6.832m0 0c0-.275-.057-.55-.17-.808L4.285 5.814c-.76-1.72 1.058-3.442 2.734-2.591L20.8 10.217c1.46.74 1.46 2.826 0 3.566L7.02 20.777c-1.677.851-3.495-.872-2.735-2.591l2.375-5.378A2 2 0 0 0 6.83 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default MessagesView;
