import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Pages/Layout";
import Home from "../components/Pages/Home";
import Tienda from "../components/Pages/Tienda";
import Perfil from "../components/Pages/Perfil";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import NotFound from "../components/Pages/NotFound";
import ProtectedRoute from "./protectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
