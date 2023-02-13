import React from 'react'
import { Container,Col,Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import react from "../assets/img/react.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import node from "../assets/img/node.png";
import redux from "../assets/img/redux.png";
import post from "../assets/img/post.png";




function Skills() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
   <section className='skill bg-black' id="skills" >

   <Container>
    <Row>
    <Col>

     <div className="skill-bx">
        <h2>
          Skills
        </h2>
         <p>
         +800 horas de programación en practicas y proyectos.
Aptitudes: JavaScript · React.js · React.Native · Node.js · HTML5 · Hojas de estilos en cascada (CSS) · Bootstrap · PostgreSQL · SQL · Sequelize.js · Express.js · Redux.js · Scrum
         </p>
         <Carousel responsive={responsive} infinite={true} className={"skill-slider"} >
         
         <div className="item">
              <img src={html} alt="Image"/>
              <h5> Html </h5>
          </div>  

          <div className="item">
              <img src={css} alt="Image"/>
              <h5> Css </h5>
          </div>       
          
         
         
         <div className="item">
              <img src={js} alt="Image"/>
              <h5> javaScript</h5>
          </div>      
          <div className="item">
              <img src={react} alt="Image"/>
              <h5> React</h5>
          </div>   

          <div className="item">
              <img src={redux} alt="Image"/>
              <h5> Redux </h5>
          </div>    
          <div className="item">
              <img src={node} alt="Image"/>
              <h5> Node </h5>
          </div> 
          <div className="item">
              <img src={post} alt="Image"/>
              <h5> postgre </h5>
          </div>                  
          
        
          </Carousel>
  
       </div>
    </Col>
    </Row>
   </Container>

   </section>
  )
}


export default Skills