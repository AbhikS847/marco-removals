import React from 'react'
import {Button, Container} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { RiAccountBoxFill } from 'react-icons/ri';
import {logout, reset} from '../features/auth/authSlice';

const Dashboard = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  }

  return (
    <div style={{background:'radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)'}}>
    <Container className="moverslogin">
    <div className="" style={{padding:0, margin:16, border:"2px solid #eaeaea", backgroundColor:"#fff"}}>
    <h2 className="display-5 text-center" style={{backgroundColor:'#1da179', color:'#fff',fontFamily:'Archivo Narrow', padding:8}}>Dashboard</h2>
    <div className="text-center" style={{padding:8, margin:1}}>
    <div className="d-flex">
    <div className="d-flex" style={{alignItems:'center', position:'relative', flex:1}}>
    <RiAccountBoxFill size={40} style={{color:"#1da179"}} />
    <div className="text-muted" style={{fontFamily:'Archivo Narrow', fontSize:18}}>
      {user ? <div>
      {user.name}
      </div>:
      navigate('/login')}
    </div>
    </div>
    <div className="d-flex" style={{alignItems:'center'}}>
    <Button className="btn" style={{fontFamily:'Archivo Narrow', fontSize:18, backgroundColor:'#1da179'}} onClick={onLogout}>Log out</Button>
    </div>
    </div>
    </div>
    </div>
    </Container>
    </div>
  )
}

export default Dashboard