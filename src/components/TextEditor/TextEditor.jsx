import { useState } from "react";
import StyleEditor from "../StyleEditor";
import GenericPreview from "../GenericPreview";
import ToggleSwitch from "../ToggleSwitch";

const TextEditor = () => {
  const [lightMode, setLightMode] = useState(false);
  const initialTextStyle = {
    fontSize: "36px",
    fontWeight: "800",
    color: "#ffffff",
  };

  const [textStyle, setTextStyle] = useState(initialTextStyle);

  const resetTextStyle = () => {
    setTextStyle(initialTextStyle);
  };

  return (
    <div
      className={`${
        lightMode ? "bg-light" : "bg-custom-dark"
      } position-relative bg-custom-dark my-4 p-3 custom-rounded`}
    >
      <div style={{ position: "absolute", right: "83px", top: "22px", zIndex: 100 }}>
        <ToggleSwitch isOn={lightMode} handleToggle={() => setLightMode(!lightMode)} />
      </div>
      <StyleEditor
        label="Text"
        style={textStyle}
        onUpdate={setTextStyle}
        onReset={resetTextStyle}
        elementType="text"
        lightMode={lightMode}
      />
      <GenericPreview classType="Text" style={textStyle} />
    </div>
  );
};

export default TextEditor;
