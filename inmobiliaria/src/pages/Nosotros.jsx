import popayan1 from "../assets/popayan1.webp"
import popayan2 from "../assets/popayan4.jpg"
import popayan3 from "../assets/popayan3.jpg"
import popayan4 from "../assets/popayan5.jpg"
import logo from "../assets/logo.png"

export default function Nosotros() {
  return (
    <div className="main">
      <div className="carrusel">
        <div className="carrusel-titulo">
          <h1>Nosotros</h1>
        </div>
        <ul>
          <li><img src={popayan3} alt="Popayan Carrusel" /></li>
          <li><img src={popayan4} alt="Popayan Carrusel" /></li>
          <li><img src={popayan1} alt="Popayan Carrusel" /></li>
          <li><img src={popayan2} alt="Popayan Carrusel" /></li>
        </ul>
      </div>
      <div className="espacio"></div>
      <section className="nosotros">
        <div className="presencia">
          <div className="presencia-parrafo">
            <div className="presencia-parrafo-1">
              <h2>Presencia Municipal</h2>
              <p>En Nuestra Empresa, Nos Especializamos En La Construcción De Casas De Alta Calidad . Trabajamos En Estrecha Colaboración Con Nuestros Clientes Para Asegurarnos De Que Su Casa Sea Exactamente Lo Que Ellos Desean. Nuestro Equipo De Expertos En Construcción Cuenta Con Una Amplia Experiencia En El Mercado Inmobiliario, Lo Que Nos Permite Ofrecer Una Amplia Gama De Servicios Que Incluyen La Compra, Venta Y Alquiler De Propiedades.</p>
            </div>
            <p>En nuestro sitio web encontrarás toda la información que necesitas sobre nuestros servicios y productos. Puedes explorar nuestros modelos de casas y obtener inspiración para tu propia casa. Además, puedes ver nuestras propiedades en venta y en alquiler. Contamos con un equipo de profesionales altamente capacitados y amables, dispuestos a responder a todas tus preguntas y ayudarte en todo lo que necesites.</p>
          </div>
        </div>
        <div className="responsabilidad">
          <h2>Responsabilidad</h2>
          <p>Somos una empresa líder en el mercado que se dedica a construir las casas de tus sueños. Nos enorgullece ser una empresa que ofrece servicios integrales, desde la planificación y diseño, hasta la construcción y entrega de la casa terminada. Nuestro objetivo es hacer que el proceso de adquisición o construcción de tu casa sea lo más fácil y sin complicaciones posible.</p>
        </div>
        <div className="mi-vi">
          <div className="vision">
            <h2>Nuestra Visión</h2>
            <p>En Grupo Real Estate Constructores Inversores nos hemos comprometido a proporcionar soluciones integrales en la construcción de vivienda y obras civiles, ajustadas siempre a las más avanzadas tecnologías y normas de calidad, que permitan satisfacer ampliamente las necesidades y expectativas de nuestros clientes a un precio justo y excelente servicio. Gracias a nuestro equipo de colaboradores, apoyándonos en una administración ágil y confiable, y con un abanico de productos y servicios de construcción acorde con las necesidades del mercado, mantendremos nuestro liderazgo y nuestra contribución al desarrollo económico y social con un alto nivel de rentabilidad y productividad que permita la retribución adecuada de nuestros clientes internos y externos, así como de la sociedad en general. Contribuimos al desarrollo de nuestros empleados, al respecto del medioambiente y la seguridad y salud en el trabajo.</p>
            <img src={logo} alt="Logo" />
          </div>
          <div className="mision">
            <h2>Nuestra Misión</h2>
            <p>Somos una empresa líder en el mercado que se dedica a construir las casas de tus sueños. Nos enorgullece ser una empresa que ofrece servicios integrales, desde la planificación y diseño, hasta la construcción y entrega de la casa terminada. Nuestro objetivo es hacer que el proceso de adquisición o construcción de tu casa sea lo más fácil y sin complicaciones posible.</p>
          <h2>Valores</h2>
          <p>Orientación al cliente: Consideramos clave volcarnos en el conocimiento y las necesidades de los clientes, cumpliendo los compromisos adquiridos con la mayor satisfacción.
          Compromiso con las personas: Fomentamos el desarrollo personal y profesional de nuestros empleados, promoviendo un entorno de trabajo respetuoso y trabajando en equipo.
          Conducta Ética: Nuestras actuaciones y decisiones se basan en la profesionalidad, integridad moral, lealtad y respeto a las personas.
          Seguridad y salud: Promovemos una cultura preventiva para la mejora de las condiciones de seguridad implicando a todo el personal.
          Comunidad y Medio Ambiente: Practicamos una actitud sostenible y comprometida con nuestro entorno, con el medioambiente y la Sociedad.
          Innovación: Potenciamos el desarrollo de nuevas técnicas promoviendo la mejora continua para alcanzar la máxima calidad.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
