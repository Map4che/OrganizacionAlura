import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  /*
  const [mostrar, setMostrar] = useState(true);
  const manejarClick = () => {
    console.log("mostrarElemento");
    setMostrar(!mostrar);

    */

  return (
    <section className="org-section">
      <h3 className="org-title">Mi organización</h3>
      <img
        src="/img/Btn-add.png"
        alt="add"
        className="org-img"
        onClick={props.cambiarMostrar}
      />
    </section>
  );
};

export default MiOrg;
