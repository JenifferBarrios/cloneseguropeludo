import React from 'react';
import { Containerplanes } from './style';

const Planes = () => {
  return (
    <Containerplanes>
      <section>
        <article className='nuestros-planes'>
          <h1>Nuestros Planes</h1>
          <p id='parf-planes'>Planeados pensando en
            la tranquilidad de tu peludito</p>
          <div className='container-table'>
            <div className="table-header" id="basico">Básico</div>
            <div className="table-header" id="estandar">Estándar</div>
            <div className="table-header" id="premium">Premium</div>
            <div className="table-item">$20.000</div>
            <div className="table-item">$28.000</div>
            <div className="table-item">$36.000</div>
            <div className="table-item">Mensual</div>
            <div className="table-item">Mensual</div>
            <div className="table-item">Mensual</div>
          </div>
          <h1>Beneficios de Seguro Peludo</h1>
          <p id='parf-planes'>Diseñamos nuestros planes para que sean simples y sencillos, de modo que puedas pasar menos
            tiempo eligiendo y más tiempo con tu peludito.</p>
        </article>
      </section>
    </Containerplanes>
  )
}

export default Planes

