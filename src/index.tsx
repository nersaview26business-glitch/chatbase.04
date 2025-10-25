import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChatbaseAdaAgent } from "./screens/ChatbaseAdaAgent";
import DashboardLayout from "./app/(dashboard)/layout";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DashboardLayout>
      <ChatbaseAdaAgent />
    </DashboardLayout>
  </StrictMode>,
);
