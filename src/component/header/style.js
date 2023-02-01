import styled from "styled-components";

export const NavContainer = styled.header`
    background-color: var(--fondo);
    height:56px;
    padding: .4rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:fixed;
    width:100%;

    img {
        height:23px;
        width:110px;
        justify-content: flex-start;
        margin-left:16px;

    }

    a {
        color:var(--blue1);
        text-decoration:none;
        font-family:var(--family-titlle);
        font-weight:bold;
        margin-right:3rem;

    }
    .links{
    position: absolute;
    top: -700px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
        a{
            color:var(--blue1);
            font-size: 2rem;
            display: block;
        }
      
      a#contactenos {
      margin: 0 15px 0 8px;
      padding: 4px 15px 4px;
      border: 2px solid #0077b9;
      border-radius: 30px;
      opacity: 1;
      font-size: 17px;
      font-weight: bold;
      text-align: center;
      color: #058bcc;
      background-color: white;
      width:130px;   
      /* text-align:color-interpolation-filters; */
      a {
          margin: auto;
          display:block;
      }        
    }
      
    @media(min-width:950px){
      
        position: initial;
        margin: 0;
         a{
            color: var(--blue1);
            font-size: 1rem; 
            display: inline;
        }
        a#contactenos{
          border: none;
        }
            
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute; 
    margin-left: auto;
    margin-right: auto;
    top: 90%;
    left: 0;
    right: 0;
    text-align: left;
    
       
    a {
        color: var(--blue1);
        font-size:15px;
        border-bottom: 1px solid #eaeaea;
        border-color: var(--grey1);
        width:300px;
        background-color:var(--fondo)
    }
    a.nav-items.dropdown{
      padding:10px 20px;
    }
  }
    
  .burger-button{
    @media(min-width:950px) {
      display: none;      
    }     
}
`
export const Burguer = styled.div`
.nav-icon-8{
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .nav-icon-8 span{
    background-color:var(--blue1);
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    width:100%;
    height: 4px;
  }
  .nav-icon-8 span:nth-child(1){
    top:0px;
    left: 0px;
  }
  .nav-icon-8 span:nth-child(2){
    top:13px;
    left: 0px;
  }
  .nav-icon-8 span:nth-child(3){
    bottom:0px;
    left: 0px;
  }
  .nav-icon-8:not(.open):hover span:nth-child(1){
    transform: scaleX(.8);
  }
  .nav-icon-8:not(.open):hover span:nth-child(2){
    transform: scaleX(.5);
  }
  .nav-icon-8:not(.open):hover span:nth-child(3){
    transform: scaleX(.8);
  }
  .nav-icon-8.open span:nth-child(1){
    top: 13px;
  }
  .nav-icon-8.open span:nth-child(2){
    top:13px;
  }
  .nav-icon-8.open span:nth-child(3){
    top: 13px;
  }
    
`
export const BgDiv = styled.div`
  position:absolute;
  width: 80%;
  height: 287px;
  z-index:-1;
  top:-700px;
  left:-1000;

`