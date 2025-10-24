import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChatbaseAdaAgent } from "./screens/ChatbaseAdaAgent";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ChatbaseAdaAgent />
  </StrictMode>,
);
