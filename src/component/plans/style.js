import styled from 'styled-components';
import fondoSeccion from '../../imagenes/backgroud.png'

export const Containerplanes = styled.section`
    background-image:url(${fondoSeccion});
    height: 100vh;
    width: 100%;
    background-repeat:repeat;
    background-size: 150px;
    
    .container {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    }
    
    article{
    display: block;
    width: 100%;
    max-width: 752px;
    margin: auto;
    
    h1{
        color: var(--fondo);
        font-family: var(--title);
        font-size: 30px;
        padding: 50px 0px 0px; 
        margin-top: 50px;
        padding-top:50px;
        padding-bottom:30px;
        font-family: var(--title);
        text-align: center;
                
    }
    p.parf-planes {
        color:white;
        text-align: center;
        margin-bottom:60px;
            
    }
    .container-table{
    margin-bottom: 20px;
    display:grid;
    grid-template-columns: repeat(3,1fr) ;
       
}
.table-plane-columnBasico {
    border-radius: 8px 0px 0px 8px;
    background-color: #efefef;
    text-align: center;
    overflow: hidden;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;

 p.p-basic{
    color: var( --fondo);
    font-size: 24px;
    text-align: center;
    font-weight: 400;
    background-color:var(--blue3);
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    line-height:30px;
}
     p.price-basic{
        color:var(--blue3);
        padding-top: 30px;
        font-family: var(--family-numbers);
        padding-top: 30px;
        font-size: 24px;
        }
     .p-mensual-basico{
        color: var(--blue3);
        line-height: 30px;
        padding-bottom: 0.5rem;
        font-size: 24px;
        font-family:var(--family-titlle);
        padding-top: 1rem;
    }

}
.table-plane-columnEstandar{
    background-color:var(--text-mensual);
    border-radius: 8px;
    overflow: hidden;

}
.column-yellow{
    height : 24px;
    padding: 0px 3px;
    background-color: var(--yellow4);
    display: flex;
    align-items: center;
    p {
        text-align:center;
        width: 100%;
        padding-bottom: 5px;
        color:var(--text-popular);
        line-height: 30px;
        
    }
}
p.p-estandar{
    line-height: 30px;
    font-size: 24px;
    background-color: var(--yellow3);
    color: var(--fondo);
    text-align: center;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    font-family: var(--family-titlle);

}
p.price-estandar{
    color: var(--text-popular);
    padding-top: 30px;
    font-family: var(--family-numbers);
    text-align:center;
    line-height: 30px;
    font-size:24px;
    padding-bottom: 0.5rem;
}
.p-mensual-estadar{
    line-height: 30px;
    color: var(--yellow4);
    width: 100%;
    padding-bottom: 30px;
    font-size: 24px;
    text-align: center;
    font-family: var(--family-titlle);

}

.table-plane-columnPremium{
    border-radius: 0 8px 8px 0 ;
    background-color:var(--fondo);
    text-align: center;
    overflow:hidden;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;

    .p-premium{
        color:var(--fondo);
        font-size: 24px;
        text-align: center;
        font-weight: 400;
        background-color: var(--blue3);
        padding-bottom: 0.4rem;
        padding-top: 0.5rem
    }
    .price-premium{
    color: var(--blue3);
    padding-top: 30px;
    font-family: var(--family-numbers);
    text-align:center;
    line-height: 30px;
    font-size: 24px;

    }
    p.p-mensual-premium{
        color: var(--blue3);
        line-height: 30px;
        padding-bottom: 0.5rem;
        padding-top:0.5rem;
        font-size: 24px;
        font-family:var(--family-titlle);

    }
}

}    
`



