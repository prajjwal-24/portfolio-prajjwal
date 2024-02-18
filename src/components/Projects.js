import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import resume from '../assets/resume/Prajjwal_Sharma_NAB_Resume.pdf'
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/Screenshot 2024-02-18 at 1.11.37 PM.png";
import projImg3 from "../assets/img/light/img3.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Coterie",
      description: "A social media gaming platform",
      imgUrl: "https://user-images.githubusercontent.com/59313731/142761048-6bd1f83c-8144-4646-b350-b8ddb8214872.jpeg",
      clickUrl: "https://github.com/prajjwal-24/coterie?tab=readme-ov-file",
    },
    {
      title: "Licious",
      description: "Clone of Licious website",
      imgUrl: projImg2,
      clickUrl: "https://www.youtube.com/watch?v=t7tJZ-9d8zo",
    },
    {
      title: "NeuroBee",
      description: "A mental health chatbot",
      imgUrl: projImg3,
      clickUrl: "https://github.com/shristify/NeuroBee/tree/master",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In addition to my academic achievements,
                  I have gained valuable industry experience through internships with renowned organizations.
                  I completed a software development engineer internship with Amazon India,
                  where I had the opportunity to work on a lambda function implementation for streamlining deliveries.
                  I also interned with Valorant Consultancy,
                  where I revamped the frontend UI of a B2B SaaS product
                  and developed REST APIs to enhance efficiency.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <div class="container">
                        <embed src={resume} type="application/pdf" width="100%" height="600px"/>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>My internships have provided me with hands-on experience in building scalable applications
                        , collaborating with cross-functional teams, and delivering high-quality code.
                        I am well-versed in agile methodologies and possess strong problem-solving
                        and analytical skills.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
