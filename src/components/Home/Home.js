import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

import Home2 from "./Home2";
import Type from "./Type";
import { useSelector } from "react-redux";

function Home() {
  const len = useSelector(state => state.len);
  return (
    len === "ES" ?
      <section>
        <Container fluid className="home-section" id="home">
          
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hola! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                </h1>

                <h1 className="heading-name">
                  Soy
                  <strong className="main-name"> SERAFIN DERICKS</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img src={homeLogo} alt="home pic" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
      </section>
      :
      <section>
        <Container fluid className="home-section" id="home">
          
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> SERAFIN DERICKS</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img src={homeLogo} alt="home pic" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
      </section>
  );
}

export default Home;
