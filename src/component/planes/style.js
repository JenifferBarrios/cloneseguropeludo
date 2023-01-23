import styled from "styled-components";

export const Sectionplans = styled.section`
    background-color: var(--fondo);
    width: 100%;
    height: 60rem;
   

    .planes-seguro{
        position:relative;
    }
    
    
    h1{
        font-family: var( --family-title);
        font-size: 36px;
        text-align: center;
        width: 100%;

    }
    p {
        font-family: var(--sofia_pro);
        align-items:center;
        font-size: 1.5rem;;
        color: var(--grey1);
        margin: 20px 90px;
        display: flex;
        font-weight: bold;
        width: 100%;         

    }
    button {
        display:block;
        width: 665px;
        height:37px;
        background-color: var(--yellow1);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px;
        border-radius: 8px;
        border: none;
        margin-left: 50vh;
        margin-top: 2rem;
        
                
    }
    .veterinaria,.perrito ,.gatico{
        width: 180px;
        height: 221px;
        text-align: center;
        margin-left: 17px;
        
    }
   figure {
        border-radius: 15px;
        border: 3px solid var(--blue2);
        margin-left:25px;
    }
    figcaption{
        background-color: var(--blue2);
        color: white;
        width: 200px;
        height: 28px;
        text-align:center;
        border-radius: 0 0 8px 8px;
    }
.container-plans{
    position: absolute;
    top: 20%;
      
    
    }
.service{
    display: inline-flex;
    justify-content:space-between;
    margin-top: 150px;
    margin-left: 20rem;
 

}

`


