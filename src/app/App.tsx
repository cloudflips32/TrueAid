import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { HexclaveProvider, HexclaveTheme } from "@hexclave/react";
import { router } from "./routes";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import { hexclaveClientApp } from "./hexclave/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Loading from "./loading";

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HexclaveProvider app={hexclaveClientApp}>
          <HexclaveTheme>
            <AuthProvider>
              <CartProvider>
                <RouterProvider router={router} />
              </CartProvider>
            </AuthProvider>
          <Analytics />
          <SpeedInsights />
        </HexclaveTheme>
      </HexclaveProvider>
    </Suspense>
  );
}