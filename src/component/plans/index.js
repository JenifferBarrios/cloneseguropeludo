import React from 'react';
import { Containerplanes } from './style';



const Planes = () => {
  return (
    <Containerplanes>      
        <h1>Nuestros Planes</h1> 
            <div className='nuestros-planes'>
            <p>Planeados pensando en
                 la tranquilidad de tu peludito</p>
            </div>            
            <div>
                <table>
                    <tr>
                    <td></td>
                    <td></td><td></td>
                    </tr>
                </table>
            </div>
            <h1>Beneficios de Seguro Peludo</h1>
            <p>Diseñamos nuestros planes para que sean simples y sencillos, de modo que puedas pasar menos
                 tiempo eligiendo y más tiempo con tu peludito.</p>
    </Containerplanes>
  )
}

export default Planes

