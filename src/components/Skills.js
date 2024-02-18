import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import skillBg from "../assets/img/light/134997058_732c0abf-1a08-4e6f-8461-cc1f3b15bd7d.jpg"
import meter from "../assets/img/light/meter.svg";
import TrackVisibility from "react-on-screen";
import mountainSvg from "../assets/img/light/mountains-svgrepo-com.svg";
import skillSvg from "../assets/img/light/skills-svgrepo-com.svg";
import amazonSvg from "../assets/img/light/amazon-color-svgrepo-com.svg";
import {Col, Row} from "react-bootstrap";
export const Skills = () => {
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <Row>
                            <Col size={6} md={3} xl={4}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                        <img src={amazonSvg} alt="Header Img"/>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                            <Col size={12} md={6} xl={8}>
                        <h2>Skills</h2>

                        <p>I have graduated from Motilal Nehru National Institute of Technology (MNNIT) Allahabad,
                            in 2023 where I completed my B.Tech degree in Electrical Engineering in 2023.
                            During my academic tenure, I developed a strong foundation in computer science and
                            honed my skills in various programming languages, including Python, Java, C/C++, and JavaScript.
                            I am also proficient in tech stacks such as React JS, Node JS, MySQL, MongoDB, AWS, Git, VS Code ,
                            Eclipse and core subjects such as data structures, algorithms, and operating systems.</p>


                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Data structures & Algorithms</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>C/C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                        </Carousel>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
        {/*<img className="background-image-left" src={skillBg} alt="Image" />*/}
    </section>
  )
}
