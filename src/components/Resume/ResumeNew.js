import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import pdf from "../../Assets/CV_Serafin_Dericks_EN.pdf";
import pdf2 from "../../Assets/CV_Serafin_Dericks_ES.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useSelector } from "react-redux";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/chicha099/Portfolio/main/src/Assets/CV_Serafin_Dericks_EN.pdf";

const resumeLink2 =
  "https://raw.githubusercontent.com/chicha099/Portfolio/main/src/Assets/CV_Serafin_Dericks_ES.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const len = useSelector(state => state.len);

  return (
    len === "ES" ?
      <div>
        <Container fluid className="resume-section">
          
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf2} target="_blank">
              <AiOutlineDownload />
              &nbsp;Descargar CV
            </Button>
          </Row>

          <Row className="resume">
            <Document file={resumeLink2}>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>

          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf2} target="_blank">
              <AiOutlineDownload />
              &nbsp;Descargar CV
            </Button>
          </Row>
        </Container>
      </div>
      :
      <div>
        <Container fluid className="resume-section">
          
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>

          <Row className="resume">
            <Document file={resumeLink}>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>

          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Container>
      </div>
  );
}

export default ResumeNew;
