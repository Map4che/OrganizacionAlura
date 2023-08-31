import "./Footer.css";

const Footer = () => {
  const fondo = {
    backgroundImage: "url(/img/footer.png)",
  };
  return (
    <footer className="footer" style={fondo}>
      <div className="redes">
        <a href="https://www.aluracursos.com" className="enlace-redes">
          <img
            src="/img/facebook.png"
            alt="Facebook"
            className="img-red__social"
          />
        </a>
        <a href="https://www.aluracursos.com" className="enlace-redes">
          <img
            src="/img/twitter.png"
            alt="twitter"
            className="img-red__social"
          />
        </a>
        <a href="https://www.aluracursos.com" className="enlace-redes">
          <img
            src="/img/instagram.png"
            alt="instagram"
            className="img-red__social"
          />
        </a>
      </div>
      <img src="/img/logo.png" alt="org" className="logo" />
      <strong className="hecho-por">
        Desarrollado por Juan Pablo Londoño G.
      </strong>
    </footer>
  );
};

export default Footer;
