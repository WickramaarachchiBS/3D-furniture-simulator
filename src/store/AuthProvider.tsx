import React, { createContext, useContext, useState } from "react";
import type { User, UserRole } from "../types";

interface AuthContextType {
  user: User | null;
  login: (u: string, p: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo Credentials
const users = [
  { username: "admin", password: "admin123", role: "admin" as UserRole },
  {
    username: "customer",
    password: "customer123",
    role: "customer" as UserRole,
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string): boolean => {
    const found = users.find(
      (u) => u.username === username && u.password === password,
    );
    if (found) {
      setUser({ username: found.username, role: found.role });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
