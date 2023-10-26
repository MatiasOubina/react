import React from "react";
import ReactDOM from "react-dom/client";
import { PrimerComponente } from "./assets/PrimerComponente/PrimerComponente"; /* IMPORTACION COMPONENTES */
import './index.css'  /*ESTILOS GENERALES */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimerComponente titulo="Esta es una prop" otroTitulo="Y esta es otra prop"></PrimerComponente>
  </React.StrictMode>
);














