import popayan1 from "../assets/popayan1.webp"
import popayan2 from "../assets/popayan4.jpg"
import popayan3 from "../assets/popayan3.jpg"
import popayan4 from "../assets/popayan5.jpg"
import telefono from "../assets/telefono.png"
import ubicacion from "../assets/ubicacion.png"
import correo from "../assets/correo.svg"
import face from "../assets/facebook.png"
import insta from "../assets/instagram.png"
import twit from "../assets/gorjeo.png"
import you from "../assets/youtube.png"
import lin from "../assets/linkedin.png"
import git from "../assets/signo-de-github.png"



export default function Contacto() {
  return (
    <div className="main">
      <div className="carrusel">
      <div className="carrusel-titulo">
          <h1>Contacto</h1>
        </div>
        <ul>
          <li><img src={popayan3} alt="Popayan Carrusel" /></li>
          <li><img src={popayan4} alt="Popayan Carrusel" /></li>
          <li><img src={popayan1} alt="Popayan Carrusel" /></li>
          <li><img src={popayan2} alt="Popayan Carrusel" /></li>
        </ul>
      </div>
      <div className="espacio"></div>
      <section className="contacto">
        <div className="contacto-container">
            <div className="formulario">
                <h1>Consultanos tus dudas</h1>
                <form action="post">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" placeholder="Introduzca su nombre"/>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name="apellido" placeholder="Introduzca su apellido"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email"/>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea type="text" name="mensaje" placeholder="Mensaje"/>
                    <h3>Acuerdo</h3>
                    <div className="acuerdo">
                        <input type="checkbox" name="acuerdo" id="" />
                        <p>Doy mi consentimiento para que este sitio web almacene la información enviada</p>
                    </div>
                    <button>Enviar</button>
                </form>
            </div>
            <div className="informacion">
                <p>Para consultas contactar con nosotros</p>
                <div className="num-tel">
                  <img src={telefono} alt="telefono" />
                  <p>+57 3117857025</p>
                </div>
                <div className="ubicacion">
                  <img src={ubicacion} alt="ubicaion" />
                  <p>Carrera 10 BIS # 22N-41 Urapanes de Catay</p>
                </div>
                <div className="correo">
                  <img src={correo} alt="" />
                  <p>95juliandos@gmail.com</p>
                </div>
                <div className="logos">
                  <a href="#"><img src={face} alt="Facebook" /></a>
                  <a href="#"><img src={insta} alt="Instagram" /></a>
                  <a href="#"><img src={you} alt="Yotube" /></a>
                  <a href="#"><img src={git} alt="GihHub" /></a>
                  <a href="#"><img src={lin} alt="Linkedin" /></a>
                  <a href="#"><img src={twit} alt="Twitter" /></a>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
