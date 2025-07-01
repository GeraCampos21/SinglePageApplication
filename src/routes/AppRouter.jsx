// src/routes/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Formulario from "../pages/Formulario";
import RutaProtegida from '../routes/RutaProtegida';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<RutaProtegida><HomePage /></RutaProtegida>} />
        <Route path="/Formulario" element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  );
}
