import React from 'react';
import { Containerplanes } from './style';

const Planes = () => {
  return (
    <Containerplanes>
      <section className='container'>
        <article className='container-plans'>
          <h1>Nuestros Planes</h1>
          <p className='parf-planes'>Planeados pensando en
            la tranquilidad de tu peludito</p>
          <div className='container-table'>
            <div className="table-plane-columnBasico">
              <p className='p-basic'>Básico</p>
              <p className='price-basic'>$20.000</p>
              <p className='p-mensual-basico'>Mensual</p>
            </div>          
            <div className="table-plane-columnEstandar" id="estandar">
              <div className='column-yellow'>
                <p>Popular</p>
              </div>
              <p className="p-estandar">Estándar</p>
              <p className="price-estandar">$28.000</p>
              <p className="p-mensual-estadar">Mensual</p>
              <div className='column-yellow'>
                <p>Popular</p>
              </div>
            </div>
            <div className='table-plane-columnPremium'>
              <p className="p-premium">Premium</p>
              <p className="price-premium">$36.000</p>
              <p className="p-mensual-premium">Mensual</p>
            </div>
         </div>
        <h1>Beneficios de Seguro Peludo</h1>
        <p className='parf-planes'>Diseñamos nuestros planes para que sean simples y sencillos, de modo que puedas pasar menos
          tiempo eligiendo y más tiempo con tu peludito.</p>
      </article>
    </section>
    </Containerplanes >
  )
}

export default Planes

