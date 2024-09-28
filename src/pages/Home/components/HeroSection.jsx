import React from "react";
import Header from "../../../components/Header";
import { Button, Col, Container, Row } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <Header />
      <Container className="heroContent text-white py-5">
        <Row>
          <Col md={8}>
            <h1>Fast and Automatic Anime and Fantasy Writing</h1>
            <p className="my-4">
              Texts written by artificial intelligence <br /> Immediate, easy
              and with amazing results
            </p>

            <div className="d-flex align-items-center gap-3">
              <Button className="primaryBg border-0 text-uppercase px-3 py-2">
                free trial
              </Button>
              <Button className="border-0 text-uppercase px-3 py-2">
                sign up with google
              </Button>
            </div>
          </Col>

          <Col md={4}>Right Side content</Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
