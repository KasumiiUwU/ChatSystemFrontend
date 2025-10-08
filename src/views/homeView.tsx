import { useState } from "react";
import { FiMessageSquare, FiMoreVertical, FiX } from "react-icons/fi";
import { mockFriends } from "../data/friends";


const HomeView = () => {
  const [filter, setFilter] = useState<"all" | "online">("all");
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
  const [friendInput, setFriendInput] = useState("");

  const filteredFriends =
    filter === "all" ? mockFriends : mockFriends.filter((f) => f.status === "online");

  const handleAddFriend = () => {
    if (!friendInput.trim()) return;
    console.log("Gửi lời mời kết bạn đến:", friendInput);
    setFriendInput("");
    setIsAddFriendOpen(false);
  };

  return (
    <div className="flex gap-4 h-full w-full text-white rounded-2xl">
      {/* Friend List Section */}
      <div className="flex flex-col flex-1 bg-[#1F1F1F] rounded-2xl p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-3 items-center">
            <button
              className={`px-3 py-1 rounded-lg ${
                filter === "all" ? "bg-[#3A3B3C]" : "hover:bg-[#2A2B2C]"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`px-3 py-1 rounded-lg ${
                filter === "online" ? "bg-[#3A3B3C]" : "hover:bg-[#2A2B2C]"
              }`}
              onClick={() => setFilter("online")}
            >
              Online
            </button>
          </div>
          <button
            onClick={() => setIsAddFriendOpen(true)}
            className="bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-500 transition"
          >
            Add Friend
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-[#2A2B2C] rounded-lg px-3 py-2 mb-4">
          <input
            type="text"
            placeholder="Search friends..."
            className="bg-transparent outline-none w-full text-white"
          />
        </div>

        {/* Friend List */}
        <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-[#3A3B3C] scrollbar-track-[#1F1F1F]">
          {filteredFriends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-[#2A2B2C] transition"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#1F1F1F] ${
                      friend.status === "online" ? "bg-green-500" : "bg-gray-500"
                    }`}
                  />
                </div>
                <div>
                  <h2 className="font-medium">{friend.name}</h2>
                  <p className="text-sm text-gray-400">
                    {friend.status === "online" ? "Online" : "Offline"}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 text-gray-400">
                <FiMessageSquare className="cursor-pointer hover:text-blue-400" />
                <FiMoreVertical className="cursor-pointer hover:text-blue-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Now Section */}
      <div className="w-[25%] bg-[#1F1F1F] p-4 rounded-2xl">
        <h2 className="text-lg font-bold mb-2">Active Now</h2>
        <p className="text-gray-400 text-sm">No one is active right now 👀</p>
      </div>

      {/* Add Friend Modal */}
      {isAddFriendOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#242526] p-6 rounded-2xl w-[22rem] relative">
            <button
              onClick={() => setIsAddFriendOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <FiX size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4">Add a Friend</h2>
            <input
              type="text"
              value={friendInput}
              onChange={(e) => setFriendInput(e.target.value)}
              placeholder="Enter username or ID"
              className="w-full p-2 rounded-lg bg-[#3A3B3C] outline-none text-white placeholder-gray-400"
            />

            <button
              onClick={handleAddFriend}
              className="mt-4 w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Send Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeView;
