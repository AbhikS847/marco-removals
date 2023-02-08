import React, {useState, useRef} from 'react';
import ReactDatePicker from 'react-datepicker';
import {GiConfirmed} from "react-icons/gi";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col, Badge, Modal, Alert} from 'react-bootstrap';
import {AiFillDollarCircle} from 'react-icons/ai';
import {BsFillHouseDoorFill, BsCurrencyDollar, BsCloudUpload, BsTrash} from 'react-icons/bs';
import {FaUserAlt, FaStickyNote, FaPeopleCarry, FaTruck, FaCouch, FaBars} from 'react-icons/fa';
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

const ServicesModal = (props) => {
  return(
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{backgroundColor:'#24dba4'}} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{padding:0, margin:0}}>
      <div className="servicesbox-mobile">
    <div>
    <h2 style={{textAlign:'center', width:'100%', backgroundColor:'#fff', color:'#1da179', padding:16, boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', fontFamily: 'Archivo Narrow,sans-serif'}}>Services</h2>
    </div>
    <div className="d-flex justify-content-left my-2 px-2">
    <div style={{backgroundColor:'#fff', color:'#1da179', padding:5, borderRadius:'25%', border:'3px solid #1da179'}}>
    <BsFillHouseDoorFill size={30}></BsFillHouseDoorFill>
    </div>
    <div style={{padding:'8px 0px 0px 8px', fontSize:19, fontWeight:600, borderBottom:'2px solid #fff', width:'100%', marginLeft:8, borderRadius:'5%'}}>Moving houses</div>
    </div>
    <div className="d-flex justify-content-left my-2 px-2">
    <div style={{backgroundColor:'#fff', color:'#1da179', padding:5, borderRadius:'25%', border:'3px solid #1da179'}}>
    <FaCouch size={30}></FaCouch>
    </div>
    <div style={{padding:'8px 0px 0px 8px', fontSize:19, fontWeight:600, borderBottom:'2px solid #fff', width:'100%', marginLeft:8, borderRadius:'5%'}}>Furniture delivery</div>
    </div>
    <div className="d-flex justify-content-left my-2 px-2">
    <div style={{backgroundColor:'#fff', color:'#1da179', padding:5, borderRadius:'25%', border:'3px solid #1da179'}}>
    <FaPeopleCarry size={30}></FaPeopleCarry>
    </div>
    <div style={{padding:'8px 0px 0px 8px', fontSize:19, fontWeight:600, borderBottom:'2px solid #fff', width:'100%', marginLeft:8, borderRadius:'5%'}}>Bulky pickup & delivery</div>
    </div>
    <div style={{paddingBottom:'8px'}} className="d-flex justify-content-left my-2 px-2">
    <div style={{backgroundColor:'#fff', color:'#1da179', padding:5, borderRadius:'25%', border:'3px solid #1da179'}}>
    <BsCurrencyDollar size={30}></BsCurrencyDollar>
    </div>
    <div style={{padding:'8px 0px 0px 8px', fontSize:19, borderBottom:'2px solid #fff', fontWeight:600, width:'100%', marginLeft:8, borderRadius:'5%'}}>No hidden costs</div>
    </div>
    </div>
      </Modal.Body>
      <Modal.Footer style={{borderTop:'none', padding:5}}>
      <p style={{padding:0, margin:0, fontFamily:'Archivo Narrow', fontSize:'18px'}} className="text-muted small w-100">Pricing details will be sent via email or through text message.</p>
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
    const [price, setPrice] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [confirmationDetails, setConfirmationDetails] = useState({});
    const [files, setUploadedFiles] = useState([]);
    const inputRef = useRef(null);

    const handleFileChange = (event) => {
      const chosenFiles = Array.prototype.slice.call(event.target.files);
      if(!chosenFiles){
        return;
      }
      setUploadedFiles([...files, ...chosenFiles]);
    };
    

    const priceInserter = (price) => {
      setPrice(price);
    }

    const removeFile = (filename) => {
      const updatedFiles = files.filter(file => file.name !== filename);
      setUploadedFiles(updatedFiles);
    }
  
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
    <div className="servicebox-mobile">
      <Button onClick={()=>{setShowServices(true)}} style={{padding:'0px 4px 1px 4px', margin:'1px 0px 0px 0px', borderRadius:'0'}} size="sm"><FaBars size={18}></FaBars></Button>
    </div>
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
    <h2 className="text-center py-3 moversheaders">Create A Job</h2>
    <Form encType='multipart/form-data' style={{padding:16, margin:8,border:'3px solid #eaeaea'}} autoComplete="false" onSubmit={(event)=>{
          event.preventDefault();

          const timeJSON = JSON.stringify(time);
          const timeStr = JSON.parse(timeJSON);
          const bookingTime = new Date(timeStr);

          const dateJSON = JSON.stringify(startDate);
          const dateStr = JSON.parse(dateJSON);
          const bookingDate = new Date(dateStr);
          const bookingFormData = new FormData();

          const booking = {
            name:firstName + " "  + lastName,
            number:number,
            email:email,
            location:location,
            date:(bookingDate.getDate() < 10 ? "0" + bookingDate.getDate() : bookingDate.getDate()) + "/" + (bookingDate.getMonth() + 1) + "/" + bookingDate.getFullYear(),
            time:((bookingTime.getHours() < 10 ? "0" + bookingTime.getHours() : bookingTime.getHours()) + ":" + (bookingTime.getMinutes() < 10 ? "0" + bookingTime.getMinutes() : bookingTime.getMinutes())),
            desc:desc,
            price:price,
            images:files
          }
          bookingFormData.append('_id', Math.floor(Math.random() * 99999999));
          bookingFormData.append('name', booking.name);
          bookingFormData.append('number', booking.number);
          bookingFormData.append('email', booking.email);
          bookingFormData.append('location', booking.location);
          bookingFormData.append('date', booking.date);
          bookingFormData.append('time', booking.time);
          bookingFormData.append('desc', booking.desc);
          bookingFormData.append('price', booking.price);

          console.log(booking.images);

          if(booking.images != null){
            booking.images.forEach((image) => {
              bookingFormData.append('images', image);
            })
          }
          else{
            bookingFormData.append('images', []);
          }

          const makeBooking = async() => {
            try{
              const response = await axios.post(`${process.env.REACT_APP_API_SERVER}/booking/create`, bookingFormData);
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
          setPrice("");
          setUploadedFiles([]);
        }}>
    <BookingModal details={confirmationDetails} show={showSuccess} onHide={()=>{setShowSuccess(false)}} />
    <ServicesModal show={showServices} onHide={()=>{setShowServices(false)}} />
    <Row style={{padding:16}}>
        <h2 style={{color:"#1da179", fontFamily:'Archivo Narrow'}}>Details</h2>
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
    <h2 style={{color:"#fff", padding:8, backgroundColor:'#24dba4', fontFamily:'Archivo Narrow', textAlign:'center'}}>Set your price</h2>
    <Form.Text className="text-muted">
      Select one of our prices below or feel free to set the price for your job.
        </Form.Text>
    <Col xs={12} sm={12}>
    <div className="pricingbtnrow">
    <Button className='d-none d-sm-block pricingbtns' style={{marginLeft:0}} onClick={()=>{priceInserter(150);}} variant="primary">$150</Button>
    <Button className='d-none d-sm-block pricingbtns' onClick={()=>{priceInserter(300);}} variant="primary">$300</Button>
    <Button className='d-none d-sm-block pricingbtns' onClick={()=>{priceInserter(375);}} variant="primary">$375</Button>
    <Button className='d-none d-sm-block pricingbtns' onClick={()=>{priceInserter(420);}} variant="primary">$420</Button>
    <Button className='d-none d-sm-block pricingbtns' onClick={()=>{priceInserter(500);}} variant="primary">$500</Button>
    <Button className='d-none d-sm-block pricingbtns' onClick={()=>{priceInserter(550);}} variant="primary">$550</Button>
    <Button className='d-none d-sm-block pricingbtns' onClick={()=>{priceInserter(580);}} variant="primary">$580</Button>
    <Row className='d-block d-sm-none'>
    <Col className="d-flex">
    <Button className='d-block d-sm-none pricingbtns-mobile' style={{marginLeft:0}} onClick={()=>{priceInserter(150);}} variant="primary">$150</Button>
    <Button className='d-block d-sm-none pricingbtns-mobile' onClick={()=>{priceInserter(300);}} variant="primary">$300</Button>
    <Button className='d-block d-sm-none pricingbtns-mobile' onClick={()=>{priceInserter(375);}} variant="primary">$375</Button>
    <Button className='d-block d-sm-none pricingbtns-mobile' onClick={()=>{priceInserter(420);}} variant="primary">$420</Button>
    <Button className='d-block d-sm-none pricingbtns-mobile' onClick={()=>{priceInserter(500);}} variant="primary">$500</Button>
    <Button className='d-block d-sm-none pricingbtns-mobile' onClick={()=>{priceInserter(550);}} variant="primary">$550</Button>
    <Button className='d-block d-sm-none pricingbtns-mobile' onClick={()=>{priceInserter(580);}} variant="primary">$580</Button>
    </Col>
    </Row>
    <AiFillDollarCircle className="d-none d-sm-block" style={{color:'#24dba4', marginLeft:12, marginRight:12, border:'2px solid #24dba4', borderRadius:'25px'}} size={45} /><Form.Control className="d-none d-sm-block" style={{width:'15%', color:'#1da179', fontFamily:'Archivo Narrow', fontSize:23, fontWeight:600}} type="number" placeholder="enter price" value={price} onChange={(event)=>{setPrice(event.target.value)}} required/>
    </div>
    <div className="d-flex d-sm-none justify-content-center">
    <div className="d-flex d-sm-none align-items-center"><AiFillDollarCircle className="d-flex d-sm-none" style={{color:'#24dba4', border:'2px solid #24dba4', borderRadius:'25px', marginRight:'8px'}} size={45} /></div>
    <Form.Control className="d-block d-sm-none text-center my-2" style={{width:'100%', color:'#1da179', fontFamily:'Archivo Narrow', fontSize:20, fontWeight:600}} type="number" placeholder="enter price" value={price} onChange={(event)=>{setPrice(event.target.value)}} required/>
    </div>
    <Form.Text className="text-muted">
      <strong>Please note that some prices may vary depending on the type of job assigned.</strong>
        </Form.Text>
    </Col>
    </Row>
    <Row className="py-4"><h2 style={{color:"#1da179", fontFamily:'Archivo Narrow'}}>Upload an image</h2>
    <Form.Text className="text-muted">
    Providing us photos of items that you want moved. Example photos of wardrobe, refrigirators, appliances, mattresses and etc...
        </Form.Text>
      <Col>
      <div className="movers-fileuploader">
      <input ref={inputRef} name='photos' onChange={handleFileChange} className="d-none" type="file" multiple accept="image/png, image/gif, image/jpeg"></input>
      {files.length === 0 ? <>
        <div className="moversfileicon"><BsCloudUpload size={60} /></div>
        <h2 style={{fontFamily:'Archivo Narrow', fontWeight:600}} className="py-3">Upload your files here</h2>
      </> :<><div className="d-none d-sm-flex mb-3 imagebox">
        {files.map((file) => {
          return(
            <div style={{border:'2px solid #eaeaea', padding:8, margin:16, display:'flex', justifyContent:'center', flexDirection:'column', position:'relative'}} key={file.name + Math.floor(Math.random() * 9999999)}>
            <div className="removebutton" style={{position:'absolute', top:15, right:15, borderRadius:'5px', color:'#fff', padding:4, backgroundColor:'#DC143C'}} onClick={()=>{removeFile(file.name)}}><BsTrash size={25} /></div>
            <div><img height="300px" alt={file.name} src={URL.createObjectURL(file)} /></div>
            <div className="py-2"><p style={{fontFamily:'Archivo Narrow', fontSize:18}}>{file.name}</p></div>
            </div>
          )
        })}
      </div>
      <div className="d-flex d-sm-none mb-3 imagebox-mobile">
        {files.map((file) => {
          return(
            <div style={{border:'2px solid #eaeaea', padding:4, margin:8, display:'flex', justifyContent:'center', flexDirection:'column', position:'relative'}} key={file.name + Math.floor(Math.random() * 9999999)}>
            <div className="removebutton" style={{position:'absolute', top:15, right:15, borderRadius:'5px', color:'#fff', padding:4, backgroundColor:'#DC143C'}} onClick={()=>{removeFile(file.name)}}><BsTrash size={25} /></div>
            <div><img width="100%" style={{objectFit:'cover'}} alt={file.name} src={URL.createObjectURL(file)} /></div>
            <div className="py-2"><p style={{fontFamily:'Archivo Narrow', fontSize:18}}>{file.name}</p></div>
            </div>
          )
        })}
      </div>
      </>}
        <Button className="movers-btn" onClick={()=>{inputRef.current.click()}}>Select files</Button>
      </div>
      </Col>
    </Row>
    <Row>
        <Col className="text-center py-2" xs={12} sm={6}>
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