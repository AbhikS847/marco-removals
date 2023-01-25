import React from 'react';
import truck from '../../src/truck.jpg';
import {TfiEmail} from 'react-icons/tfi';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {FaStar} from 'react-icons/fa';

const Contact = () => {
    return <>
    <div className="moversjumbo" style={{backgroundImage:`url(${truck})`}}>
    <div className="contactjumbo1 d-none d-sm-flex ">
    <div>
    <div className="d-none d-xl-block contactbox-review text-center">
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
    <div className="text-center"></div>
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
    </>
}

export default Contact;