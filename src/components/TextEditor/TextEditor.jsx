import { useState } from "react";
import StyleEditor from "../StyleEditor";
import GenericPreview from "../GenericPreview";

const TextEditor = () => {
	const [textStyle, setTextStyle] = useState({
		color: "#ffffff",
		fontSize: "20px",
	});
	return (
		<div className="bg-custom-dark p-3 rounded-2 my-4">
			<StyleEditor label="Text" style={textStyle} onUpdate={setTextStyle} elementType="text" />
			<GenericPreview classType="Text" style={textStyle} />
		</div>
	);
};

export default TextEditor;
