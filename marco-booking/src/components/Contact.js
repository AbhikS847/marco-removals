import React from 'react';
import {AiTwotoneStar} from "react-icons/ai";
import { Container, Card} from 'react-bootstrap';
import { SiGmail } from "react-icons/si";
import {GrInstagram} from "react-icons/gr";

const Contact = () => {
    return <>
    <Container>
    <h2 className='text-center py-3'>Contact details</h2>
    <Card className="text-center">
      <Card.Header>Marco Removals</Card.Header>
      <Card.Body>
        <Card.Title>0406178359</Card.Title>
        <Card.Title style={{fontSize:'30px'}}>Marco Evangelista</Card.Title>
        <Card.Text>
          Removalist for hire, well read and educated. Good reputation and earning through Airtasker. Over +200 trips made and customer satisfaction guranteed.
        </Card.Text>
        <div className="d-flex justify-content-center py-3">
        <AiTwotoneStar size={45} style={{color:'goldenrod'}} />
        <AiTwotoneStar size={45} style={{color:'goldenrod'}} />
        <AiTwotoneStar size={45} style={{color:'goldenrod'}} />
        <AiTwotoneStar size={45} style={{color:'goldenrod'}} />
        </div>
        <div className="d-flex justify-content-center">
        <a href="https://airtasker.com" style={{fontFamily:'Roboto'}}className="btn btn-primary btn mx-1" role="button" aria-pressed="true">Air tasker</a>
        <a href="https://gmail.com" style={{fontFamily:'Roboto'}}className="btn btn-primary btn mx-1" role="button" aria-pressed="true"><SiGmail size={20} /> Gmail</a>
        <a href="https://www.instagram.com/dmar.co/" style={{fontFamily:'Roboto'}}className="btn btn-primary btn mx-1" role="button" aria-pressed="true"><GrInstagram size={20} /> Instagram</a>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">Copyright Marco Removals 2022</Card.Footer>
    </Card>
    </Container>
    </>
}

export default Contact;