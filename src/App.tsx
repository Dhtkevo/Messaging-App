import "./App.css";
import LoginPage from "../components/LoginPage/LoginPage";
import RegisterPage from "../components/RegisterPage/RegisterPage";
import Dashboard from "../components/Dashboard/Dashboard";
import Profile from "../components/Profile/Profile";
import MessageForm from "../components/MessageForm/MessageForm";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import { UserContext } from "../context/UserContext";

interface User {
  id: number;
  username: string;
  password: string;
}

function App() {
  const [user, setUser] = useState<undefined | User>(undefined);
  const userValues = { user, setUser };

  return (
    <UserContext value={userValues}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="messages" element={<MessageForm />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
