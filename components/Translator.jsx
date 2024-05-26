import React from "react";
import TranslatorInput from "./Translator/TranslatorInput";
import Language from "./Translator/Language";
import Translation from "./Translator/Translation";

export default function Translator() {
  const [inputValue, setInputValue] = React.useState("");
  const [radioValue, setRadioValue] = React.useState("french");
  const [isClicked, setIsClicked] = React.useState(false);
  const [outputValue, setOutputValue] = React.useState("");

  const messages = [
    {
      role: "system",
      content: `You are a professional translator. You will be provided with a sentence in English, and your task is to translate it into ${radioValue}.
      You are only allowed to return the translated text and nothing else.
      Rewrite the translated text in English Language.
      IMPORTANT: ONLY RETURN TRANSLATED TEXT AND NOTHING ELSE.`,
    },
    {
      role: "user",
      content: `${inputValue}`,
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    setIsClicked((prev) => !prev);

    if (!isClicked) {
      const url = "https://pollyglot.amaansiddiqui14.workers.dev";
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messages),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(`Worker Error: ${data.error}`);
        }

        setOutputValue(data.content);
      } catch (e) {
        setOutputValue(
          "Cannot translate at this moment. Please refresh or try again later."
        );
      }
    } else {
      setInputValue("");
      setOutputValue("");
      setRadioValue("french");
    }
  }

  return (
    <div className="translator">
      <form onSubmit={handleSubmit}>
        <TranslatorInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          isClicked={isClicked}
        />
        {isClicked ? (
          <Translation outputValue={outputValue} />
        ) : (
          <Language radioValue={radioValue} setRadioValue={setRadioValue} />
        )}
        <button className="translate-button">
          {isClicked ? "Start Over" : "Translate"}
        </button>
      </form>
    </div>
  );
}
