import React from "react";


export default class Todoform extends React.Component{
    state = {
        text:""
    };
    handleChange= event =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = (event) =>{
        event.preventDefault();
        //for submit 
        this.props.onSubmit({
            text: this.state.text,
            complete: false
        })
    };
  
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
        <input 
        name="text"
        value={this.state.text}
         onChange={this.handleChange}
         placeholder="todo..."
         />
         <button type="submit">submit</button>
         </form>
        );
    };
}