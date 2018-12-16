import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const Counter=({counter=0})=>{
    return <h1>{`Counter compnent. Counter value is: ${counter}`}</h1>
}
 export const Button = ()=>(
    <button>Simple button</button>
)

export class Lesons extends Component{
    static propTypes = {
        children: PropTypes.element,
    }
    static defultProps = {
        children: null, 
    }

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
        const{children,child}= this.props;
        return(
            <div>
            <div>{counter}</div>
            {child}
            {children}
            {React.cloneElement(children,{counter:this.state.counter})}
            <buttton onClick={this.handleClick}>+1</buttton>
            </div>
        );
    }
}

//export default CounterButton;