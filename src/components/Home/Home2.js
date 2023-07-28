import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import yop from "../../Assets/tasin.png";
import Tilt from "react-parallax-tilt";
import { useSelector } from "react-redux";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const len = useSelector(state => state.len);
  return (
    len === "ES" ?
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                ME <span className="purple"> PRESENTO </span> BREVEMENTE
              </h1>
              <p className="home-about-body">
                Como desarrollador Full-Stack experimentado, me entusiasma enfrentar proyectos diversos y desafiantes que ponen a prueba mis capacidades analíticas y tecnológicas. Siento una pasión por expandir continuamente mis habilidades y ofrecer soluciones innovadoras a problemas complejos. Con un historial comprobado de abordar con éxito diversos proyectos, siempre estoy ansioso por asumir nuevos desafíos y aportar mi amplia experiencia para lograr resultados excepcionales.
                <br />
                <br />Como desarrollador experimentado, tengo fluidez en <i>
                  <b className="purple"> Javascript </b>
                </i> y he adquirido una valiosa experiencia en TypeScript y PHP. Mi experiencia abarca el desarrollo de front-end, back-end y aplicaciones full-stack, lo que me permite ofrecer soluciones de alta calidad para una amplia gama de proyectos. Continuamente aprendiendo y creciendo, me comprometo a mantenerme actualizado con las últimas tecnologías para sobresalir en mi campo como desarrollador.

                <br />
                <br />
                Mi principal area de interes está en desarrollar nuevas&nbsp;
                <i>
                  <b className="purple">Aplicaciones Web Y Productos </b> y tambien contribuir en {" "}
                  <b className="purple">
                    proyectos Open Source (De codigo abierto).
                  </b>
                </i>
                <br />
                <br />
                Siempre que puedo uso mi pasion y creatividad para desarrollar nuevos productos usando <b className="purple">Node.js</b> y
                <i>
                  <b className="purple">
                    {" "}
                    Librerias y Frameworks Modernos De Javascript
                  </b>
                </i>
                &nbsp; como
                <i>
                  <b className="purple"> React.js y Redux</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={yop} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>ENCONTRAME EN</h1>
              <p>
                Sientete libre de <span className="purple">conectarte </span>conmigo
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/chicha099"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/serafin-dericks/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/serafin_dericks/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      :
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                As an experienced Full-Stack developer, I thrive on embracing diverse and challenging projects that push the boundaries of my analytical and technological expertise. I am passionate about continuously expanding my skills and delivering innovative solutions to complex problems. With a proven track record of successfully tackling various projects, I am always eager to take on new challenges and contribute my wealth of experience to achieve exceptional results.
                <br />
                <br />As a seasoned developer, I am fluent in <i>
                  <b className="purple"> Javascript </b>
                </i> and have gained valuable experience in TypeScript and PHP. My expertise spans front-end, back-end, and full-stack development, allowing me to deliver high-quality solutions for a wide range of projects. Continuously learning and growing, I am committed to staying up-to-date with the latest technologies to excel in my craft.

                <br />
                <br />
                My primary interests lie in building new <i><b className="purple">Web Applications and Products</b></i> and contributing to <i><b className="purple">Open Source Projects</b></i>.
                <br />
                <br />
                Whenever possible, I apply my passion for developing products
                with <b className="purple">Node.js</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js and Redux</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={yop} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/chicha099"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/serafin-dericks/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/serafin_dericks/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}
export default Home2;
