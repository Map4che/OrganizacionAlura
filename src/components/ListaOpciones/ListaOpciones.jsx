import { useState } from "react";
import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  const lista = props.equipos.map((equipo, index) => {
    return (
      <option className="opcion-item" key={index}>
        {equipo}
      </option>
    );
  });

  //const [equipo, setEquipo] = useState("");

  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <div>
      <label htmlFor="" className="equipos">
        Equipos
      </label>
      <select
        name=""
        id=""
        className="opciones-equipos"
        value={props.valor}
        onChange={manejarCambio}
      >
        <option value="" disabled defaultValue="" hidden>
          Seleccionar Equipo
        </option>
        {lista}
      </select>
    </div>
  );
};

export default ListaOpciones;
