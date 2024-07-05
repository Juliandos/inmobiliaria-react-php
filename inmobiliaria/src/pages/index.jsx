import React,{useState, useEffect} from 'react';
import axios from 'axios';
import popayan1 from "../assets/popayan1.webp"
import popayan2 from "../assets/popayan4.jpg"
import popayan3 from "../assets/popayan3.jpg"
import popayan4 from "../assets/popayan5.jpg"
// import Ccalibio from "../assets/Caminos de Calibio 5.jpg"
import habitacion from "../assets/habitacion.png"
import baño from "../assets/baños.png"
import parqueadero from "../assets/parquedero.png"

export default function Inicio() {

  const [lista, setLista] =  useState([]);

  async function getImagenes(){
    const res = await axios.get('http://localhost/LoriCode/back/api-imagen/');
    setLista(res.data)
    console.log(res.data)
  } 

  useEffect(() => {
    getImagenes();
  },[])

  return (
    <div className="main-i">
      <section className="carrusel-i">
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
      </section>
      <div className="espacio-i"></div>
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
      </div>
      <section className="destacados">
        <div className="destacados-texto">
          <h2>Descubra Nuestros Listados Destacados</h2>
          <p>Casas, Nuevas Construcciones, Lotes y Aparatamentos</p>
        </div>
        <div className="destacados-inmuebles">
          <div className="destacados-inmueble">
            <div className="imagen">
              <div className="vineta">Arrendo</div>
            </div>
            <div className="caracteristicas">
              <h3>220.000</h3>
              <h4>Barrio Calibio, Popayán</h4>
              <div className="miniatura">
                Área #m <sup>2</sup> <span>|</span> H <img src={habitacion} alt="Habitaciones" className="habitacion" /> <span>|</span> B <img src={baño} alt="Baños" className="baño" /> <span>|</span> P <img src={parqueadero} alt="Parquederos" className="parqueadero" />
              </div>
            </div>
          </div>
          <div className="destacados-inmueble">
            <div className="imagen">
              <div className="vineta">Arrendo</div>
            </div>
            <div className="caracteristicas">
              <h3>220.000</h3>
              <h4>Barrio Calibio, Popayán</h4>
              <div className="miniatura">
                Área #m <sup>2</sup> <span>|</span> H <img src={habitacion} alt="Habitaciones" className="habitacion" /> <span>|</span> B <img src={baño} alt="Baños" className="baño" /> <span>|</span> P <img src={parqueadero} alt="Parquederos" className="parqueadero" />
              </div>
            </div>
          </div>
          <div className="destacados-inmueble">
            <div className="imagen">
              <div className="vineta">Arrendo</div>
            </div>
            <div className="caracteristicas">
              <h3>220.000</h3>
              <h4>Barrio Calibio, Popayán</h4>
              <div className="miniatura">
                Área #m <sup>2</sup> <span>|</span> H <img src={habitacion} alt="Habitaciones" className="habitacion" /> <span>|</span> B <img src={baño} alt="Baños" className="baño" /> <span>|</span> P <img src={parqueadero} alt="Parquederos" className="parqueadero" />
              </div>
            </div>
          </div>
          <div className="destacados-inmueble">
            <div className="imagen">
              <div className="vineta">Arrendo</div>
            </div>
            <div className="caracteristicas">
              <h3>220.000</h3>
              <h4>Barrio Calibio, Popayán</h4>
              <div className="miniatura">
                Área #m <sup>2</sup> <span>|</span> H <img src={habitacion} alt="Habitaciones" className="habitacion" /> <span>|</span> B <img src={baño} alt="Baños" className="baño" /> <span>|</span> P <img src={parqueadero} alt="Parquederos" className="parqueadero" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="explora-container">
        <div className="explora">
          <div className="explora-texto">
            <h2>Explora Ciudades</h2>
            <p>Sebring está en una zona extrategica entre Miami y Orlando y es una ciudad que se encuentra en desarrollo</p>
          </div>
          <div className="explora-localidades">
            <div className="localidad">
              <div className="mascara">
                <h3>Ciudad</h3>
                <p># De Propiedades</p>
              </div>
            </div>
            <div className="localidad">
              <div className="mascara">
                <h3>Ciudad</h3>
                <p># De Propiedades</p>
              </div>
            </div>
            <div className="localidad">
              <div className="mascara">
                <h3>Ciudad</h3>
                <p># De Propiedades</p>
              </div>
            </div>
            <div className="localidad">
              <div className="mascara">
                <h3>Ciudad</h3>
                <p># De Propiedades</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="espacio-i"></div>
    </div>
  )
}
