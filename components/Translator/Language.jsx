import React from "react";
import france from "../../assets/fr-flag.png";
import spain from "../../assets/sp-flag.png";
import japan from "../../assets/jpn-flag.png";
import india from "../../assets/ind-flag.png";

export default function Language({ radioValue, setRadioValue }) {
  function onOptionChange(e) {
    setRadioValue(e.target.value);
  }

  return (
    <div className="language-container">
      <p className="language-heading">Select Language 👇</p>
      <div className="languages">
        <div className="each-language-container">
          <input
            onChange={onOptionChange}
            className="language-radio"
            type="radio"
            id="french"
            name="language"
            value="french"
            checked={radioValue === "french"}
            required
          />
          <label className="language-label" htmlFor="french">
            French
          </label>
          <img className="language-flag" src={france} />
        </div>
        <div className="each-language-container">
          <input
            onChange={onOptionChange}
            className="language-radio"
            type="radio"
            id="spanish"
            name="language"
            value="spanish"
            checked={radioValue === "spanish"}
          />
          <label className="language-label" htmlFor="spanish">
            Spanish
          </label>
          <img className="language-flag" src={spain} />
        </div>
        <div className="each-language-container">
          <input
            onChange={onOptionChange}
            className="language-radio"
            type="radio"
            id="japanese"
            name="language"
            value="japanese"
            checked={radioValue === "japanese"}
          />
          <label className="language-label" htmlFor="japanese">
            Japanese
          </label>
          <img className="language-flag" src={japan} />
        </div>
        <div className="each-language-container">
          <input
            onChange={onOptionChange}
            className="language-radio"
            type="radio"
            id="hindi"
            name="language"
            value="hindi"
            checked={radioValue === "hindi"}
          />
          <label className="language-label" htmlFor="hindi">
            Hindi
          </label>
          <img className="language-flag" src={india} width="30px" height="21px"/>
        </div>
      </div>
    </div>
  );
}
