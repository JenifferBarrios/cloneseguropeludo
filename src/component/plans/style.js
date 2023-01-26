import styled from 'styled-components';
import fondoSeccion from '../../imagenes/backgroud.png'


export const Containerplanes = styled.section`
    background-image:url(${fondoSeccion});
    height: 100vh;
    width: 100%;
    background-repeat:repeat;
    background-size: 150px;
    display: flex;
    flex-direction: column;
    padding: 0 30px;


article{
    display: block;
    width: 100%;
    max-width:752px;
    margin: auto;


    h1{
        color: #fff;
        font-family: var(--title);
        font-size: 30px;
        padding: 50px 0px 0px; 
        margin-top: 50px;
        padding-top:50px;
        padding-bottom:30px;
        font-family: var(--title);
        text-align: center;
        
                
    }
    p {
        color:white;
        text-align: center;
    
        
    }
}
        
`   



