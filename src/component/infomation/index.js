import React from 'react'
import {InformationPeludito} from "./style";
import logoCatDog from "../../imagenes/logo-cat-dog.svg"


 const Information = () => {
  return (
    <InformationPeludito>
      <div className="information-container">
        <section className='section-two'>
          <div>
            <img className='logoCatDot' src={logoCatDog} alt="logo" />
            <p>¡Protege a los que más amas!</p>
          </div>
          <input className='nombrePeludito' placeholder='Nombre de tu Peludito' />
          <button className='btn-conocemas'>CONOCE MÁS</button>
        </section>
      </div>
    </InformationPeludito>
  )
}

export default Information