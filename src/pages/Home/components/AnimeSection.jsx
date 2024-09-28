import React from "react";
import CustomSectionHeading from "../../../components/CustomSectionHeading";
import CustomDesc from "../../../components/CustomDesc";
import { Col, Row } from "react-bootstrap";
import img from "../../../assets/images/animate-img.png";
import { FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";

const AnimeSection = () => {
  const listData = [
    { title: "Powered by GPT-3 from OpenAI" },
    { title: "Different genres and tones" },
    { title: "To publsih on networks or use them in your campaigns" },
  ];

  return (
    <div className="sectionSpacing pt-5">
      <Row>
        <Col md={6} className="pe-4">
          <img className="w-100" src={img} alt="" />
        </Col>
        <Col
          md={6}
          className="ps-4 d-flex flex-column justify-content-between py-5"
        >
          <CustomSectionHeading title="Animate Text in ablink Automatic and Immediate" />
          <div>
            <CustomDesc title="The technology our AI assure a great writing, without waiting, without creative block, instant content only" />
          </div>

          <div>
            {listData.map((items) => (
              <div className="d-flex gap-2 mb-2">
                <FaCircleCheck size={23} color="#31A6F4" />
                <h6 className="fw-bold">{items.title}</h6>
              </div>
            ))}
          </div>

          <div className="d-flex align-items-center gap-1">
            <h6>Read More</h6>
            <FaArrowRightLong />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AnimeSection;
