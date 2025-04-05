import React, { useEffect, useState } from "react";

interface MessageProps {
  text: string;
  userId: number;
  messageId: number;
}

function Message({ text, userId, messageId }: MessageProps) {
  const [fromUser, setFromUser] = useState("");

  const handleDelete = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await fetch(import.meta.env.VITE_CORE_URL + "/messages/" + messageId, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_CORE_URL + "/users/" + userId, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((response) => response.json())
      .then((response) => setFromUser(response.username));
  }, []);

  return (
    <div className="bg-fuchsia-500 border border-white rounded-4xl flex p-4 shadow-2xl">
      <div className="flex flex-col gap-2 grow-1">
        <h2 className="font-bold text-lg text-center">From: {fromUser}</h2>
        <p className="text-lg">{text}</p>
        <p className="font-bold text-center">Messaging App</p>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleDelete}
          className="bg-red-500 py-2 px-8 rounded-full hover:bg-red-400 hover:cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Message;
