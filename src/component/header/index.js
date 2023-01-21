import React from 'react'
import {Container, Wrapper} from '../Layout/styles'
const Header = () => {
  return (
    
    <Container>
      <Wrapper>
        <img src= {require('../../imagenes/Grupo-968.png')} alt="Logo"/>
      </Wrapper>
      <h1>Header</h1>
    </Container>
  )
}

export default Header
