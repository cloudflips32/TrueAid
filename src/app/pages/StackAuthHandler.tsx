import { StackHandler } from "@stackframe/react";
import { stackClientApp } from "../../stack/client";

export default function StackAuthHandler() {
  return <StackHandler app={stackClientApp} fullPage />;
}
