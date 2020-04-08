import React, { Component } from 'react';
import Dice from '../../component/dice';

import diceNumerics from './diceNumerics';
import './rollDice.css'


class RollDice extends Component {

    interval = 0;

    constructor(props) {
        super(props);

        this.state = {
            diceList: [2,3],
            buttonPressTimer: 0,
            rolling: false,
        }
        this.onRollDice = this.onRollDice.bind(this);
    }

    onRollDice () {
        let dice = this.state.diceList;

        this.setState({rolling: true})

        setTimeout(() => {
            dice = this.state.diceList.map( die => {
                return Math.floor(Math.random()*6);
            })
            this.setState({rolling: false})
            this.setState({diceList:dice, wobble:'wobble'});
        }, 1500);

    }

    render() {
        const { diceList, rolling } = this.state; 

        const diceSection = diceList.map( die => {
            return <Dice key={Math.random()} count={diceNumerics[die]} rolling={rolling} ></Dice>
        });

        return (
            <div>
                <div> {diceSection} </div>

                <button 
                    className='btn-roll' 
                    disabled={rolling? true : false }
                    onClick={this.onRollDice}
                >
                    {rolling ? 'rolling...' : 'Roll Dice'}
                </button>
            </div>
        )
    }

}

export default RollDice;