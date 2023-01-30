import React, { useState } from 'react'
import { NavContainer, BgDiv} from './style'
import BurgerMenu from './BurgerMenu'


const Header = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }

  return (

    <NavContainer>
      <div className='burger-button'>
        <BurgerMenu clicked={clicked} handleClick={handleClick} />
      </div>
      <img src={require('../../imagenes/Grupo-968.png')} alt="Logo" />
      <div className={`links ${clicked ? 'active' : ''}`}>
        <a href='/' className='nav-items dropdown'>¿Por qué?</a>
        <a href='/' className='nav-items dropdown'>Nuestros Planes</a>
        <a href='/' className='nav-items dropdown'>¿Quieres mas info?</a>
        <a href='/' className='nav-items dropdown'>Club</a>
        <a href='/' className='nav-items dropdown'>Blog</a>
        <button id='contactenos'><a href='/' className='nav-items dropdown' >Contáctanos</a></button>
      </div>
      <BgDiv className={`initial ${clicked ? ' active ' : ''}`}></BgDiv><BgDiv />
    </NavContainer>

  )
}

export default Header
