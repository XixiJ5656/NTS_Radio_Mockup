import React from "react";
import "../App.css";

function Bbox(props) {
  const { image, title, type, description } = props;
  return (
    <div className="bbox">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h5>{type}</h5>
      <p>{description}</p>
    </div>
  );
}

export default Bbox;
