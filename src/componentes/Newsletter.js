import { Col,Row,Alert } from "react-bootstrap"
import { useEffect, useState } from "react"



export const Newsletter =({onValidated,status,message})=>{
 
const [email,setEmail] = useState("");

 
 useEffect(()=>{
  if(status === "success") clearFields()  // si estatus es succes limpia los campos de email

   
 },[status])

 const handleSubmit=(e)=>{
 e.preventDefault();
 email &&
 email.indexOf("@") > -1 && 
 onValidated ({
  EMAIL: email
 }) 
}

const clearFields = () =>{
  setEmail("");
} // funcion para limpiar campos 


  return(
    <Col>
    <div className="newsletter-bx">
     <Row>
      <Col lg={12} md={6} xl={5} >
        <h3>Subscribe to our Newslettrer</h3>
        {status=== "sending" && <Alert>Sending...</Alert> }
        {status=== "error" && <Alert variant ="danger">{message}</Alert> }
        {status=== "success" && <Alert variant="success">{message}</Alert> }
      </Col>
      <Col md={6} x={7} >
          <form onSubmit={handleSubmit}>
           <div className="new-email-bx">
            <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="direccion de Email"></input>
             <button type="submit"> Enviar </button>
           </div>
        </form>
      </Col>
     </Row>
 

    </div>
    </Col>
  )
}