import React from "react";
import worldmap from "../assets/worldmap.png";
import parrot from "../assets/parrot.png";

export default function Header() {
  return (
    <div className="header">
      <div>
        <img className="img-worldmap" src={worldmap} />
      </div>
      <div className="header-logo">
        <div>
          <img className="img-parrot" src={parrot} />
        </div>
        <div>
          <h1 className="header-heading">PollyGlot</h1>
          <p className="header-sub-heading">Perfect Translation Every Time</p>
        </div>
      </div>
    </div>
  );
}
