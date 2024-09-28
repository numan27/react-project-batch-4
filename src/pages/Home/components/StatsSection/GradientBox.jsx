import React from "react";
import CustomSectionHeading from "../../../../components/CustomSectionHeading";
import CustomDesc from "../../../../components/CustomDesc";

export default function GradientBox() {
  return (
    <div className="gradient-box px-5 py-5">
      <div className="d-flex align-items-center justify-content-between gap-5 py-4">
        <CustomSectionHeading
          textColor="#fff"
          title="Within the reach of any anime fan Easy to use and effective"
        />
        <CustomDesc
          textColor="white"
          title="Our Al will enhance the quality of your fan fiction or your post, it can create an interesting backstory or it can even advise you on how to continue with your text or conversation"
        />
      </div>
    </div>
  );
}
