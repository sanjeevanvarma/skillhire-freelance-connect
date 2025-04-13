import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockServices } from "./CategoryPage";

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = mockServices.find((s) => s.id === Number(serviceId));

  const [isChatOpen, setIsChatOpen] = useState(false); // Manage chat sidebar visibility
  const [message, setMessage] = useState(""); // Manage current message input
  const [messages, setMessages] = useState<string[]>([]); // Store chat messages

  if (!service) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-xl font-bold">Service not found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen); // Toggle chat sidebar visibility
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]); // Add the new message to the messages array
      setMessage(""); // Clear the message input field
    }
  };

  return (
    <div className="relative">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">{service.title}</h1>
        <img
          src={service.image}
          alt={service.title}
          className="w-full max-w-md mb-4 rounded"
        />
        <p>{service.description}</p>
        <p className="mt-2 font-semibold">Price: ${service.price}</p>
        <p>
          Rating: {service.rating} ({service.reviews} reviews)
        </p>
        <div className="mt-4 flex items-center">
          <img
            src={service.freelancerImage}
            alt={service.freelancer}
            className="w-10 h-10 rounded-full mr-2"
          />
          <span>{service.freelancer}</span>
        </div>

        {/* Chat Button */}
        <div className="mt-6">
          <button
            className="bg-skill-purple text-white px-5 py-2 rounded hover:bg-skill-purple-dark transition"
            onClick={toggleChat}
          >
            Chat with Freelancer
          </button>
        </div>
      </div>

      {/* Chat Sidebar */}
      {isChatOpen && (
        <div
          className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl transition-all transform ease-in-out duration-300"
          style={{ right: isChatOpen ? "0" : "-320px" }}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Chat with {service.freelancer}</h2>
            <button onClick={toggleChat} className="text-gray-600 hover:text-gray-800">
              ✖
            </button>
          </div>
          <div className="p-4 h-full overflow-y-auto space-y-4">
            {/* Displaying messages */}
            {messages.length === 0 ? (
              <div className="text-center text-gray-400">No messages yet...</div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-sm">{msg}</p>
                </div>
              ))
            )}
          </div>

          {/* Message Input and Send Button */}
          <div className="p-4 border-t flex items-center space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Handle typing in input field
              placeholder="Type your message..."
              className="w-full p-2 border rounded-lg"
            />
            <button
              onClick={handleSendMessage}
              className="bg-skill-purple text-white px-4 py-2 rounded hover:bg-skill-purple-dark transition"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ServiceDetail;
