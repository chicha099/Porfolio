import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useSelector } from "react-redux";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const len = useSelector(state => state.len);

  return (
    len === "ES" ?
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Diseñado y desarrollado por Serafin Dericks</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} SB</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/chicha099"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
              <a
                href="https://twitter.com/chicha099"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/serafín-dericks/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/serafin_dericks/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      :
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Serafin Dericks</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} SB</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/chicha099"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
              <a
                href="https://twitter.com/chicha099"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/serafín-dericks/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/serafin_dericks/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;
