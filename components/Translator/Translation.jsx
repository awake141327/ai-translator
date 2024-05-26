import React from "react";

export default function Translation({ outputValue }) {
  return (
    <div className="translator-input-container">
      <p className="translator-heading">Your Translation 👇</p>
      <textarea
        className="translator-input"
        value={outputValue ? outputValue : "Translating..."}
        type="text"
        rows="5"
        disabled
      />
    </div>
  );
}
