import React, { Component } from 'react'
import "./App.css"
import axios from "axios"
class Empform extends Component {

   constructor(props){
    super(props)
    this.state={
        name:"",
        job:""
    }
   }
   handlename=(e)=>{
    this.setState({name:e.target.value})
   }
   handlejob=(e)=>{
    this.setState({job:e.target.value})
   }
    add=()=>{
      const users={
        name:this.state.name,
        job:this.state.job
      };
     axios.post("https://reqres.in/api/users",users)
     .then((response)=>{
      if(response.status==201){
        alert("employee added  successfully!")
      }
     }).catch((error)=>{
       alert("error"+error.message)
     })
   }

   
  render() {
    return (
      <div className='wrap'>

        <h1>Employee Form</h1>

        <div className='data'>

            <input type='text'placeholder='enter  name' value={this.state.name} onChange={this.handlename}/>

            {/* <input type='text' placeholder='enter email'/> */}

            <input type='text' placeholder='enter job' value={this.state.job} onChange={this.handlejob}/>

            <button type="submit" className='btn' onClick={this.add}>Submit</button>

        </div>

      </div>
    )
  }
}
export default Empform;