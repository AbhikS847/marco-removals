import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
    return(
        <div className="removalsfooter">
        <Container>
            <Row>
                <Col style={{padding:0, margin:0}} xs={12} sm={3}>
                    <h3 className="moversheaders" style={{fontWeight:600, letterSpacing:'1px', width:'45%', paddingBottom:'6px', borderBottom:'2px solid #fff'}}>Quick Links</h3>
                    <ul style={{listStyle:'none', padding:'4px 0 8px 4px'}}>
                        <li><a href="/">Bookings</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/schedule">Schedule</a></li>
                    </ul>
                </Col>
                <Col style={{padding:0, margin:0}} xs={12} sm={3}>
                <h3 className="moversheaders" style={{fontWeight:600, letterSpacing:'1px', width:'45%', paddingBottom:'6px', borderBottom:'2px solid #fff'}}>Locations</h3>
                    <ul style={{listStyle:'none', padding:'4px 0 8px 8px'}}>
                        <li>Carlton</li>
                        <li>Docklands</li>
                        <li>East Melbourne</li>
                        <li>Kensington</li>
                        <li>North Melbourne</li>
                        <li>Parkville</li>
                        <li>South Yarra</li>
                        <li>West Melbourne</li>
                        <li>CBD</li>
                    </ul>
                </Col>
                <Col style={{padding:0, margin:0}} xs={12} sm={3}>
                    <h3 className="moversheaders" style={{fontWeight:600, letterSpacing:'1px', width:'45%', paddingBottom:'6px', borderBottom:'2px solid #fff'}}>Contact</h3>
                    <ul style={{listStyle:'none', padding:'4px 0 8px 8px'}}>
                    <li><a href="mailto: enquiries@marcoremovals.com.au">enquiries@marcoremovals.com.au</a></li>
                    <li><a href="tel:0406178359">(+61) 0406 178 359</a></li>
                    </ul>
                    <h3 className="moversheaders" style={{fontWeight:600, letterSpacing:'1px', width:'45%', paddingBottom:'6px', borderBottom:'2px solid #fff'}}>Services</h3>
                    <ul style={{listStyle:'none', padding:'4px 0 8px 8px'}}>
                    <li>Moving houses</li>
                    <li>Furniture</li>
                    <li>Bulky pickup & delivery</li>
                    </ul>
                </Col>
                <Col style={{padding:0, margin:0}} xs={12} sm={3}>
                <h3 className="display-2" style={{color:"#fff",fontWeight:800, fontFamily: 'Archivo Narrow,sans-serif'}}>Marco Removals</h3>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Footer;