import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Checkout } from "./pages/Checkout";
import StackAuthHandler from "./pages/StackAuthHandler";

export const router = createBrowserRouter([
  {
    path: "/handler/*",
    Component: StackAuthHandler,
  },
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "cart", Component: Cart },
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },
      { path: "checkout", Component: Checkout },
    ],
  },
]);
