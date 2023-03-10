import React from 'react'
import veterinaria from "../../imagenes/veterinaria.png";
import perritos from "../../imagenes/Peluditos_Cachorros_2.png";
import gatico from "../../imagenes/angel_gato.png";
import peluditos from '../../imagenes/Peluditos.png';
import atencionVeterinaria from "../../imagenes/atencion-veterinaria.svg";
import costosMedicos from '../../imagenes/gastosm.svg';
import funerarios from "../../imagenes/funerarios.svg";
import { Sectionplans } from './style';

const Service = () => {
  return (
    <Sectionplans>
      <section className='pc-view'>
        <article className='planes-seguro'>
          <h1> ¿Por qué Seguro Peludo? </h1>
          <p>Estar preparado es la mejor opción para proteger la vida de aquellos
            peluditos a los que tanto amamos</p>
          <div className='container-plans'>
            <section>
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
        </article>
      </section>
      <section className='mobil-view'>
        <div className='animalitosPequeños'>
          <img className='animalitos' src={peluditos} alt="peluditos" />
        </div>
        <h2 className='title-mobile'>¿Por qué un Seguro para Mascotas?</h2>
        <p className='parr-mobil'>Estar preparado es la mejor opción para proteger
          la vida de aquellos peluditos a los que tanto amamos</p>
          <article >
            <div className='div-icononos'>
            <figure className='primericono'>
              <img className='icono-one' src={atencionVeterinaria} alt="icono-one" />
              <figcaption className='parr-icono-one'>Atención <br/><strong>Veterinaria</strong></figcaption>
            </figure>
            <figure className='segundoicono'>
              <img className='icono-two' src={costosMedicos} alt="icono-two" />
              <figcaption className='parr-icono-two'>Gastos <br/><strong> Médicos</strong></figcaption>
            </figure>
            <figure className='tercericono'>
              <img className='icono-three' src={funerarios} alt="icono-three" />
              <figcaption className='parr-icono-three'> Servicios <br/><strong>Funerarios</strong></figcaption>
            </figure>
            </div>
          </article>
      </section>
    </Sectionplans>

  )
}
export default Service