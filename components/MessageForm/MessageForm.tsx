import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";

function MessageForm() {
  const [targetUsername, setTargetUsername] = useState("");
  const [text, setText] = useState("");
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSendMessage = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await fetch("http://localhost:3000/users/" + user!.id + "/inbox", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ targetUsername, sendingUserId: user!.id, text }),
    });

    navigate("/");
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="h-screen bg-amber-100 flex flex-col gap-8 justify-center items-center">
      <form
        method="post"
        action={""}
        className="border w-1/2 h-1/2 rounded-3xl bg-amber-200 shadow-xl shadow-amber-200 p-4 flex flex-col gap-10"
      >
        <h1 className="text-center text-3xl font-bold">Send a Message</h1>
        <div className="self-center">
          <label htmlFor="targetUser" className="text-lg">
            Send To User:{" "}
          </label>
          <input
            name="targetUser"
            required
            minLength={4}
            className="bg-white py-1 px-2 rounded-2xl"
            value={targetUsername}
            onChange={(e) => setTargetUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <textarea
            name="messageText"
            autoComplete="on"
            maxLength={300}
            minLength={5}
            placeholder="Enter your message here..."
            rows={5}
            required
            className="bg-white rounded-2xl p-1 resize-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button
          onClick={handleSendMessage}
          className="text-lg bg-green-300 rounded-2xl border hover:bg-green-600 hover:cursor-pointer hover:text-white"
        >
          Send
        </button>
      </form>
      <Link to="/">
        <button className="bg-orange-400 border border-black rounded-3xl px-4 py-2 text-white  hover:bg-orange-700 hover:cursor-pointer">
          Dashboard
        </button>
      </Link>
    </div>
  );
}

export default MessageForm;
