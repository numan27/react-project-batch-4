import React from "react";
import IMAGES from "../../../assets/images";
import CustomSectionHeading from "../../../components/CustomSectionHeading";

export default function BrandsSection() {
  const ImageData = [
    IMAGES.img1,
    IMAGES.img2,
    IMAGES.img3,
    IMAGES.img4,
    IMAGES.img5,
    IMAGES.img6,
    IMAGES.img7,
    IMAGES.img8,
    IMAGES.img9,
    IMAGES.img10,
    IMAGES.img11,
    IMAGES.img12,
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
