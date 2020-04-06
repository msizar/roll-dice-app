import React, { Component } from 'react';
import Dice from '../../component/dice';

import diceNumerics from './diceNumerics';
import './rollDice.css'


class RollDice extends Component {

    constructor(props) {
        super(props);

        this.state = {
            diceList: [2,3],
        }

    }

    onRollDice = () =>  {
        let dice = this.state.diceList;
    
        dice = this.state.diceList.map( die => {
            return Math.floor(Math.random()*6);
        })

        this.setState(() => {
            return {diceList:dice}
        });
    }

    render() {
        const { diceList } = this.state; 

        const diceSection = diceList.map( die => {
            return <Dice key={Math.random()} count={diceNumerics[die]} ></Dice>
        }) 
        
        return (
            <div>
                <div> {diceSection} </div>
                <button className='btn-roll' onClick={this.onRollDice}>Roll Dice</button>
            </div>
        )
    }

}

export default RollDice;