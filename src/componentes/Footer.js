import React from 'react'
import { Container } from 'react-bootstrap'
import { MailchimpForm } from './mailchimpForm';
import { Row,Col } from 'react-bootstrap';
import avatar from "../assets/img/avatar.png"; 
import nav1 from "../assets/img/nav-icon1.svg";
import nav2 from "../assets/img/nav-icon2.svg";
import nav3 from "../assets/img/nav-icon3.svg";

function Footer() {
  return (
    <footer className='footer'>
      <Container>
       <Row className="aling-item-center">
        
       
        <MailchimpForm/> 
        <Col sm={6} >
           <img src={avatar} atl="logo"/>  
        </Col> 

        <Col sm={6} className="text-center text-sm-end">
           <div className="social-icon">
            <a href=""><img src={nav1}/></a>
            <a href=""><img src={nav2}/></a>
            <a href=""><img src={nav3}/></a>
           </div>

           <p>CopyRight 2023. All Right Reserved Hernan Bellassai </p>
        </Col>

       </Row>
      </Container>

    </footer>
  )
}

export default Footer;