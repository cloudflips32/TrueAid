import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { StackProvider, StackTheme } from "@stackframe/react";
import { router } from "./routes";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import { stackClientApp } from "../stack/client";
import Loading from "./loading";

export default function App() {
  return (
    <StackProvider app={stackClientApp}>
      <StackTheme>
        <Suspense fallback={<Loading />}>
          <AuthProvider>
            <CartProvider>
              <RouterProvider router={router} />
            </CartProvider>
          </AuthProvider>
        </Suspense>
      </StackTheme>
    </StackProvider>
  );
}