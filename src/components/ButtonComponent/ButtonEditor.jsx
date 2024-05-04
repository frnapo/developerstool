import { useState } from "react";
import GenericPreview from "../GenericPreview";
import StyleEditor from "../StyleEditor";
import ToggleSwitch from "../ToggleSwitch";

const ButtonEditor = () => {
  const [lightMode, setLightMode] = useState(false);
  const initialButtonStyle = {
    fontSize: "16px",
    paddingBlock: "10px",
    paddingInline: "20px",
    borderRadius: "5px",
    backgroundColor: "#cd3232",
    color: "#ffffff",
  };

  const [buttonStyle, setButtonStyle] = useState(initialButtonStyle);

  const resetButtonStyle = () => {
    setButtonStyle(initialButtonStyle);
  };

  return (
    <div className={`${lightMode ? "bg-light" : "bg-custom-dark"} position-relative bg-custom-dark p-3 custom-rounded`}>
      <div style={{ position: "absolute", right: "83px", top: "22px", zIndex: 100 }}>
        <ToggleSwitch isOn={lightMode} handleToggle={() => setLightMode(!lightMode)} />
      </div>
      <StyleEditor
        label="Button"
        style={buttonStyle}
        onUpdate={setButtonStyle}
        elementType="button"
        onReset={resetButtonStyle}
        lightMode={lightMode}
      />
      <GenericPreview classType="Button" style={buttonStyle} />
    </div>
  );
};

export default ButtonEditor;
