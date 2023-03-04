import React , {useState} from 'react';
import {toast} from 'react-toastify';
import { Container, Form, Button} from 'react-bootstrap';
import {BsPersonCircle} from 'react-icons/bs';

const Signup = () => {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password1:'',
    password2:''
  });

  const {name, email, password1, password2} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if(password1 !== password2){
      toast.error('Passwords do not match');
    }
    else{
      console.log(formData);
    }
  }

    return(
        <div style={{background:'radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)'}}>
        <Container className="moverslogin">
        <div className="" style={{padding:0, margin:16, border:"2px solid #eaeaea", backgroundColor:"#fff"}}>
        <h2 className="display-5 text-center" style={{backgroundColor:'#1da179', color:'#fff',fontFamily:'Archivo Narrow', padding:8}}>Sign Up</h2>
        <div className="text-center" style={{padding:16, margin:8}}>
            <div><BsPersonCircle size={60} style={{color:"#1da179"}} /></div>
            <Form style={{textAlign:'left'}} onSubmit={onSubmit}>
      <Form.Group className="mb-2 pt-3" controlId="formBasicName">
        <Form.Label style={{fontFamily:'Archivo Narrow', fontSize:20, color:'#1da179'}}>Username</Form.Label>
        <Form.Control style={{height:45}} type="text" placeholder="Enter username" required value={name} name='name' onChange={onChange}/>
      </Form.Group>
      <Form.Group className="mb-2 pt-3" controlId="formBasicEmail">
        <Form.Label style={{fontFamily:'Archivo Narrow', fontSize:20, color:'#1da179'}}>Email</Form.Label>
        <Form.Control style={{height:45}} type="email" placeholder="Enter email" required value={email} name='email' onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label style={{fontFamily:'Archivo Narrow', fontSize:20, color:'#1da179'}}>Password</Form.Label>
        <Form.Control style={{height:45}} type="password" placeholder="Password" required value={password1} name='password1' onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label style={{fontFamily:'Archivo Narrow', fontSize:20, color:'#1da179'}}>Confirm password</Form.Label>
        <Form.Control style={{height:45}} type="password" placeholder="Password" required value={password2} name='password2' onChange={onChange} />
      </Form.Group>
      <Button style={{fontFamily:"Archivo Narrow", fontSize:20}} className='d-sm-none w-100' variant="primary" type="submit">
        Sign up
      </Button>
      <div className="d-flex justify-content-center">
      <Button style={{width:"30%", fontFamily:"Archivo Narrow", fontSize:20}} className='d-none d-sm-block' variant="primary" type="submit">
        Sign up
      </Button>
      </div>
      <div className="py-2 text-center"><small>Already have an account? <a href="/login">Log In</a></small></div>
    </Form>
        </div>
        </div>
        </Container>
        </div>
    )
}

export default Signup;