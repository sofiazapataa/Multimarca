import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/sappRouter";
import { AuthProvider } from "./context/authContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </>
);



