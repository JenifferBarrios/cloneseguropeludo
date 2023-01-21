import React from 'react';
import  Header from "../header/index";
import Information  from "../infomation/index";
import Footer from '../footer/index'
import {Container,Wrapper}  from './styles';

export const Layout = () => {
    return (
        <Container>
            <Wrapper>
                <Header/>
                <Information/>
                <Footer/>
            </Wrapper>
        </Container>
    )
}

