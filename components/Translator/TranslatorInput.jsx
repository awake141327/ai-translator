import React from "react";

export default function TranslatorInput({
  inputValue,
  setInputValue,
  isClicked,
}) {
  return (
    <div className="translator-input-container">
      <p className="translator-heading">Text to Translate 👇</p>
      <textarea
        className="translator-input"
        type="text"
        placeholder="How are you?"
        rows="5"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
        disabled={isClicked}
      />
    </div>
  );
}
