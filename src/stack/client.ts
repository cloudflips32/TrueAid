import { useNavigate } from "react-router";
import { StackClientApp } from "@stackframe/react";

export const stackClientApp = new StackClientApp({
  projectId: import.meta.env.VITE_STACK_PROJECT_ID,
  tokenStore: "cookie",
  redirectMethod: { useNavigate },
});
