import React from "react";

function LoginPage() {
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
          />
        </div>
        <button className="border border-black w-1/2 mt-4 h-8 rounded-full hover:bg-amber-300 hover:cursor-pointer">
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
