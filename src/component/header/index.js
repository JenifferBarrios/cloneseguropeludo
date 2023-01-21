import React, { useState } from 'react'
import { NavContainer, Wrapper } from './style'
import BurgerMenu from './BurgerMenu'
const Header = () => {
const [clicked,setClicked] = useState (false) 
const handleClick = () => {
    setClicked(!clicked) 
}

  return (
    
    <NavContainer>
      <Wrapper>
        <div className='burger-button'>
          <BurgerMenu />
        </div>
        <img src={require('../../imagenes/Grupo-968.png')} alt="Logo" />
        <nav className={`links ${clicked ? 'active'  :  ''}`}>
          <a href='/'>¿Por qué?</a>
          <a href='/'>Nuestros Planes</a>
          <a href='/'>¿Quieres mas info?</a>
          <a href='/'>Club</a>
          <a href='/'>Blog</a>
          <a href='/'>Contáctanos</a>
        </nav>
      </Wrapper>
    </NavContainer>

  )
}

export default Header
