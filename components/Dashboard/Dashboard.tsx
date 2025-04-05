import React, { useEffect, useState } from "react";
import Message from "../Message/Message";
import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";

interface MessageType {
  id: number;
  text: string;
  userId: number;
}

function Dashboard() {
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    } else {
      fetch("http://localhost:3000/users/" + user.id + "/inbox")
        .then((response) => response.json())
        .then((response) => setMessages(response));
    }
  }, [user, messages]);

  const displayMessages = messages.map((message: MessageType) => (
    <Message
      key={message.id}
      messageId={message.id}
      text={message.text}
      userId={message.userId}
    />
  ));

  return (
    <div className="h-screen bg-fuchsia-200 flex flex-col gap-4 items-center p-8">
      <div className="flex items-center gap-4">
        <h1 className="text-6xl font-bold">{user?.username}'s Dashboard</h1>
        <div className="flex justify-center items-center gap-2">
          <Link to="/messages">
            <button className="bg-green-400 border border-black rounded-3xl px-4 py-2 text-white hover:bg-green-700 hover:cursor-pointer">
              New Message
            </button>
          </Link>
          <Link to="/profile">
            <button className="bg-orange-400 border border-black rounded-3xl px-4 py-2 text-white  hover:bg-orange-700 hover:cursor-pointer">
              Profile
            </button>
          </Link>
        </div>
      </div>
      <div className="border border-fuchsia-400 rounded-4xl w-3/4 h-full p-2">
        {displayMessages}
      </div>
    </div>
  );
}

export default Dashboard;
