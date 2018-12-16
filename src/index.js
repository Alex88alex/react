import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import Out from './lesons.js';
//import CounterButton from './lesons2';
//import CounterButton from './Props,PropsType';
//import {Lesons,Counter,Button} from './lesons4Props';
import App1 from './lessons6';


//React.createElement('input',{className:'just-class'});     
//React.createElement('div',null,'Simple div with text');


//ReactDOM.render(<Lesons child={<Button/>}><Counter/></Lesons>, document.getElementById('root'));
ReactDOM.render(<App1/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
