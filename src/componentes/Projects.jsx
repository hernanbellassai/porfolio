import React from 'react'
import { Container,Col,Row,Tab,} from 'react-bootstrap'
import ProImg1 from "../assets/img/project-img1.png";
import Nav from "react-bootstrap/Nav";
import ProjectsCard from './ProjectsCard.jsx';
import colorSharp from "../assets/img/color-sharp2.png"
import proImg1 from "../assets/img/find.jpg";


function Projects() {
    
  
  const projects = [ 
      {
        title : "Find Your Teacher",  
        description : "Desing && Development",
        imgUrl : proImg1, 
      } ,

      {
        title : "pokemon",  
        description : "Desing && Development",
        imgUrl : proImg1, 
      } ,
      {
        title : "games",  
        description : "Desing && Development",
        imgUrl : proImg1, 
      } ,

    ] 


  
  
  
  return (
   <section className='project' id="project">
    <Container>
     <Row>
      <Col>
            
        <h2>Proyectos</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquam laborum voluptatum earum ipsa delectus autem mollitia itaque soluta nam. Autem, dolores vero! Voluptate vel veritatis, delectus sint nostrum nihil?</p>
        

        <Tab.Container id="projects-tabs" defaultActiveKey="first">

        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
          <Nav.Item>
            <Nav.Link eventKey="first">Mis Proyectos</Nav.Link>
          </Nav.Item>

          <Nav.Item>
             <Nav.Link eventKey="second">Sobre mi</Nav.Link>
          </Nav.Item> 

          <Nav.Item>
            <Nav.Link eventKey="third">Siguientes proyectos</Nav.Link>
          </Nav.Item>

        </Nav>

          
             <Tab.Content>

              <Tab.Pane eventKey="first">
                   <Row>
                     {
                      projects.map((project, index)=>{
                          return(
                            <ProjectsCard key={index} {...project} />
                          )
                          // aca le estoy pasando todo el objeto mapeado                
                      }  )
                     }
                    </Row> 
              </Tab.Pane>

               <Tab.Pane eventKey="second">Loren Insum</Tab.Pane>
  
               <Tab.Pane eventKey="third">Loren Insum</Tab.Pane>
             </Tab.Content>

        </Tab.Container>
      </Col>
     </Row>
    </Container>
    
    <img className="background-image-right" src={colorSharp} /> 

   </section>
  )
}

export default Projects