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
            <div className="table-plane-columnBasico">
              <p className='p-basic'>Básico</p>
              <p className='price-basic'>$20.000</p>
              <p className='p-mensual'>Mensual</p>
            </div>          
            <div className="table-plane-columnPremium" id="estandar">
              <div className='column-yellow'>
                <p>Popular</p>
              </div>
              <p classNme="p-premium">$20.000</p>
              <p className="">Mensual</p>
            </div>
            <div className='table-plane-columnEstandar'>
              <p className="p-estandar">Estándar</p>
              <p className="price-estandar">$28.000</p>
              <p className='p-mensual'>Mensual</p>
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

