import React from 'react';

import'./dice.css'
import diceNumerics from '../../Layout/RollDice/diceNumerics';

var repeat;

function roll(rolling){     
    clearInterval(repeat);

    if (rolling) {
        repeat = setInterval(renderRollingDie, 100);     
    }
}

function renderRollingDie() {
    const value = diceNumerics[Math.floor(Math.random()*6)]
    const elem = document.querySelectorAll('#number');
    
    elem.forEach( item => {
        item.className = `fas fa-dice-${value}`;
    })
}

const Dice = ({count, rolling}) => {
    const dieFace =`fa-dice-${count}`
    roll(rolling);

    return  <i id={`number`} className={`fas ${dieFace}`} />        
}

export default Dice 
