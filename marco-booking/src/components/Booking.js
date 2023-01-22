import React, {useState} from 'react';
import ReactDatePicker from 'react-datepicker';
import {GiConfirmed} from "react-icons/gi";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col, Badge, Modal, Alert} from 'react-bootstrap';
import {BsFillHouseDoorFill, BsCurrencyDollar} from 'react-icons/bs';
import {FaUserAlt, FaStickyNote, FaPeopleCarry, FaTruck, FaCouch} from 'react-icons/fa';
import {ImLocation, ImCalendar, ImClock, ImMail2} from 'react-icons/im';
import {FiPackage, FiPhoneCall} from 'react-icons/fi';
import { TbArrowNarrowRight } from "react-icons/tb";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import movers from '../../src/movers.jpg';

const BookingModal = (props) => {

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  return(
    <Modal 
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
          <Modal.Header style={{backgroundColor:"#24dba4", color:"#fff"}} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <GiConfirmed style={{color:'#fff'}} size={24} /> Booking confirmation  
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Alert key="success" variant="success">
        <div className="text-center">
        <p style={{margin:4, fontSize:25}}><strong>Booking confirmed!</strong></p>
        <p style={{margin:4}}><strong>Booking ID:</strong> {props.details._id === null ? "" : props.details._id}</p>
        <p style={{margin:4}}><strong>Date: </strong> {props.details.date === null ? "" : (props.details.date)}</p>
        </div>
      </Alert>
      <h5 className="pb-2"><strong>Booking Details</strong></h5>
      <hr style={{marginTop:4}}></hr>
      <div className="d-flex">
      <div style={{padding:6, margin:4}}>
        <FaUserAlt className="text-muted" size={20} />
      </div>
      <div style={{alignItems:'center'}}>
        <div className="text-muted">Name</div>
        <div>{props.details.name}</div>
      </div>
      </div>
      <div className="d-flex pt-2">
      <div style={{padding:6, margin:4}}>
        <ImLocation className="text-muted" size={20} />
      </div>
      <div style={{alignItems:'center'}}>
        <div className="text-muted">Location</div>
        <div>{props.details.location}</div>
      </div>
      </div>
      {props.details.date == null && props.details.time == null ? "" : (<>
        <div className="d-flex pt-2">
      <div style={{padding:6, margin:4}}>
        <ImCalendar className="text-muted" size={20} />
      </div>
      <div style={{alignItems:'center'}}>
        <div className="text-muted">Date</div>
        <div>{props.details.date.slice(0,2)} {monthNames[props.details.date.slice(3,4) - 1]} {props.details.date.slice(5,10)}</div>
      </div>
      </div>
      <div className="d-flex pt-2">
      <div style={{padding:6, margin:4}}>
        <ImClock className="text-muted" size={20} />
      </div>
      <div style={{alignItems:'center'}}>
        <div className="text-muted">Time</div>
        <div>{props.details.time} {props.details.time.slice(0,2) > 12 ? "PM" : "AM" }</div>
      </div>
      </div>
      <div className="d-flex pt-2">
      <div style={{padding:6, margin:4}}>
        <ImMail2 className="text-muted" size={20} />
      </div>
      <div style={{alignItems:'center'}}>
        <div className="text-muted">Email</div>
        <div>{props.details.email}</div>
      </div>
      </div>
      <div className="d-flex pt-2">
      <div style={{padding:6, margin:4}}>
        <FaStickyNote className="text-muted" size={20} />
      </div>
      <div style={{alignItems:'center'}}>
        <div className="text-muted">Description</div>
        <div>{props.details.desc === "" ? "(No description added)" : props.details.desc}</div>
      </div>
      </div>
      </>)}
      </Modal.Body>
      <Modal.Footer>
      <p style={{padding:4, margin:4}} className="text-muted small w-100">A copy of this confirmation will be sent to your email.</p>
      </Modal.Footer>
    </Modal>
  );
}

