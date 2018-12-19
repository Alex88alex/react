import React, { Component,Fragment } from 'react';



class Forms extends Component{
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
    

    render(){
        const {inputText,textareaText,selectText, showData}=this.state;
        const{name,text,position}=showData;
        return(
            <Fragment>
                <form>
                {/* input*/}
                <label>
                    Name:
                    <input type="text" name="name" value={inputText} onChange= {this.handleInputChange} />
                </label>
                {/* Textarea*/}<br/>
                <label htmlFor="Text">Text:</label>
                <textarea id="text" value={textareaText} onChange= {this.handleTexareaChange}></textarea>
                <select value={selectText} onChange={this.handleSelectChange}>
                    <option value="Front-end developer">   Front-end developer</option>
                    <option value="Back-end developer">   Back-end developer</option>
                </select>
                {/* button*/}<br/>
                <button onClick={this.handleShow}>Show</button>
            </form>
            <h2>{name}</h2>
            <h3>{text}</h3>
            
            </Fragment>
        );
    }
}

export default Forms;