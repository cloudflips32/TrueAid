import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate API call to Stack Auth
    console.log("Stack Auth Login API call:", {
      endpoint: "https://api.stack-auth.com/v1/auth/login",
      apiKey: "YOUR_STACK_AUTH_API_KEY",
      payload: { email, password }
    });

    // Mock successful login
    await new Promise(resolve => setTimeout(resolve, 500));

    setUser({
      id: "user_123",
      name: email.split("@")[0],
      email,
    });
  };

  const signup = async (name: string, email: string, password: string) => {
    // Simulate API call to Stack Auth
    console.log("Stack Auth Signup API call:", {
      endpoint: "https://api.stack-auth.com/v1/auth/signup",
      apiKey: "YOUR_STACK_AUTH_API_KEY",
      payload: { name, email, password }
    });

    // Mock successful signup
    await new Promise(resolve => setTimeout(resolve, 500));

    setUser({
      id: "user_123",
      name,
      email,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
