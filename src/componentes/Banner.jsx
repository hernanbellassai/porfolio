import React from 'react'
import { useEffect,useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import sentado from "../assets/img/sentado.png";


function Banner() {
      
const [loopNum , setLoopNum] = useState(0);  
const {isDeleting, setIsDeleting} = useState(false);
const toRotate = [ "web Developer ","web Designer", "UI/UX designer"];  
  
 const [text,setText] =useState(""); 
const period = 2000;
  
const [delta, setDelta] = useState(300 - Math.random() * 100);


  useEffect(()=>{
   let ticker = setInterval(()=>{
      tick();

   },delta)

   return()=>{clearInterval(ticker)};
  },[text])


  const tick =()=>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0,text.length + 1);
   
    setText(updatedText);
    if (isDeleting){
      setDelta(prevDelta => prevDelta / 2)
    }

    if(!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === ""){
      setIsDeleting(false);
       setLoopNum(loopNum + 1) 
       setDelta(500);
    }
  }
  return (
  <section className='banner' id="home">

     <Container>
    
      <Row className="aling-items-center">
      <Col xs={12} md={6} xl={7}>
         <span className='tagline'>Bienvenido a mi Portfolio</span> 
         <h1>{"Hola soy Hernan Bellassai"} <span className="wrap">{text}</span> </h1>       
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium architecto assumenda doloremque, corporis natus molestiae. Molestiae soluta atque sequi enim vel possimus eos, totam dignissimos, non id recusandae doloremque reprehenderit?</p>
        <button onClick={()=>console.log("connect")}> Lets Connect <ArrowRightCircle size={26}/> </button>
      
      </Col>
  
      <Col xs={12} md={6} xl={5}>
          <img src={sentado} alt="headder img" />    
       
      </Col>      
      </Row>


     </Container>



    </section>
  )
}

export default Banner