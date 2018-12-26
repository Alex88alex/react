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
//import News from './ls16(worcks with API)';
//import News from './ls16(worcks with API Part2)';
//import News from './ls16(worcks with API Part2)';
import Router from './18Router';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Contacts from './components/contact';
import Posts from './components/post';


//React.createElement('input',{className:'just-class'});     
//React.createElement('div',null,'Simple div with text');


//ReactDOM.render(<Lsons child={<Button/>}><Counter/></Lesons>, document.getElementById('root'));
ReactDOM.render((
    <BrowserRouter>
    <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contacts}/>
            <Route path='/post' component={Posts}/>
        </Switch>
    </Router>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
