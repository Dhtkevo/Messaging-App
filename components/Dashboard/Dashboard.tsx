import React from "react";
import Message from "../Message/Message";

function Dashboard() {
  return (
    <div className="h-screen bg-fuchsia-200 flex flex-col gap-4 items-center p-8">
      <div className="flex items-center gap-4">
        <h1 className="text-6xl font-bold">*User's* Dashboard</h1>
        <div className="flex justify-center items-center gap-2">
          <button className="bg-green-400 border border-black rounded-3xl px-4 py-2 text-white hover:bg-green-700 hover:cursor-pointer">
            New Message
          </button>
          <button className="bg-orange-400 border border-black rounded-3xl px-4 py-2 text-white  hover:bg-orange-700 hover:cursor-pointer">
            Profile
          </button>
        </div>
      </div>
      <div className="border border-fuchsia-400 rounded-4xl w-3/4 h-full p-2">
        <Message />
      </div>
    </div>
  );
}

export default Dashboard;
