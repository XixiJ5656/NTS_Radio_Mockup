import React from "react";
import Mbox from "./Mbox";

const NtsPicks = () => {
  return (
    <div>
      <h1>NTS PICKS</h1>
      <div className="mbox-row">
        <Mbox />
        <Mbox />
        <Mbox />
        <Mbox />
        <Mbox />
      </div>
      <div className="mbox-row">
        <Mbox />
        <Mbox />
        <Mbox />
        <Mbox />
        <Mbox />
      </div>
      <div className="mbox-row">
        <Mbox />
        <Mbox />
        <Mbox />
        <Mbox />
        <Mbox />
      </div>
    </div>
  );
};

export default NtsPicks;
