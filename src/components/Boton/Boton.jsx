import "./Boton.css";

const Boton = (props) => {
  return (
    <div>
      <button className="formulario-btn">{props.children}</button>
    </div>
  );
};

export default Boton;
