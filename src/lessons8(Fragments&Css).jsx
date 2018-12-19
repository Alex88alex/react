import React,{Fragment,Component} from 'react';
import './styles.css';

//Array
// const Columns = ()=>([  
//     <td key='1'>Hello </td>,
//     <td key='2'>world</td>
// ])

//Fragment
// const Columns = ()=>(
//     <Fragment> 
//     <td  style= {{color:'red',textTransform:'uppercase'}}>Inline </td>,
//     <td >Simple class</td>
//     </Fragment>
// );
const styles = {color:'red',textTransform:'uppercase'}
const Columns = ()=>(
    <Fragment> 
    <td  style= {styles}>Inline </td>,
    <td className="title">Simple class</td>
    </Fragment>
);
const Table = ()=>(
<table>
    <tbody>
        <tr>
           <Columns/>
        </tr>
    </tbody>
</table>
);

export default Table;