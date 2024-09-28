import React from "react";

const CustomSectionHeading = ({
  title,
  isSmallHeading,
  textAlign = "left",
}) => {
  return (
    <div style={{ textAlign: textAlign }} className="sectionHeading">
      {isSmallHeading ? (
        <h4 className="fw-bold">{title}</h4>
      ) : (
        <h2 className="fw-bold">{title}</h2>
      )}
    </div>
  );
};

export default CustomSectionHeading;
