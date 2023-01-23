import React from 'react';
import  Header from "../header/index";
import Information  from "../infomation/index";
import Footer from '../footer/index'
import {Container,Wrapper}  from './styles';
import Planes from '../planes'

export const Layout = () => {
    return (
        <Container>
            <Wrapper>
                <Header/>
                <Information/>
                <Planes/>
                <Footer/>
            </Wrapper>
        </Container>
    )
}

