import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AdminContext = createContext({
  isAdmin: false,
  adminProfile: () => {},

  editorProfile: () => {},
});
