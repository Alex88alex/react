import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import Out from './lesons.js';
//import CounterButton from './lesons2';
//import CounterButton from './Props,PropsType';
//import {Lesons,Counter,Button} from './lesons4Props';
//import App2 from './lessons7(Lists&keys)';
//import Tabs from './lessons8(Fragments&Css)';
//import Forms from './lessons9(Forms)';
//import Forms1 from './lessons10(refs)';
//import LoadingHOC from './Higt Order Component';
//import Lesons from './lessons15(Context)';
import News from './ls16(worcks with API)';


//React.createElement('input',{className:'just-class'});     
//React.createElement('div',null,'Simple div with text');


//ReactDOM.render(<Lsons child={<Button/>}><Counter/></Lesons>, document.getElementById('root'));
ReactDOM.render(<News/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
