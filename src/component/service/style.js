import styled from "styled-components";
import fondo from "../../imagenes/fondo-transp.png";

export const Sectionplans = styled.section`
    background-color: var(--fondo);
    width: 100%;
    height: 40rem;
    display: block;
   
    .planes-seguro{
        margin-top:100px;
    }
        
    h1{
        font-family: var( --family-title);
        font-size: 36px;
        text-align: center;
        width: 100%;

    }
    p {
        font-family: var(--sofia_pro);
        text-align:center;
        font-size: 1.5rem;;
        color: var(--grey1);
        font-weight: bold;
        width: 100%;      
        margin-top: 20px;   
    }
    
    .container-plans{
    width:42%;
    margin: auto;
    margin-top:50px;

 }
 .service{
    display: flex;
    justify-content:space-around;
    margin: auto;
    background-color: white;
    width: 100%;
    top:40vh;
 }
    .veterinaria,.perrito ,.gatico{
        width: 180px;
        height: 220px;
        text-align: center; 
        border-radius: 15px 15px 0 0;
    
    }
   figure {
        border-radius: 15px;
        border: 3px solid var(--blue2);
        margin: 8px;
        text-align: center;
        width:13vw;
    }
    figcaption{
        background-color: var(--blue2);
        color: white;
        width: 190px;
        height: 28px;
        text-align:center;
        border-radius: 0 0 8px 8px;
    }
 button {
        display:block;
        width:41.5vw;
        height:37px;
        background-color: var(--yellow1);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px;
        border-radius: 8px;
        border: none;        
        margin-top: 2rem;
                    
    }
.background-img {
    background: linear-gradient( 0deg, #fff 55%, #efefef 55%, #efefef 85%, #ffff 85% );
    position: relative;

}
section.background-img::before{
    background-image: url(${fondo});
    background-size: 150px;
    z-index: 1;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    position: absolute;
    opacity: 1;
}
section.mobil-view {
     display: none; 
}
@media (max-width:768px) {
    section.pc-view{
        display: none;
    }
    section.mobil-view{
        display: flex;
        flex-direction: column;
    }
}


`


