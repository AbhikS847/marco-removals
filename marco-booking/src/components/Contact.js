import React, {useState} from 'react';
import truck from '../../src/truck.jpg';
import {Form, Button, Container, Row, Col, Modal} from 'react-bootstrap';
import {TfiEmail} from 'react-icons/tfi';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {TiTick} from 'react-icons/ti';
import {FaStar} from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {

  const QuoteModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{backgroundColor:'#24dba4', color:"#fff"}} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <strong style={{fontFamily:'Archivo Narrow'}}>Quote</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center" style={{fontFamily:'Archivo Narrow'}} ><TiTick size={40} style={{color:'green'}}></TiTick>Enquiry recieved</h4>
          <p style={{backgroundColor:'#1da179', padding:16, color:"#fff", fontSize:20}}>
          Thank you for sending through your enquiries. We will shortly be sending you a quote through your provided email or number.
          </p>
          <hr></hr>
          <p>Feel free to make a <a className="contactbox-links" href="/">Booking</a> or contact us via <a className="contactbox-links" href="mailto: enquiries@marcoremovals.com.au">enquiries@marcoremovals.com.au</a> | <a className="contactbox-links" href="tel:0406178359">(+61) 0406 178 359</a>  </p>
        </Modal.Body>
      </Modal>
    );
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(name, email, number, desc);
    try{
      const response = await axios.post(`${process.env.REACT_APP_API_SERVER}/quote/create`, {
        _id:Math.floor(Math.random() * 99999999),
        name,
        email,
        number,
        desc
      });

      setQuoteModalShow(true);
  
      setName('');
      setEmail('');
      setNumber('');
      setDesc('');  
    }
    catch(err){
      console.log(err);
    }
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number ,setNumber]  = useState('');
  const [desc, setDesc] = useState('');
  const [quoteModalShow, setQuoteModalShow] = useState(false);

    return <>
    <QuoteModal show={quoteModalShow} onHide={()=>{setQuoteModalShow(false)}} />
    <div className="moversjumbo" style={{backgroundImage:`url(${truck})`}}>
    <div className="contactjumbo1 d-none d-sm-flex ">
    <div>
    <div className ="d-none d-sm-block quotebox">
    <h2  style={{fontFamily:'Archivo Narrow'}}>Get a quote</h2>
      <Container>
      <Form onSubmit={(event) => {handleSubmit(event)}}>
        <Row>
        <Col xs={12} sm={12}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control style={{border:'2px solid #1da179', height:50}} type="text" placeholder="Enter name" value={name} onChange={(event)=>{setName(event.target.value)}} required/>
      </Form.Group>
        </Col>
        </Row>
      <Row>
      <Col xs={12} sm={6}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control style={{border:'2px solid #1da179', height:50}} type="email" value={email} onChange={(event) => {setEmail(event.target.value)}} placeholder="Enter email" required/>
      </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Number</Form.Label>
        <Form.Control style={{border:'2px solid #1da179', height:50}} type="number" value={number} onChange={(event) => {setNumber(event.target.value)}} placeholder="Enter phone number" required/>
      </Form.Group>
          </Col>
      </Row>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="textarea">
      <Form.Label>Description</Form.Label>
      <Form.Control className="form-control" style={{height:100, border:'2px solid #1da179'}} value={desc} onChange={(event)=>{setDesc(event.target.value)}} as="textarea" aria-label="With textarea" />
      </Form.Group>
        </Col>
      </Row>
      <Row>
      <Col className="d-flex justify-content-center" xs={12} s={6}>
        <Button style={{width:"100%", backgroundColor:'#1da179'}} className='d-none d-sm-block' variant="primary" type="submit">
        Submit
      </Button>
        </Col>
      </Row>
      </Form>
      </Container>
    </div>
    <div className="d-none d-xxl-block contactbox-review text-center">
    <FaStar size={75} style={{color:'goldenrod'}} />
    <FaStar size={75} style={{color:'goldenrod'}} />
    <FaStar size={75} style={{color:'goldenrod'}} />
    <FaStar size={75} style={{color:'goldenrod'}} />
    <FaStar size={75} style={{color:'goldenrod'}} />
    <div style={{margin:4, padding:8, color:"#fff", fontSize:18, backgroundColor:'#1da179'}}>"Quick and convinient to move with Marco, pricing is good." - <strong>Abhik</strong></div>
    <div style={{margin:4, padding:8, color:"#fff", fontSize:18, backgroundColor:'#1da179'}}>"Guys helped me move my entire wardrobe all the way to Epping.." - <strong>Madhushan</strong></div>
    <a className="my-2 btn btn-primary btn-md" href="http://airtasker.com">Reviews</a>
    </div>
      <h2 className="display-1" style={{boxShadow:'rgba(0, 0, 0, 0.25) 0px 2px 4px, rgba(0, 0, 0, 0.22) 0px 1px 1px', textAlign:'center', fontFamily:'Archivo Narrow', backgroundColor:'#fff', width:'350px', color:'#1da179'}}>Contact us</h2>
      <div className="contactbox-mini">
      <div className="text-center" style={{color:"#1da179", fontFamily:'Archivo Narrow'}}>
      <div className="d-flex justify-content-center">
      <div style={{border:'3px solid #1da179', color:"#fff", padding:16, borderRadius:'100%', height:'100%', backgroundColor:'#1da179'}}><BsFillTelephoneFill size={55} /></div>
      </div>
        <p className="py-2"><a className="contactbox-links" href="tel:0406178359">(+61) 0406 178 359</a></p>
      </div>
      <div className="text-center" style={{color:"#1da179", fontFamily:'Archivo Narrow'}}>
      <div className="d-flex justify-content-center">
      <div style={{border:'3px solid #1da179', color:"#fff", padding:16, borderRadius:'100%', height:'100%', backgroundColor:'#1da179'}}><TfiEmail size={55} /></div>
      </div>
        <p className="py-2"><a className="contactbox-links" href="mailto: enquiries@marcoremovals.com.au">enquiries@marcoremovals.com.au</a></p>
      </div>
      </div>
    </div>
    </div>
    <div className="contactjumbo1 d-block d-sm-none">
    <h2 className="display-2" style={{boxShadow:'rgba(0, 0, 0, 0.25) 0px 2px 4px, rgba(0, 0, 0, 0.22) 0px 1px 1px', textAlign:'center', fontFamily:'Archivo Narrow', backgroundColor:'#fff', width:'100%', color:'#1da179'}}>Contact us</h2>
    <div className="contactbox-mini-mobile">
      <div className="text-center" style={{color:"#1da179", fontFamily:'Archivo Narrow'}}>
      <div className="d-flex justify-content-center">
      <div style={{border:'3px solid #1da179', color:"#fff", padding:16, borderRadius:'100%', height:'100%', backgroundColor:'#1da179'}}><BsFillTelephoneFill size={35} /></div>
      </div>
        <p className="py-2"><a className="contactbox-links" href="tel:0406178359">(+61) 0406 178 359</a></p>
      </div>
      <div className="text-center" style={{color:"#1da179", fontFamily:'Archivo Narrow'}}>
      <div className="d-flex justify-content-center">
      <div style={{border:'3px solid #1da179', color:"#fff", padding:16, borderRadius:'100%', height:'100%', backgroundColor:'#1da179'}}><TfiEmail size={35} /></div>
      </div>
        <p className="py-2"><a className="contactbox-links" href="mailto: enquiries@marcoremovals.com.au">enquiries@marcoremovals.com.au</a></p>
      </div>
      </div>
      <div className="d-block d-sm-none text-center py-2">
    <FaStar size={30} style={{color:'goldenrod'}} />
    <FaStar size={30} style={{color:'goldenrod', marginLeft:8}} />
    <FaStar size={30} style={{color:'goldenrod', marginLeft:8}} />
    <FaStar size={30} style={{color:'goldenrod', marginLeft:8}} />
    <FaStar size={30} style={{color:'goldenrod', marginLeft:8}} />
    <div style={{margin:8, padding:4, color:"#fff", fontSize:18, backgroundColor:'#1da179'}}>"Quick and convinient to move with Marco, pricing is good." - <strong>Abhik</strong></div>
    <div style={{margin:8, padding:4, color:"#fff", fontSize:18, backgroundColor:'#1da179'}}>"Guys helped me move my entire wardrobe all the way to Epping.." - <strong>Madhushan</strong></div>
    <a className="my-2 btn btn-primary btn-md" href="http://airtasker.com">Reviews</a>
    </div>
    </div>
    </div>
    <div className ="d-block d-sm-none quotebox-mobile" style={{backgroundColor:'#24dba4', margin:8, padding:8, color:'#fff', borderTop:'4px solid #1da179', boxShadow:'rgba(0, 0, 0, 0.25) 0px 2px 4px, rgba(0, 0, 0, 0.22) 0px 1px 1px'}}>
    <h2  style={{fontFamily:'Archivo Narrow', textAlign:'center', padding:6}}>Get a quote</h2>
      <Container>
      <Form onSubmit={(event)=>{handleSubmit(event)}}>
        <Row>
        <Col xs={12}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control style={{height:'50px', border:'2px solid #1da179'}} type="text" value={name} onChange={(event)=>{setName(event.target.value)}} placeholder="Enter name" required/>
      </Form.Group>
        </Col>
        </Row>
      <Row>
      <Col xs={12}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control style={{height:'50px', border:'2px solid #1da179'}} type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="Enter email" required/>
      </Form.Group>
          </Col>
          <Col xs={12}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Number</Form.Label>
        <Form.Control style={{height:'50px', border:'2px solid #1da179'}} type="number" value={number} onChange={(event)=>{setNumber(event.target.value)}} placeholder="Enter phone number" required/>
      </Form.Group>
          </Col>
      </Row>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="textarea">
      <Form.Label>Description</Form.Label>
      <Form.Control className="form-control" style={{height:100, border:'2px solid #1da179'}} value={desc} onChange={(event)=>{setDesc(event.target.value)}}  as="textarea" aria-label="With textarea" />
      </Form.Group>
        </Col>
      </Row>
      <Row>
      <Col className="text-center" xs={12} sm={6}>
        <Button className='d-sm-none w-100' style={{backgroundColor:'#1da179'}} variant="primary" type="submit">
        Submit
      </Button>
        </Col>
      </Row>
      </Form>
      </Container>
    </div>
    </>
}

export default Contact;