import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import {FaTruckLoading} from 'react-icons/fa';
import {BiPhoneCall} from 'react-icons/bi';
import {BiTime} from 'react-icons/bi';

const Header = () => {
    return <>
        <Navbar style={{padding:7}} bg="light" expand="lg">
        <Navbar.Brand href="/">Marco Removals</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/">
          <Nav.Link href=""><FaTruckLoading size={24}/> Bookings</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link href=""><BiPhoneCall size={24}/> Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/schedule">
            <Nav.Link href=""><BiTime size={24}/> Schedule</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <LinkContainer className="d-block d-sm-none" style={{padding:8, color:'#fff'}} to="/schedule">
            <Nav.Link href=""><BiTime size={24}/>  Schedule</Nav.Link>
            </LinkContainer>
    </Navbar>
    <div className="d-flex d-sm-none ">
    <LinkContainer style={{width:"50%",borderRadius:0,border:'none', backgroundColor:'#24dba4'}} to="/">
    <Button style={{width:"50%",borderRadius:0,border:'2px solid #24dba4', backgroundColor:'#24dba4'}}><FaTruckLoading size={24}/> Bookings</Button>
    </LinkContainer>
    <LinkContainer style={{width:"50%",borderRadius:0,border:'2px solid #24dba4', backgroundColor:'#24dba4'}} to="/contact">
    <Button style={{width:"50%",borderRadius:0,border:'2px solid #24dba4', backgroundColor:'#24dba4'}}><BiPhoneCall size={24}/> Contact</Button>
    </LinkContainer>
    </div>
    </>
};


export default Header;