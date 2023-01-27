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
    .container-table{
    height: 150px;
    background-color: white;
    margin: 50px auto;
    display:grid;
    grid-template-columns: repeat(3,1fr) ;
    grid-auto-rows:50px;
    grid-column-start: 1;
    grid-column-end:4;
    border-radius:8px;
    
}
.table-header, .table-item{
    display: flex;
    justify-content:center;
    align-items: center;
    line-height: 30px;
}
.table-header{
    font-weight: bold;
    font-size: 1.5em;
    background-color: var(--blue3);
    color: var(--fondo);

}
.table-item {
    font-size: 24px;
    padding: 10px;
    color: var(--blue3);
    background-color: #efefef;
}
#basico {
    border-radius: 8px 0 0;
}
#premium {
    border-radius: 0  8px 0 0;
}
}
        
`   



