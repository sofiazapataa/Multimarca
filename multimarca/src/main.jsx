import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/appRouter";
import { AuthProvider } from "./context/authContext";

// ...existing code...
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </>
);
