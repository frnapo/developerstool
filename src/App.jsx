import { useState } from "react";
import ContextMenu from "./components/ContextMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";
import StyleEditor from "./components/StyleEditor";
import GenericPreview from "./components/GenericPreview";
import KeyboardEventHandler from "./components/KeyboardEventHandler";
import ButtonEditor from "./components/Button/ButtonEditor";

function App() {
	const [textStyle, setTextStyle] = useState({
		color: "#ffffff",
		fontSize: "20px",
	});

	return (
		<div className="container mt-3">
			<KeyboardEventHandler />
			<div className="bg-custom-dark p-3 rounded-2">
				<ButtonEditor />
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
