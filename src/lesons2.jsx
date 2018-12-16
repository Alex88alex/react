//локальный стэйт State
import React, { Component } from 'react';


class CounterButton extends Component{
    state = {
        counter:0,
    }
    handleClick = ()=>{
        //this.setState(prevState=>({
          //  counter:++prevState.counter,
        //}))
        this.setState(({counter})=>({
            counter:++counter,
        }))
    }
    render(){
        const{counter}= this.state;
        return(
            <div>
            <div>{counter}</div>
            <buttton onClick={this.handleClick}>+1</buttton>
            </div>
        );
    }
}

export default CounterButton;