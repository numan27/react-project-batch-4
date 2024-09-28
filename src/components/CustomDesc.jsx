import React from "react";

const CustomDesc = ({ title, textColor = "#90909c" }) => {
  return (
    <div>
      <p style={{ color: textColor }} className="fs-6">
        {title}
      </p>
    </div>
  );
};

export default CustomDesc;
