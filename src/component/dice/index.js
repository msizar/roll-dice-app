import React from 'react';

import'./dice.css'

const Dice = ({count}) => {
    return <i className={`fas fa-dice-${count}`}></i>
}

export default Dice 
