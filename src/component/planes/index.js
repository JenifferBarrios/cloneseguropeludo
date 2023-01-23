import React from 'react'
import veterinaria from "../../imagenes/veterinaria.png";
import perritos from "../../imagenes/Peluditos_Cachorros_2.png";
import gatico from "../../imagenes/angel_gato.png";
import { Sectionplanes } from './style';

const Planes = () => {
  return (
    <Sectionplanes>
      <section className='planes-seguro'>
        <h1> ¿Por qué Seguro Peludo? </h1>
        <p>Estar preparado es la mejor opción para proteger la vida de aquellos
          peluditos a los que tanto amamos</p>
        <div>
          <img className='veterinaria' src={veterinaria} alt="veterinaria" />
          <img className='perrito' src={perritos} alt="perrito" />
          <img className='gatico' src={gatico} alt="gatico" />
        </div>
        <button>VEAMOS LOS PLANES</button>
      </section>      
    </Sectionplanes>

  )
}
export default Planes