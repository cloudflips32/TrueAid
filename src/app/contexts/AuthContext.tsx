import { createContext, useContext, ReactNode } from "react";
import { useUser } from "@stackframe/react";

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
  const stackUser = useUser();

  const user: User | null = stackUser
    ? {
      id: stackUser.id,
      name: stackUser.displayName || "",
      email: stackUser.primaryEmail || "",
    }
    : null;

  const login = async (email: string, password: string) => {
    // This is now handled by Stack's <SignIn /> component
    console.log("Login should be handled by Stack component");
  };

  const signup = async (name: string, email: string, password: string) => {
    // This is now handled by Stack's <SignUp /> component
    console.log("Signup should be handled by Stack component");
  };

  const logout = () => {
    stackUser?.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!stackUser,
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
