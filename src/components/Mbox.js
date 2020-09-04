import React from "react";

function Mbox(props) {
  const { image, title } = props;
  return (
    <div className="mbox">
      <img src={image} alt="" />
      <h2>{title}</h2>
    </div>
  );
}

export default Mbox;
