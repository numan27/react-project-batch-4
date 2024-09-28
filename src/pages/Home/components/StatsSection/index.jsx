import React from "react";
import CustomSectionHeading from "../../../../components/CustomSectionHeading";
import CustomDesc from "../../../../components/CustomDesc";
import { Col, Container, Row } from "react-bootstrap";
import GradientBox from "./GradientBox";

const StatsSection = () => {
  const statsData = [
    { title: "20+", desc: "AI and Machine Learning Patterns" },
    { title: "76+", desc: "Users approve and use regularly AI writing" },
    { title: ">96%", desc: "Proven accuracy" },
    { title: "67", desc: "Industry leading eNPS score" },
  ];

  return (
    <div className="statsSection py-5">
      <Container className="py-5">
        <Row className="d-flex justify-content-between">
          <Col md={5}>
            <CustomSectionHeading title="Fantasy Stories and Anime Post Specialized Al" />
          </Col>
          <Col md={5}>
            <CustomDesc title="Our artificial intelligence can complete, start continue or make from scratch a good anime and fantasy story, a reddit post or an answer to conversations." />
          </Col>
        </Row>

        <Row className="my-5 mb-5">
          {statsData.map((items) => (
            <Col md={3} className="shadow">
              <h1 className="stats-heading  mb-4">{items.title}</h1>
              <CustomDesc title={items.desc} />
            </Col>
          ))}
        </Row>
        <div className="pt-5">
          <div>
            <GradientBox />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StatsSection;
