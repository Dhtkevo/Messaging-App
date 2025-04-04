import React, { useState } from "react";
import { useNavigate } from "react-router";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 200) {
      navigate("/login");
    }
  };

  return (
    <div className="h-screen flex flex-col gap-8 justify-center items-center bg-amber-100">
      <form
        className="border border-black w-1/2 h-1/2 flex flex-col gap-4 justify-center items-center rounded-4xl shadow-2xl bg-amber-200"
        method="POST"
        action=""
      >
        <h1 className="text-5xl font-bold mb-8">Register an Account</h1>
        <div className="flex justify-center items-center gap-2">
          <label htmlFor="username" className="text-lg">
            Username:{" "}
          </label>
          <input
            type="text"
            name="username"
            minLength={4}
            required
            className="border border-black rounded-full p-2 bg-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          <label htmlFor="password" className="text-lg">
            Password:{" "}
          </label>
          <input
            type="password"
            name="password"
            required
            className="border border-black rounded-full p-2 bg-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="border border-black w-1/2 mt-4 h-8 rounded-full hover:bg-amber-300 hover:cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
