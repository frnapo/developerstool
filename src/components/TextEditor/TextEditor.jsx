import { useState } from "react";
import StyleEditor from "../StyleEditor";
import GenericPreview from "../GenericPreview";

const TextEditor = () => {
  const [textStyle, setTextStyle] = useState({
    fontSize: "36px",
    fontWeight: "800",
    color: "#ffffff",
  });
  return (
    <div className="bg-custom-dark p-3 custom-rounded my-4">
      <StyleEditor label="Text" style={textStyle} onUpdate={setTextStyle} elementType="text" />
      <GenericPreview classType="Text" style={textStyle} />
    </div>
  );
};

export default TextEditor;
