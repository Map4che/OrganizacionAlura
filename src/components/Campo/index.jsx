import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
  const placeholderModificado = `${props.placeholder}...`;
  const { type = "text" } = props;

  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label htmlFor="" className="label-title">
        {props.titulo}
      </label>
      <input
        className="input"
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Campo;
