import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Checkout } from "./pages/Checkout";
import { Landing } from "./pages/Landing";
import StackAuthHandler from "./pages/StackAuthHandler";

export const router = createBrowserRouter([
  {
    path: "/handler/*",
    Component: StackAuthHandler,
  },
  {
    path: "/",
    children: [
      { index: true, Component: Landing },
      {
        element: <RootLayout />,
        children: [
          { path: "home", Component: Home },
          { path: "cart", Component: Cart },
          { path: "login", Component: Login },
          { path: "signup", Component: Signup },
          { path: "checkout", Component: Checkout },
        ],
      },
    ],
  },
]);
