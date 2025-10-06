// Danh sách dữ liệu mẫu cho các hội thoại
const conversations = [
  {
    id: 1,
    name: "User 1",
    avatar: "https://via.placeholder.com/40",
    lastMessage: "This is the most recent message from User 1...",
  },
  {
    id: 2,
    name: "User 2",
    avatar: "https://via.placeholder.com/40",
    lastMessage: "This is the most recent message from User 2...",
  },
  {
    id: 3,
    name: "User 3",
    avatar: "https://via.placeholder.com/40",
    lastMessage: "This is the most recent message from User 3...",
  },
  {
    id: 4,
    name: "User 4",
    avatar: "https://via.placeholder.com/40",
    lastMessage: "This is the most recent message from User 4...",
  },
  {
    id: 5,
    name: "User 5",
    avatar: "https://via.placeholder.com/40",
    lastMessage: "This is the most recent message from User 5...",
  },
  {
    id: 6,
    name: "User 6",
    avatar: "https://via.placeholder.com/40",
    lastMessage: "This is the most recent message from User 6...",
  },
  {
    id: 7,
    name: "User 7",
    avatar: "https://via.placeholder.com/40",
    lastMessage: "This is the most recent message from User 7...",
  },
  {
    id: 8,
    name: "User 8",
    avatar: "https://via.placeholder.com/40",
    lastMessage: "This is the most recent message from User 8...",
  },
  {
    id: 9,
    name: "User 9",
    avatar: "https://via.placeholder.com/40",
    lastMessage: "This is the most recent message from User 9...",
  },
  {
    id: 10,
    name: "User 10",
    avatar: "https://via.placeholder.com/40",
    lastMessage: "This is the most recent message from User 10...",
  },
  {
    id: 11,
    name: "User 11",
    avatar: "https://via.placeholder.com/40",
    lastMessage: "This is the most recent message from User 11...",
  },
  {
    id: 12,
    name: "User 12",
    avatar: "https://via.placeholder.com/40",
    lastMessage: "This is the most recent message from User 12...",
  },
  {
    id: 13,
    name: "User 13",
    avatar: "https://via.placeholder.com/40",
    lastMessage: "This is the most recent message from User 13...",
  },
];

const Home = () => {
  return (
    <div className="bg-[#1A1A1A] w-full h-screen flex items-center justify-center">
      {/* <div className="w-20 h-20 bg-white"></div> */}
      <div className="flex justify-between gap-5 bg-[#1A1A1A]  w-[98%] h-[95vh] rounded-2xl overflow-hidden">
        <div className="w-1/3 h-full bg-[#1F1F1F] rounded-2xl text-white shadow-md">
          {/* phần chữ trên */}
          <div className="bg-[#1F1F1F] h-20 w-full rounded-2xl flex justtify-between items-center">
            <h1 className=" ml-2 text-2xl text-white font-bold">
              Conversations
            </h1>
          </div>
          {/* Thanh search */}
          <div className="h-10 w-[90%] bg-[#3A3B3C] flex justify-center items-center px-4 rounded-2xl mx-auto">
            <input
              type="search"
              placeholder="Search..."
              className="w-full h-full bg-transparent outline-none text-white"
            />
          </div>
          {/* Phần danh sách hội thoại */}
          <div className="mt-4 flex flex-col gap-3 px-3 overflow-y-auto h-[calc(100%-6rem)] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="flex items-center gap-4 p-2 bg-[#2A2B2C] rounded-lg hover:bg-[#3A3B3C] cursor-pointer"
              >
                <img
                  src={conversation.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <h2 className="text-white font-medium">{conversation.name}</h2>
                  <p className="text-gray-400 text-sm truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-2/3 h-full bg-[#1F1F1F] rounded-2xl text-white shadow-md"></div>
      </div>
    </div>
  );
};

export default Home;
