import React from "react";
import img1 from "../../../assets/images/bestTool/best_1.png";
import img2 from "../../../assets/images/bestTool/best_2.png";
import img3 from "../../../assets/images/bestTool/best_3.png";
import img4 from "../../../assets/images/bestTool/best_4.png";
import img5 from "../../../assets/images/bestTool/best_5.png";
import img6 from "../../../assets/images/bestTool/best_6.png";
import img7 from "../../../assets/images/bestTool/best_7.png";
import img8 from "../../../assets/images/bestTool/best_8.png";
import img9 from "../../../assets/images/bestTool/best_9.png";
import img10 from "../../../assets/images/bestTool/best_10.png";
import img11 from "../../../assets/images/bestTool/best_11.png";
import img12 from "../../../assets/images/bestTool/best_12.png";
import CustomSectionHeading from "../../../components/CustomSectionHeading";

export default function BrandsSection() {
  const ImageData = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  return (
    <div className="sectionSpacing">
      <CustomSectionHeading textAlign="center" title="The best tool for" />

      <div className="d-flex align-items-center flex-wrap w-100 gap-3">
        {ImageData.map((data) => (
          <span>
            <img src={data} alt="" />
          </span>
        ))}
      </div>
    </div>
  );
}