const Booking = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [location , setLocation] = useState('');
    const [startDate, setStartDate] = useState(Date.now());
    const [time, setTime] = useState('');
    const [desc, setDesc] = useState('');

    const [showSuccess, setShowSuccess] = useState(false);
    const [confirmationDetails, setConfirmationDetails] = useState({});

  
    return <div>
    <div className="moversjumbo d-none d-sm-block" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${movers}')`}}>
    <div className="contactbox">
      <div className="d-flex justify-content-center" style={{}}>
      <div style={{padding:5}}>
      <FiPhoneCall size={30}></FiPhoneCall>
      </div>
      <div style={{display:'flex', alignItems:'center', fontSize:25, fontFamily:'Archivo Narrow'}}>
        Contact:  <a className="px-2 link-primary" href="tel:0406178359">(+61) 0406 178 359 </a>
      </div>
      </div>
    </div>
    <div className="servicesbox">
    <div>
    <h2 style={{textAlign:'center', width:'100%', backgroundColor:'#fff', color:'#1da179', padding:16, boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', fontFamily: 'Archivo Narrow,sans-serif'}}>Services</h2>
    </div>
    <div className="d-flex justify-content-left my-2 px-2">
    <div style={{backgroundColor:'#fff', color:'#1da179', padding:5, borderRadius:'25%', border:'3px solid #1da179'}}>
    <BsFillHouseDoorFill size={45}></BsFillHouseDoorFill>
    </div>
    <div style={{padding:'8px 0px 0px 8px', fontSize:24, fontWeight:600, borderBottom:'3px solid #fff', width:'100%', marginLeft:8, borderRadius:'5%'}}>Moving houses</div>
    </div>
    <div className="d-flex justify-content-left my-2 px-2">
    <div style={{backgroundColor:'#fff', color:'#1da179', padding:5, borderRadius:'25%', border:'3px solid #1da179'}}>
    <FaCouch size={45}></FaCouch>
    </div>
    <div style={{padding:'8px 0px 0px 8px', fontSize:24, fontWeight:600, borderBottom:'3px solid #fff', width:'100%', marginLeft:8, borderRadius:'5%'}}>Furniture delivery</div>
    </div>
    <div className="d-flex justify-content-left my-2 px-2">
    <div style={{backgroundColor:'#fff', color:'#1da179', padding:5, borderRadius:'25%', border:'3px solid #1da179'}}>
    <FaPeopleCarry size={45}></FaPeopleCarry>
    </div>
    <div style={{padding:'8px 0px 0px 8px', fontSize:24, fontWeight:600, borderBottom:'3px solid #fff', width:'100%', marginLeft:8, borderRadius:'5%'}}>Bulky pickup & delivery</div>
    </div>
    <div className="d-flex justify-content-left my-2 px-2">
    <div style={{backgroundColor:'#fff', color:'#1da179', padding:5, borderRadius:'25%', border:'3px solid #1da179'}}>
    <BsCurrencyDollar size={45}></BsCurrencyDollar>
    </div>
    <div style={{padding:'8px 0px 0px 8px', fontSize:24, fontWeight:600, borderBottom:'3px solid #fff', width:'100%', marginLeft:8, borderRadius:'5%'}}>No hidden costs</div>
    </div>
    </div>
    <div className="moversjumbotext">
      <h3 className="display-2" style={{color:"#fff",fontWeight:800, fontFamily: 'Archivo Narrow,sans-serif'}}>Marco Removals</h3>
      <div className="d-flex justify-content-center">
      <div style={{backgroundColor:'#24dba4', borderRadius:'25%', padding:8, border:'2px solid #fff'}}>
      <div><FiPackage size={45} style={{color:'#fff'}} /></div>
      </div>
      <div style={{padding:"8px 8px 8px 0"}}>
      <div><TbArrowNarrowRight size={45} style={{color:'#fff'}} /></div>
      </div>
      <div style={{backgroundColor:'#24dba4', borderRadius:'25%', padding:8, border:'2px solid #fff'}}>
      <div><FaPeopleCarry size={45} style={{color:'#fff'}} /></div>
      </div>
      <div style={{padding:"8px 8px 8px 0"}}>
      <div><TbArrowNarrowRight size={45} style={{color:'#fff'}} /></div>
      </div>
      <div style={{backgroundColor:'#24dba4', borderRadius:'25%', padding:8, border:'2px solid #fff'}}>
      <div><FaTruck size={45} style={{color:'#fff'}} /></div>
      </div>
      <div style={{padding:"8px 8px 8px 0"}}>
      <div><TbArrowNarrowRight size={45} style={{color:'#fff'}} /></div>
      </div>
      <div style={{backgroundColor:'#24dba4', borderRadius:'25%', padding:8, border:'2px solid #fff'}}>
      <div><BsFillHouseDoorFill size={45} style={{color:'#fff'}} /></div>
      </div>
      </div>
    </div>
    </div>
    <div className="d-block d-sm-none moversjumbomobile" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${movers}')`}}>
    <div className="contactbox-mobile">
    <div className="d-flex justify-content-center" style={{}}>
    <div style={{padding:'0px 4px 0px 4px'}}><FiPhoneCall size={15}></FiPhoneCall></div> |
    <div style={{display:'flex', alignItems:'center', fontSize:15, fontFamily:'Archivo Narrow'}}>
      <a className="px-2 link-primary" href="tel:0406178359">(+61) 0406 178 359 </a>
      </div>
      </div>
    </div>
    <div className="moversjumbotextmobile">
      <h1 className="display-4" style={{fontWeight:800, fontFamily: 'Archivo Narrow,sans-serif', letterSpacing:'4px'}}>Marco Removals</h1>
      <div className="d-flex justify-content-center">
      <div style={{backgroundColor:'#24dba4', borderRadius:'25%', padding:4, border:'2px solid #fff'}}>
      <div><FiPackage size={30} style={{color:'#fff'}} /></div>
      </div>
      <div style={{padding:"4px 4px 4px 0"}}>
      <div><TbArrowNarrowRight size={30} style={{color:'#fff'}} /></div>
      </div>
      <div style={{backgroundColor:'#24dba4', borderRadius:'25%', padding:4, border:'2px solid #fff'}}>
      <div><FaPeopleCarry size={30} style={{color:'#fff'}} /></div>
      </div>
      <div style={{padding:"4px 4px 4px 0"}}>
      <div><TbArrowNarrowRight size={30} style={{color:'#fff'}} /></div>
      </div>
      <div style={{backgroundColor:'#24dba4', borderRadius:'25%', padding:4, border:'2px solid #fff'}}>
      <div><FaTruck size={30} style={{color:'#fff'}} /></div>
      </div>
      <div style={{padding:"4px 4px 4px 0"}}>
      <div><TbArrowNarrowRight size={30} style={{color:'#fff'}} /></div>
      </div>
      <div style={{backgroundColor:'#24dba4', borderRadius:'25%', padding:4, border:'2px solid #fff'}}>
      <div><BsFillHouseDoorFill size={30} style={{color:'#fff'}} /></div>
      </div>
      </div>
    </div>
    </div>
    <Container>
    <h2 className="text-center py-3 moversheaders">Bookings</h2>
    <Form style={{padding:16, margin:8,border:'3px solid #eaeaea'}} autoComplete="false" onSubmit={(event)=>{
          event.preventDefault();

          const timeJSON = JSON.stringify(time);
          const timeStr = JSON.parse(timeJSON);
          const bookingTime = new Date(timeStr);

          const dateJSON = JSON.stringify(startDate);
          const dateStr = JSON.parse(dateJSON);
          const bookingDate = new Date(dateStr);

          const booking = {
            name:firstName + " "  + lastName,
            number:number,
            email:email,
            location:location,
            date:(bookingDate.getDate() < 10 ? "0" + bookingDate.getDate() : bookingDate.getDate()) + "/" + (bookingDate.getMonth() + 1) + "/" + bookingDate.getFullYear(),
            time:((bookingTime.getHours() < 10 ? "0" + bookingTime.getHours() : bookingTime.getHours()) + ":" + (bookingTime.getMinutes() < 10 ? "0" + bookingTime.getMinutes() : bookingTime.getMinutes())),
            desc:desc
          }

          const makeBooking = async() => {
            try{
              const response = await axios.post(`${process.env.REACT_APP_API_SERVER}/booking/create`,{
                _id:Math.floor(Math.random() * 99999999),
                name:booking.name,
                number:booking.number,
                email:booking.email,
                location:booking.location,
                date:booking.date,
                time:booking.time,
                desc:booking.desc
              });
              console.log(response.data);
              setConfirmationDetails(response.data);
              setShowSuccess(true);
            }
            catch(error){
              console.log(error);
            }
          }
          makeBooking();
          setFirstName("");
          setLastName("");
          setPhoneNumber("");
          setEmail("");
          setLocation("");
          setStartDate(Date.now());
          setTime("");
          setDesc("");
        }}>
    <BookingModal details={confirmationDetails} show={showSuccess} onHide={()=>{setShowSuccess(false)}} />
    <Row style={{padding:16}}>
        <h2 style={{color:"#1da179"}}>Details</h2>
        <Col xs={12} sm={4}>
        <Form.Group className="mb-3" controlId="firstname">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(event)=> setFirstName(event.target.value)} required/>
      </Form.Group>
        </Col>
        <Col xs={12} sm={4}>
        <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(event)=> setLastName(event.target.value)} required/>
      </Form.Group>
        </Col>
        <Col xs={12} sm={3}>
        <Form.Group className="mb-3" controlId="phonenumber">
        <Form.Label>Phone number</Form.Label>
        <Form.Control style={{WebkitAppearance:'none'}} type="number" placeholder="Enter phone number" value={number} onChange={(event)=>{setPhoneNumber(event.target.value)}} required/>
      </Form.Group>
        </Col>
        <Row>
        <Col xs={12} sm={6}>
        <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address <Badge bg="primary">Required</Badge></Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event)=>{setEmail(event.target.value)}} required/>
        <Form.Text className="text-muted">
        *A calendar invite will be sent to you through your email account*
        </Form.Text>
      </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
        <Form.Group className="mb-3" controlId="location">
        <Form.Label>Location <Badge bg="primary">Required</Badge></Form.Label>
        <Form.Control type="text" placeholder="Enter your location" value={location} onChange={(event)=>{setLocation(event.target.value);}} required />
        <Form.Text className="text-muted">
        *Location to drop off or pickup items*
        </Form.Text>
      </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col xs={12} sm={6}>
        <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date</Form.Label>
        <ReactDatePicker dateFormat="dd/MM/yyyy" className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} required minDate={Date.now()}/>
        <Form.Text className="text-muted">
        *Please select a date*
        </Form.Text>
      </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
        <Form.Group className="mb-3" controlId="time">
        <Form.Label>Time</Form.Label>
        <ReactDatePicker className="form-control" selected={time} onChange={(newTime) => setTime(newTime)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time"
      dateFormat="h:mm aa" required/>
        <Form.Text className="text-muted">
        *Please select a time*
        </Form.Text>
      </Form.Group>
        </Col>
    </Row>
    <Row>
      <Col>
      <Form.Group className="mb-3" controlId="textarea">
      <Form.Label>Description</Form.Label>
      <Form.Control className="form-control" style={{height:150}} as="textarea" aria-label="With textarea" value={desc} onChange={(event) =>{setDesc(event.target.value)}} />
      <Form.Text className="text-muted">
      *You can describe your delivery details here. For example, the items, weight and other important information.*
        </Form.Text>
      </Form.Group>
      </Col>
    </Row>
    <Row>
        <Col className="text-center" xs={12} sm={6}>
        <Button className='d-sm-none w-100' variant="primary" type="submit">
        Submit
      </Button>
        </Col>
        <Col className="d-flex justify-content-center" xs={12} s={6}>
        <Button style={{width:"30%"}} className='d-none d-sm-block' variant="primary" type="submit">
        Submit
      </Button>
        </Col>
    </Row>
    </Row>
    </Form>
    </Container>
    </div>
}

export default Booking;