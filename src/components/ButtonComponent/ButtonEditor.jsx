import { useState } from "react";
import GenericPreview from "../GenericPreview";
import StyleEditor from "../StyleEditor";

const ButtonEditor = () => {
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
    <div className="bg-custom-dark p-3 custom-rounded">
      <StyleEditor
        label="Button"
        style={buttonStyle}
        onUpdate={setButtonStyle}
        elementType="button"
        onReset={resetButtonStyle}
      />
      <GenericPreview classType="Button" style={buttonStyle} />
    </div>
  );
};

export default ButtonEditor;
