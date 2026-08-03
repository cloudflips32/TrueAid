import { HexclaveHandler } from "@hexclave/react";
import { HexclaveClientApp } from "@hexclave/react";

export default function StackAuthHandler() {
  return <HexclaveHandler app={HexclaveClientApp} fullPage />;
}
