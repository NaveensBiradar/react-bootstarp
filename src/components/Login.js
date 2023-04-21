import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const loginurl = 'http://localhost:9001/login'
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state= {
            email:'', 
            password:'',
            login:false,
            storeToken:null
        }
    }

    handleLoginEmail = (e) =>{
        this.setState({
            email:e.target.value
        })
        
    }

    handleLoginPassword = (e) =>{
        this.setState({
            password:e.target.value
        })
        
    }
    
    resetInputs = () =>{
        this.setState ({
            email:'',
            password:''
        }) 
    }
    
    handleLoginSubmit = (e)=>{
        if(this.state.email != '' && this.state.password != ''){
            console.log(this.state)
            // axois call here
            axios.post(loginurl,this.state)
                .then(res => {
                        console.log("------------>",res.data)
                        console.log('====>',res.data.token)
                        if (res.data.status == 200){
                            console.log("STORE THE TOKEN IN LOCAL")
                            const loginDetails = {
                                login:true,
                                storeToken:res.data.token,
                                userId:res.data.data[0].id
                            }
                            // localStorage.setItem('login', res.data.token)
                            localStorage.setItem('login', JSON.stringify(loginDetails))
                            this.checkToken(e)
                            //Reset inputs
                            this.resetInputs();
                            const isLogin = JSON.parse(localStorage.getItem('login'));
                            if(isLogin.login == true ){
                                console.log("Login Success")
                                console.log("Welcome back",res.data.data[0].f_name)
                            }else{
                                console.log("Error console")
                            }
                    
                        }else{
                            console.log("Collect the error message from the API and desplay to user UI")
                            localStorage.setItem('login', JSON.stringify(this.state = ''))
                        }
                })
                .catch((error)=>{
                    console.log("Error=>",error)
                })
        }else{
            console.log("Error Message Red alert!!!")
        }
        e.preventDefault();
    }

    checkToken = (e) =>{
        // alert(localStorage.getItem('login'));
    }
  render() {
    return (
        <Card  style={{padding:'20px',backgroundColor:'#f2f2f2'}}>
            <Card style={{padding:'20px',textAlign:'center'}}>
                <h3>Login</h3>
            </Card>
                <Form onSubmit={this.handleLoginSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleLoginEmail} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
        
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleLoginPassword} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Row className="justify-content-md-center" style={{paddingTop:'20px',textAlign:'center'}}>
                        <Col xs lg="2">
                            <Button variant="primary" type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
        </Card> 
    )
  }
}
