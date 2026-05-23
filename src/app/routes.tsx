import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/handler/*",
    lazy: async () => {
      const module = await import("./pages/StackAuthHandler");
      return { Component: module.default };
    },
  },
  {
    path: "/",
    children: [
      {
        index: true,
        lazy: async () => {
          const { Landing } = await import("./pages/Landing");
          return { Component: Landing };
        },
      },
      {
        element: <RootLayout />,
        children: [
          {
            path: "home",
            lazy: async () => {
              const { Home } = await import("./pages/Home");
              return { Component: Home };
            },
          },
          {
            path: "cart",
            lazy: async () => {
              const { Cart } = await import("./pages/Cart");
              return { Component: Cart };
            },
          },
          {
            path: "login",
            lazy: async () => {
              const { Login } = await import("./pages/Login");
              return { Component: Login };
            },
          },
          {
            path: "signup",
            lazy: async () => {
              const { Signup } = await import("./pages/Signup");
              return { Component: Signup };
            },
          },
          {
            path: "checkout",
            lazy: async () => {
              const { Checkout } = await import("./pages/Checkout");
              return { Component: Checkout };
            },
          },
        ],
      },
    ],
  },
]);
