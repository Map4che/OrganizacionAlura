import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  const { colorPrimario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  const fondo = {
    backgroundColor: hexToRgba(colorPrimario, 0.5),
  };

  const estiloTitulo = { borderColor: colorPrimario };
  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={fondo}>
          <input
            className="input-color"
            type="color"
            value={colorPrimario}
            onChange={(evento) => {
              actualizarColor(evento.target.value, id);
            }}
          />
          <h3 className="equipo-title" style={estiloTitulo}>
            {titulo}
          </h3>
          <div className="equipo-colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
