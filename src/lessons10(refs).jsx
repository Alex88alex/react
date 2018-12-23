import React, { Component,Fragment } from 'react';

const POSITIONS = [
   { id:'fd',
    value: 'Front-end Developer',
    title:'Front-end Developer',
   },
   { id:'bd',
    value: 'Back-end Developer',
    title:'Back-end Developer',
   }

]

class Forms1 extends Component{
    state={
        inputText:'',
        textareaText:'',
        selectText:'',
        showData:{
            name:'',
            text:'',
            position:'',        }
    }
    handleInputChange = ({target:{value}})=>{
        console.log(this.el.value);
        this.setState({
            inputText:value,
        })
    }
    handleTexareaChange = ({target:{value}})=>{
        this.setState({
            textareaText:value,
        })
    }
    handleSelectChange = ({target:{value}})=>{
        this.setState({
            selectText:value,
        })
    }
    
    handleShow= (e) =>{
        e.preventDefault();
        const{inputText,textareaText,selectText}= this.state;
        this.setState({
            inputText:'',
            textareaText:'',
            selectText:'',
            showData:{
                name:inputText,
                text:textareaText,
                position: selectText,
            }
        })
    }

    getRef = (node) => {this.el = node};
    render(){
        const {inputText,textareaText,selectText, showData}=this.state;
        const{name,text,position}=showData;
        return(
            <Fragment>
                <form>
                {/* input*/}
                <label>
                    Name:
                    <input ref={this.getRef} type="text" name="name" value={inputText} onChange= {this.handleInputChange} />
                </label>
                {/* Textarea*/}<br/>
                <label htmlFor="Text">Text:</label>
                <textarea id="text" value={textareaText} onChange= {this.handleTexareaChange}></textarea>
                {/*Select*/}
                <select value={selectText} onChange={this.handleSelectChange}>
                    {POSITIONS.map(({id,value,title})=>(
                        <option key={id} value={value}>{title}</option>
                    ))}
                </select>
                {/* button*/}<br/>
                <button onClick={this.handleShow}>Show</button>
            </form>
            <h2>{name}</h2>
            <h3>{text}</h3>
            <h3>{position}</h3>
            
            </Fragment>
        );
    }
}

export default Forms1;