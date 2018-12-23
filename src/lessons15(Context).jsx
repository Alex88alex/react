import React, { Component,Fragment } from 'react';

// const LevelThree = ({title}) => <h1>{title}</h1>
// const LevelTwo = ({title}) => <LevelThree title={title}/>
// const LevelOne = ({title})=> <LevelTwo title={title}/>

// class Lesons extends Component{
//     render(){
//         return(
//             <LevelOne title ="simple title" />
//         );
        
//     }
// }
// export default Lesons;

const TitleContext = React.createContext();

const LevelThree = () => (
<TitleContext.Consumer>
    {({title,subTitle,click})=>(
        <Fragment>
            <h1 onClick={click}>{title}</h1>
            <h2>{subTitle}</h2>
        </Fragment>
        )
    }
    </TitleContext.Consumer>    
)
const LevelTwo = () => <LevelThree />
const LevelOne = ()=> <LevelTwo />

class Lesons extends Component{
    render(){
        return(
            <TitleContext.Provider value={{title:"Simple title",subTitle:"Sub title", click:()=>{console.log('Hello')}}}>
            <LevelOne  />
            </TitleContext.Provider>
            
        );
        
    }
}
export default Lesons;