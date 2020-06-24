import React from "react";

export default ({ title, subtitle }) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </div>
  );
};
