import { useState } from "react";
import {
  useNavigate,
  Link,
  useSearchParams,
} from "react-router";
import { useAuth } from "../contexts/AuthContext";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Heart } from "lucide-react";

export function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const redirect = searchParams.get("redirect");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);

      // Redirect to checkout if that's where they came from, otherwise home
      if (redirect === "checkout") {
        navigate("/checkout");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Heart className="w-8 h-8 text-orange-500 fill-orange-500" />
          <span className="text-2xl font-bold text-[#003865]">
            TrueHope
          </span>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#003865] hover:bg-[#002850]"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to={
                    redirect
                      ? `/signup?redirect=${redirect}`
                      : "/signup"
                  }
                  className="text-orange-500 font-medium hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>

            <div className="mt-6 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600">
                <strong>Stack Auth Config:</strong>
              </p>
              <code className="text-xs text-gray-700 block mt-1">
                API_KEY: YOUR_STACK_AUTH_API_KEY
              </code>
              <code className="text-xs text-gray-700 block">
                Endpoint: https://api.stack-auth.com
              </code>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}