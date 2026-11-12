
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// ==========================================
// COMPONENTES DE LA INVITACIÓN
// ==========================================

import Portada from "./componentes-encabezado/portada";
import PaginaPrincipal from "./PaginaPrincipal";

// ==========================================
// GENERADOR DE INVITACIONES
// ==========================================

import Generador from "./pages/Generador";

// ==========================================
// DETECTAR RUTA ACTUAL
// ==========================================

const rutaActual = window.location.pathname;

// ==========================================
// APLICACIÓN PRINCIPAL
// ==========================================

function App() {
  // Si la ruta es /generador,
  // mostrar solamente el generador.
  if (
    rutaActual === "/generador" ||
    rutaActual === "/generador/"
  ) {
    return <Generador />;
  }

  // En cualquier otra ruta,
  // mostrar la invitación.
  return (
    <main>
      <Portada />
      <PaginaPrincipal />
    </main>
  );
}

// ==========================================
// RENDERIZAR APLICACIÓN
// ==========================================

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
