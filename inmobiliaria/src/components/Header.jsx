import cabezera from "../../src/assets/cabezara.jpg"
import hamburguesa from "../../src/assets/Menú-hamburguesa.png"
import x from "../../src/assets/Menu-x.png"
import { useState, useEffect } from "react"
// import popayan1 from "../assets/popayan1.webp"
// import popayan2 from "../assets/popayan4.jpg"
// import popayan3 from "../assets/popayan3.jpg"
// import popayan4 from "../assets/popayan5.jpg"

export default function Header() {

    const [clickmenu, setClickmenu] = useState(false)
    
    useEffect(() => {
    //   setMenu(true)
      setClickmenu(false)
    }, [])

  return (
    <header className="header-container">
        <div className="cabezera">
            <a href="/">
                <img src={cabezera} alt="cabezara"></img>
            </a>
        </div>

        <div className="menu-icon">
            {clickmenu ? 
                (
                    <div 
                    className="desplegable"
                    onClick={()=> setClickmenu(!clickmenu)}
                    >
                        <img src={x} alt="Menu-X" />
                        <div className="menu-desplegado">
                            <nav className="menu-nav">
                                <ul>
                                    <li><a href="/">Inicio</a></li>
                                    <li><a href="/comprar"> Comprar</a></li>
                                    <li><a href="/arrendar">Arrendar</a></li>
                                    <li><a href="/nosotros">Nosotros</a></li>
                                    <li><a href="/contacto">Contacto</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                ):(
                    <div 
                    onClick={()=> setClickmenu(!clickmenu)}
                    className="desplegable"
                    >
                        <img src={hamburguesa} alt="Menu-Hamburguesa"  />
                    </div>
                )
            }
            <div className="menu">
                <a href="/comprar"> Comprar</a>
                <a href="/arrendar">Arrendar</a>
                <a href="/nosotros">Nosotros</a>
                <a href="/contacto">Contacto</a>
            </div>
        </div>
        {/* <div className="carrusel">
            <ul>
            <li><img src={popayan3} alt="Popayan Carrusel" /></li>
            <li><img src={popayan4} alt="Popayan Carrusel" /></li>
            <li><img src={popayan1} alt="Popayan Carrusel" /></li>
            <li><img src={popayan2} alt="Popayan Carrusel" /></li>
            </ul>
            <div className="texto">
            <h2>Lotes, Casas Y Construcción En Popayán Cauca Colombia</h2>
            <p>Nos enfocamos en ofrecer a nuestros clientes proyectos inmobiliarios con gran calidad de vida a un precio asequible</p>
            </div>
        </div>
        <div className="espacio"></div>
        <div className="busqueda-container">
            <div className="busqueda">
                <div className="busqueda-tipo">
                    <h5>BUSCANDO</h5>
                    <div className="busqueda-tipo-entrada">
                    <div>Tipo de Propiedad</div>

                    </div>
                </div>
                <div className="busqueda-ubicacion">
                    <h5>UBICACIÓN</h5>
                    <div className="busqueda-ubicacion-entrada">
                    <div>Tipo de Ubicacion</div>

                    </div>
                </div>
                <button>Buscar</button>
            </div>
        </div> */}
    </header>
  )
}
