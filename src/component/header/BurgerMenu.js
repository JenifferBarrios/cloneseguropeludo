import React from 'react'
import { Burguer } from './style'

const BurgerMenu = (props) => {
    return (
        <Burguer>
            <div onClick ={props.handleClick}
             className={`icon nav-icon-8 ${props.clicked ? 'open' :''}`}
             >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Burguer>
    )
}

export default BurgerMenu
