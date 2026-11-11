import React from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Vestimenta from "./componentes-encabezado/vestimenta";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import ConfirmacionAsistencia from "./componentes-encabezado/confirmacion";
import Padres from "./componentes-encabezado/Padres";
import Musica from "./componentes-encabezado/Musica";

export default function PaginaPrincipal() {

  return (
    <div>

      <Musica/>

      <Padres />

      <Celebracion/>

      <Vestimenta />

      <Intinerario2/>

      <ConfirmacionAsistencia/>
    </div>
  );
}