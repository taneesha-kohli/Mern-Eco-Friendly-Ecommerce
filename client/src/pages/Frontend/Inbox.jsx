import { Mail, Send } from "lucide-react";

export default function InboxPage() {
  const conversations = [
    {
      id: 1,
      name: "Support Team",
      lastMessage: "Your order has been shipped",
      time: "2 min ago",
    },
    {
      id: 2,
      name: "Eco Store",
      lastMessage: "New eco products available 🌱",
      time: "1 hour ago",
    },
  ];

  const messages = [
    { from: "them", text: "Hello! How can we help you?" },
    { from: "me", text: "I want to track my order." },
    { from: "them", text: "Sure! Please share your order ID." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex p-6 gap-6 w-full">
      

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-xl shadow flex overflow-hidden">
        
        {/* Left - Conversation List */}
        <div className="w-[300px] border-r">
          <h2 className="p-4 font-semibold border-b">Messages</h2>

          <div className="overflow-y-auto h-[calc(100vh-120px)]">
            {conversations.map((chat) => (
              <div
                key={chat.id}
                className="p-4 border-b hover:bg-gray-100 cursor-pointer"
              >
                <p className="font-medium">{chat.name}</p>
                <p className="text-sm text-gray-500 truncate">
                  {chat.lastMessage}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {chat.time}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Chat Area */}
        <div className="flex-1 flex flex-col">
          
          {/* Chat Header */}
          <div className="p-4 border-b font-semibold">
            Support Team
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.from === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-xs text-sm ${
                    msg.from === "me"
                      ? "bg-[#00965f] text-white"
                      : "bg-white border"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
            <button className="bg-[#00965f] text-white px-4 rounded-lg flex items-center justify-center">
              <Send size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}