import { useState } from "react";
import ContextMenu from "./components/ContextMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";
import StyleEditor from "./components/StyleEditor";
import GenericPreview from "./components/GenericPreview";
import KeyboardEventHandler from "./components/KeyboardEventHandler";

function App() {
	const [buttonStyle, setButtonStyle] = useState({
		fontSize: "16px",
		paddingBlock: "10px",
		paddingInline: "20px",
		borderRadius: "5px",
		backgroundColor: "#cd3232",
		color: "#ffffff",
	});
	const [textStyle, setTextStyle] = useState({
		color: "#ffffff",
		fontSize: "20px",
	});

	return (
		<div className="container mt-3">
			<KeyboardEventHandler />
			<div className="bg-custom-dark p-3 rounded-2">
				<StyleEditor label="Button" style={buttonStyle} onUpdate={setButtonStyle} elementType="button" />
				<GenericPreview classType="Button" style={buttonStyle} />
			</div>
			<div className="bg-custom-dark p-3 rounded-2 my-4">
				<StyleEditor label="Text" style={textStyle} onUpdate={setTextStyle} elementType="text" />
				<GenericPreview classType="Text" style={textStyle} />
			</div>
			<ContextMenu />
		</div>
	);
}

export default App;
