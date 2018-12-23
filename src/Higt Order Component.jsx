import React, { Component } from 'react';

import {BrowserRouter as Router,Link} from 'react-router-dom';

// const AppLink = ({props}) =>({
//     render:()=>(
//        <Link {...props} activeClassName='active'/>
//     )
// });

// class Lesons extends Component{
//     render(){
//         return(
//             <Router>
//                 <nav>
//                     <AppLink to="/" >Home</AppLink>
//                     <AppLink to="/portfolio" >Portfolio</AppLink>
//                     <AppLink to="/contacts" >Contacts</AppLink>
//                 </nav>
//             </Router>
//         );
//     }
// }

// export default Lesons;

const isEmpty = (prop) => (
    prop===null||
    prop===undefined||
    (prop.hasOwnProperty('length')&& prop.length === 0)||
    (prop.constructor=== Object && Object.keys (prop).length === 0)
);

const LoadingHOC = (loadingProp) => (WrappedComponent) =>{
    return class LoadingHOC extends Component{
        render(){
            return isEmpty(this.props[loadingProp]) ?
            <div className="loader" />
            :<  WrappedComponent{...this.prop} />;
        }
    }
}
class AppComponentUI extends Component{
    render(){
        return(
            <div>{this.props.data.title}</div>
        );
    }
}
const AppComponent = LoadingHOC('data')(AppComponentUI);

class Lessons extends Component{
    state = {
        data: {},
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response=>response.json())
        .then(data=>this.updateState(data))
    }
    updateState = (data) =>{
        window.setTimeout(()=>{
            this.setState({data})
        },3000);
    }

    render(){
        return(
           <AppComponent data={this.state.data}/>
        );
    }
}


export default Lessons;