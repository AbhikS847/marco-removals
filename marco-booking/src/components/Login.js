import React, {useState} from 'react';
import { Container, Form, Button} from 'react-bootstrap';
import {BsPersonCircle} from 'react-icons/bs';

const Login = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:''
  });

  const {email, password} = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]:e.target.value
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

    return(
        <div style={{background:'radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)'}}>
        <Container className="moverslogin">
        <div className="" style={{padding:0, margin:16, border:"2px solid #eaeaea", backgroundColor:"#fff"}}>
        <h2 className="display-5 text-center" style={{backgroundColor:'#1da179', color:'#fff',fontFamily:'Archivo Narrow', padding:8}}>Log In</h2>
        <div className="text-center" style={{padding:16, margin:8}}>
            <div><BsPersonCircle size={60} style={{color:"#1da179"}} /></div>
            <Form style={{textAlign:'center'}} onSubmit={onSubmit}>
      <Form.Group className="mb-2 pt-3" controlId="formBasicEmail">
        <Form.Label style={{fontFamily:'Archivo Narrow', fontSize:20, color:'#1da179'}}>Email</Form.Label>
        <Form.Control style={{height:45}} type="email" placeholder="Enter email" required name="email" value={email} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label style={{fontFamily:'Archivo Narrow', fontSize:20, color:'#1da179'}}>Password</Form.Label>
        <Form.Control style={{height:45}} type="password" placeholder="Password" required name="password" value={password} onChange={handleChange} />
        <div className="py-2"><small><a href="/signup">Forgot password?</a></small></div>
      </Form.Group>
      <Button style={{fontFamily:"Archivo Narrow", fontSize:20}} className='d-sm-none w-100' variant="primary" type="submit">
        Log in
      </Button>
      <div className="d-flex justify-content-center">
      <Button style={{width:"30%", fontFamily:"Archivo Narrow", fontSize:20}} className='d-none d-sm-block' variant="primary" type="submit">
        Log in
      </Button>
      </div>
      <div className="py-2"><small>Don't have an account? <a href="/signup">Sign up</a></small></div>
    </Form>
        </div>
        </div>
        </Container>
        </div>
    )
}

export default Login;