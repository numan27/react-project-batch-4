import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomSectionHeading from "../../../components/CustomSectionHeading";
import CustomDesc from "../../../components/CustomDesc";
import icon from "../../../assets/images/feature_icon.png";
import icon2 from "../../../assets/images/feature_icon_2.png";
import icon3 from "../../../assets/images/feature_icon_3.png";

const CardsSection = () => {
  const cardData = [
    {
      icon: icon,
      title: "Full Stories",
      desc: "Interesting and complex, with a good development and ending",
    },
    {
      icon: icon2,
      title: "Posting",
      desc: "Interesting and complex, with a good development and ending",
    },
    {
      icon: icon3,
      title: "Feedback",
      desc: "Interesting and complex, with a good development and ending",
    },
  ];

  return (
    <div className="sectionSpacing">
      <Row className="d-flex align-items-center justify-content-between">
        <Col md={4} className="pe-5">
          <CustomSectionHeading title="Quality Content In just One click" />
        </Col>
        <Col md={5} className="pe-5">
          <CustomDesc title="Wether you need it urgently or just don't like to wait, our AI takes just seconds to deliver a complete work, no more waiting in commission queue." />
        </Col>
      </Row>

      <div className="cardWrapper mt-4">
        {cardData.map((data) => (
          <div className="cardItem rounded-3 px-4 pt-4 pb-3">
            <span className="iconContainer d-flex align-items-center justify-content-center mb-3">
              <img src={data.icon} alt="icon" />
            </span>
            <CustomSectionHeading isSmallHeading title={data.title} />
            <span className="pt-2">
              <CustomDesc title={data.desc} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
