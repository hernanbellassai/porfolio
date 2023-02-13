import React from 'react'
import { useState,useEffect } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg";


function Contact() {
  

  const formInitialDetails = {
    firstName:"",
    lastName:"",
    email:"",
    number:"",
    message:"",
  }
  console.log(formInitialDetails)

const [formDetails , setFormDetails] =useState(formInitialDetails); // aca vendriamos a setear inicialmente con lo que tiene forminitialDetails

  console.log(formDetails);

const [buttonText,setButtonText] = useState("send"); //boton de enviar 

const[status,setStatus]=useState({});


const onFormUpdate = (category,value)=>{
 setFormDetails({
  ...formDetails,
  [category]:value
 })
}


const handleSubmit = async (e)=>{
  e.preventDefault();
  setButtonText("sending...")
 let reponse =await fetch("http://localhost:5000/contact", {

 method:"POST",
  headers:{
   "Content-Type":"Application/json;charset=utf-8",
  },
  body:JSON.stringify(formDetails),
 

 }) ;

   setButtonText("Send");
   
   let result = reponse.json();
   setFormDetails(formInitialDetails);
   
   if(result.code === 200){
    setStatus({success:true, message:"mensaje enviado correctamente!"})
   }else{
    setStatus({success:false, message:"algo salio mal, intentalo denuevo! "})
   }
  
  }
 


  return (
    <section className='contact' id="connect">
      <Container>
      <Row className="align-items-center">
       <Col md={6}>
            <img src={contactImg} alt="Contact Us" />     
  
       </Col>

       <Col md={6}>
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col sm={6} className="px-1">
               <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate("firstName" , e.target.value)} />
              </Col>
              <Col sm={6} className="px-1">
              <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=>onFormUpdate("lastName" , e.target.value)} />
              
              </Col>
              <Col sm={6} className="px-1">
              <input type="text" value={formDetails.email} placeholder="Email" onChange={(e)=>onFormUpdate("email" , e.target.value)} />
              </Col>
              <Col sm={6} className="px-1">
              <input type="text" value={formDetails.number} placeholder="Phone Number" onChange={(e)=>onFormUpdate("number" , e.target.value)} />
              </Col>
              
              <Col >
                 <textarea row="6" value={formDetails.message} placeholder="message" onChange={(e)=>onFormUpdate("message",e.target.value)}></textarea>
                  <button type="submit" ><span>{buttonText}</span></button>
              </Col>

              {
                status.message&& 
                <Col>
                  <p className={status.success === false ? "danger":"success"}>{status.message} </p>
                </Col>
              }

            </Row>
          </form>
       </Col>
      </Row>

      </Container>

    </section>
  )
}

export default Contact