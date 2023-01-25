import React from 'react'
import veterinaria from "../../imagenes/veterinaria.png";
import perritos from "../../imagenes/Peluditos_Cachorros_2.png";
import gatico from "../../imagenes/angel_gato.png";
import { Sectionplans } from './style';

const Service = () => {
  return (
    <Sectionplans>
      <section className='planes-seguro'>
        <h1> ¿Por qué Seguro Peludo? </h1>
        <p>Estar preparado es la mejor opción para proteger la vida de aquellos
          peluditos a los que tanto amamos</p>
        <div className='container-plans'>
        <section className='background-img'>Shades of Purple
          <div className='service'>
            <figure className='figure-one'>
                <img className='veterinaria' src={veterinaria} alt="veterinaria" />
                <figcaption>Atención Veterinaria</figcaption>
              </figure>
              <figure>
                <img className='perrito' src={perritos} alt="perrito" />
                <figcaption>Servicios de Guarderia</figcaption>
              </figure>
              <figure>
                <img className='gatico' src={gatico} alt="gatico" />
                <figcaption>Servicios Funerarios</figcaption>
              </figure>
              </div>
              <button>VEAMOS LOS PLANES</button>
              
            </section>          
        </div>
      </section>
    </Sectionplans>

  )
}
export default Service