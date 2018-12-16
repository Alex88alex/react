import React, { Component } from 'react';



function Welcome(){
    return<h1>Welcome</h1>
};

class Lesons extends Component{
    render(){
        return<h1>Hello world</h1>
    }
};
function Out(){
    return(<div>
        <Welcome/>
        <Lesons/>
    </div>)
};


//локальный стэйт State

class CounterButton extends Component{
    state = {
        counter:0,
    }
    handleClick = ()=>{

    }
    render(){
        const{counter}= this.state;
        return(
            <div>{counter}</div>
        );
    }
}

export default Out;