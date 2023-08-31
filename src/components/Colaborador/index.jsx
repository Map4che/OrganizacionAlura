import "./Colaborador.css";
import { FaWindowClose } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo, id, fav } = props.datos;
  const { colorPrimario, eliminarColaborador, like } = props;
  const estiloPrimario = {
    backgroundColor: colorPrimario,
  };
  return (
    <div className="colaborador">
      <FaWindowClose
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
      />
      <div className="encabezado" style={estiloPrimario}>
        <img src={foto} alt={nombre} className="imagen-encabezado" />
      </div>
      <div className="info">
        <h4 className="nombre-info">{nombre}</h4>
        <h5 className="cargo-info">{puesto}</h5>
        {fav ? (
          <AiFillHeart color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default Colaborador;
