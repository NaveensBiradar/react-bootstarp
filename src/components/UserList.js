import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class UserList extends Component {

  constructor(props){
    super(props)
    this.state = {
      title:"",
      body:""
    }
  }

 
  get_list = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => response.json())
    this.setState = response.json()
    .then(data => console.log(data));
  }



  

 
  render() {
    return (
        <Card  style={{padding:'20px',backgroundColor:'#f2f2f2'}}>
            <Button variant="primary" type="submit" onClick={this.get_list} >Submit</Button>
            <div className='my_div' style={{padding:'20px',border:'2px solid black'}}>
           

            </div>
        </Card>
    )
  }
}
