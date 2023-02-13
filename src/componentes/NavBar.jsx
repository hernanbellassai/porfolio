import React from 'react'
import { Navbar , Container , Nav} from 'react-bootstrap'
import { useState , useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import nav1 from "../assets/img/nav-icon1.svg";
import nav2 from "../assets/img/nav-icon2.svg";
import nav3 from "../assets/img/nav-icon3.svg";
import avat from "../assets/img/avatar.png";
function NavBar() {
   
  const {activeLink , setActiveLink } = useState("home");
  const {scrolled, setScrolled} =useState(false);
    

    


    useEffect(()=>{
      const onScroll = ()=>{
        if ( window.scrollY > 50){
          setScrolled(true);
        }else {
          setScrolled(false);
        }
      }
      window.addEventListener("scroll",onScroll)
      return()=> window.removeEventListener("scroll", onScroll);
    },[])
   
    const onUpdateActiveLink = (value)=>{
          setActiveLink(value);
    }

    const handleClick= (e) =>{
     e.preventDefault();
     window.location.href="https://wa.me/+5491124718543";
    }
    
  return (
     <Navbar expand="lg" className={scrolled ? "scrolled" :""} >
          <Container>
            <Navbar.Brand href="#home"> <img src={avat} alt="Logo"/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <span className='navbar-toggler-icon'></span>
                     
            <Navbar.Collapse id="basic-navbar-nav">
              
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link": "navbar-link" } onClick={()=> onUpdateActiveLink("home")} >Home </Nav.Link>
                <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link": "navbar-link" } onClick={()=> onUpdateActiveLink("skills")}>Skills</Nav.Link>
                <Nav.Link href="#projects"  className={activeLink === "proyectos" ? "active navbar-link": "navbar-link"} onClick={()=> onUpdateActiveLink("projects")}>Projectos</Nav.Link>
              </Nav>
              <span className='navbar-text'>
                <div className='social-icon'>
                  <a href="https://www.linkedin.com/in/hern%C3%A1n-bellassai-20b7b88b/"><img src={nav1} alt=""/></a>
                  <a href="https://www.facebook.com/hbellassai"><img src={nav2} alt=""/></a>
                  <a href="https://www.instagram.com/hernanbellassai/"><img src={nav3} alt=""/></a>
                </div>
               <button  className='vvd' onClick={(e)=>handleClick(e)} > <span href="https://wa.me/+5491124718543" > Contactame </span> </button> 
              </span>
            </Navbar.Collapse>
          </Container>
    </Navbar>
  )
}

//how to create a functio

export default NavBar