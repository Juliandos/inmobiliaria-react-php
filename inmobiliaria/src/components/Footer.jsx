import logo2 from "../assets/logo2.jpg"
import face from "../assets/facebook.png"
import insta from "../assets/instagram.png"
import twit from "../assets/gorjeo.png"
import you from "../assets/youtube.png"
import lin from "../assets/linkedin.png"
import git from "../assets/signo-de-github.png"

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-h1">
            <div className="footer-h1-ciudades">
                <h3>Descubrir</h3>
                <ul>
                    <li><a href="">Popayán</a></li>
                    <li><a href="">Cali</a></li>
                    <li><a href="">Bogotá</a></li>
                    <li><a href="">Medellín</a></li>
                    <li><a href="">Buga</a></li>
                </ul>
            </div>
            <div className="footer-h1-links">
                <h3>Links de Interes</h3>
                    <ul>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Comprar</a></li>
                        <li><a href="">Arrendar</a></li>
                        <li><a href="">Nosotros</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
            </div>
            <div className="footer-h1-contacto">
                <h3>Contacto</h3>
                <h4>Popayán Cauca</h4>
                <p>Cra. 10 BIS # 22N-41 </p>
                <p>Barrio Urapanes de Catay </p>
                <span>correo@gmail.com</span>
                <h4>3116242561</h4>
                <hr />
                <h4>Bogotá Cundinamarca</h4>
                <p>Cra. 10 BIS # 22N-41 </p>
                <p>Barrio Urapanes de Catay </p>
            </div>
            <div className="footer-h1-bienvenida">
                <img src={logo2} alt="Logo2" />
                <h4>Bienvenido A Nuestra Página Web De Venta De Lotes , Casas Y Bienes Raíces En La Popayán, Bogotá Colombia.</h4>
            </div>
        </div>
        <hr />
        <div className="footer-h2">
            <div className="face"><img src={face} alt="Facebook" /></div>
            <div className="insta"><img src={insta} alt="Instagram" /></div>
            <div className="twit"><img src={twit} alt="Twitter" /></div>
            <div className="lin"><img src={lin} alt="linkedin" /></div>
            <div className="you"><img src={you} alt="Youtube" /></div>
            <div className="git"><img src={git} alt="Giyhub" /></div>
        </div>
        <hr />
        <div className="footer-h3">
            <p>© copyright 2020. All Rights Reserved.</p>
            <p></p>
        </div>
    </footer>
  )
}
