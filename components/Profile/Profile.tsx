import React from "react";

function Profile() {
  return (
    <div className="h-screen bg-fuchsia-100 flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col gap-28 text-5xl font-bold">
        <h1>*Username's* Profile Page</h1>
      </div>
      <h2 className="text-3xl mb-40">You have *0* messages in your inbox!</h2>
      <form method="put" action={""} className="flex gap-2">
        <label htmlFor="newUsername" className="text-3xl">
          Enter new Username:{" "}
        </label>
        <input
          type="text"
          name="newUsername"
          className="bg-white p-2 rounded-2xl border"
          minLength={4}
          required
        />
        <button className="bg-fuchsia-300 py-1 px-2 rounded-3xl text-lg hover:bg-fuchsia-400 hover:cursor-pointer">
          Change Username
        </button>
      </form>
    </div>
  );
}

export default Profile;
