import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar envio");
    let datos = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datos);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio} className="formulario-form">
        <h2 className="formulario-title">
          Rellene el formulario para crear el colaborador.
        </h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          setValor={setNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar Puesto"
          required
          valor={puesto}
          setValor={setPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar el enlace de la foto"
          valor={foto}
          setValor={setFoto}
        />
        <ListaOpciones
          valor={equipo}
          setValor={setEquipo}
          equipos={props.equipos}
        />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo} className="formulario-form">
        <h2 className="formulario-title">
          Rellene el formulario para crear el equipo.
        </h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required
          valor={titulo}
          setValor={setTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar el color en hexadecimal"
          required
          valor={color}
          setValor={setColor}
          type="color"
        />
        <Boton>Registrar Equipo</Boton>
      </form>
    </section>
  );
};

export default Formulario;
