import styled from "styled-components";
import catDog from "../../imagenes/seguro-mascotas.jpg";

export const InformationPeludito = styled.main`
    background-image: linear-gradient( to top, #005684e0 0%, #006da88c 40%, #0083ca21 60%, #008ad400 100% ),
    url(${catDog});
    height:60rem;;
    background-size:cover;
    background-position:center;
    width: 100%;
   
    
    div.information-container{
        width: 100%;
        display: inline-flex;
        margin: auto;
      
    }
    
    section.section-two {
       display: block;
       justify-content: center;
       margin: auto;
       padding-top: 30vh;
                
    p{
        font-size: 13px;
        color: white;
        align-items:center;
        margin-left:7rem;
        margin-top: 0.5px;
              
    }
    }
    .logoCatDot{
       
        width: 300px;
        height: 132px;
        z-index:1;
       
    }
    .nombrePeludito {
        display: block;
        width: 368px;
        height: 56px;
        padding-left: 20px;
        margin-bottom:16px;
        border: 2.5px solid;
        background-color:transparent;
        border-color: white;
        border-radius: 6px;
        margin-top: 20px;
        ::placeholder {
        color: white;
        font-size:18px;
    }
        
    }
    button{
        width: 368px;
        height: 45px;
        background-color: var(--yellow1);
        border-radius: 4px ;
        box-shadow: 0  0 10px 0;
        border: none;
        ::placeholder{
            font-size:20px;
        }
    
    }
    

`
