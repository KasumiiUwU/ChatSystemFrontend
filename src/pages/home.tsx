import { useState } from "react";
import { FiHome, FiMessageSquare, FiBell, FiSettings } from "react-icons/fi";
import MessagesView from "../views/messagesView";
import HomeView from "../views/homeView";

const Home = () => {
  const [activeMenu, setActiveMenu] = useState("messages");

  const sidebarItems = [
    { id: "home", icon: <FiHome />, tooltip: "Home" },
    { id: "messages", icon: <FiMessageSquare />, tooltip: "Messages" },
    { id: "notifications", icon: <FiBell />, tooltip: "Notifications" },
    { id: "settings", icon: <FiSettings />, tooltip: "Settings" },
  ];

  return (
    <div className="bg-[#1A1A1A] w-full h-screen flex items-center justify-center">
      {/* Sidebar Menu */}
      <div className="w-20 h-[95vh] bg-[#1F1F1F] rounded-2xl flex flex-col justify-between items-center py-6 shadow-lg">
        {/* Menu icons */}
        <div className="flex flex-col items-center space-y-8">
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className={`relative group cursor-pointer text-2xl transition-all ${
                activeMenu === item.id
                  ? "text-blue-500"
                  : "text-gray-400 hover:text-blue-400"
              }`}
              onClick={() => setActiveMenu(item.id)}
            >
              {item.icon}
              {/* Tooltip */}
              <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-[#2A2B2C] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                {item.tooltip}
              </span>
            </div>
          ))}
        </div>

        {/* Avatar / Profile bottom */}
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-600">
          {/* Gắn hình user đang login */}
          <img
            src="https://preview.redd.it/evernight-crying-v0-xepd1cfk3pqf1.jpeg?auto=webp&s=66f23078dcd151593e6116cf95989ba881cc63b0"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="flex gap-4 w-[98%] h-[95vh] rounded-2xl ml-3 mr-5">
        {/* Home view */}
        {activeMenu === "home" && (
          <>
            <HomeView />
          </>
        )}
        {/* View Chat */}
        {activeMenu === "messages" && (
          <>
            <MessagesView />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
