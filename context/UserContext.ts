import { createContext } from "react";

interface User {
  id: number;
  username: string;
  password: string;
}

interface UserContextType {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
}

export const UserContext = createContext<UserContextType>({
  user: undefined,
  setUser: () => {},
});
