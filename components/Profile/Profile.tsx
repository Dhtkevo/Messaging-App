import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newUsername, setNewUsername] = useState("");

  const handleChangeUsername = async (
    e: React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    await fetch(import.meta.env.VITE_CORE_URL + "/users/" + user?.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ newUsername, userId: user?.id }),
    });

    setUser({ ...user!, username: newUsername });
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    } else {
      fetch(import.meta.env.VITE_CORE_URL + "/users/" + user.id + "/inbox", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
        .then((response) => response.json())
        .then((response) => setMessages(response));
    }
  }, [user]);

  return (
    <div className="h-screen bg-fuchsia-100 flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col gap-28 text-5xl font-bold">
        <h1>{user ? `${user.username}'s` : ""} Profile Page</h1>
      </div>
      <h2 className="text-3xl mb-40">
        You have {messages.length} messages in your inbox!
      </h2>
      <form method="put" action={""} className="flex gap-2">
        <label htmlFor="newUsername" className="text-3xl">
          Enter new Username:{" "}
        </label>
        <input
          type="text"
          name="newUsername"
          className="bg-white p-2 rounded-2xl border"
          minLength={4}
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          required
        />
        <button
          onClick={handleChangeUsername}
          className="bg-fuchsia-300 py-1 px-2 rounded-3xl text-lg hover:bg-fuchsia-400 hover:cursor-pointer"
        >
          Change Username
        </button>
      </form>
      <Link to="/">
        <button className="bg-orange-400 border border-black rounded-3xl px-4 py-2 text-white mt-8 hover:bg-orange-700 hover:cursor-pointer">
          Dashboard
        </button>
      </Link>
    </div>
  );
}

export default Profile;
