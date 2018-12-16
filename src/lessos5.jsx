// События
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MyLink = ({text,onClick})=>(
<a href="/text" onClick={onClick}>{text}</a>
);

MyLink.propTypes={

    onClick:PropTypes.func,
    text:PropTypes.string,
}

MyLink.defaultProps={
   text: "link",
   onClick:()=>{},
}

class App extends Component{
    handleClick=(e)=>{
        e.preventDefault();
        console.log('Clicked on Link1!');
        //this.test();
    }

    render(){
        return(
            <MyLink onClick={this.handleClick}/>
        )
    }
}

export default App;