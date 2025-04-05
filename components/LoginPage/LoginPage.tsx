import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { UserContext } from "../../context/UserContext";

interface jwtPayloadExtended extends JwtPayload {
  user?: { id: number; password: string; username: string };
}

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleRegiserButtonClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate("/register");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (username.length === 0 || password.length === 0) return;

    const response = await fetch(
      import.meta.env.VITE_CORE_URL + "/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    const res = await response.json();

    if (res.token) {
      const decoded: jwtPayloadExtended = jwtDecode(res.token);
      const decodedUser = decoded.user;
      setUser(decodedUser);
      localStorage.setItem("token", res.token);
      navigate("/");
    }
  };

  return (
    <div className="h-screen flex flex-col gap-8 justify-center items-center bg-amber-100">
      <form
        className="border border-black w-1/2 h-1/2 flex flex-col gap-4 justify-center items-center rounded-4xl shadow-2xl bg-amber-200"
        method="POST"
        action=""
      >
        <h1 className="text-5xl font-bold mb-8">Log In To Continue</h1>
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
          Log In
        </button>
        <button
          onClick={handleRegiserButtonClick}
          className="border border-black w-1/2 mt-4 h-8 rounded-full hover:bg-amber-300 hover:cursor-pointer"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
