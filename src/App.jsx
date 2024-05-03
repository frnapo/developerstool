import ContextMenu from "./components/ContextMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";
import KeyboardEventHandler from "./components/KeyboardEventHandler";
import ButtonEditor from "./components/ButtonComponent/ButtonEditor";
import TextEditor from "./components/TextEditor/TextEditor";
import ImageEditor from "./components/ImageEditor.jsx/ImageEditor";

function App() {
	return (
		<>
			<KeyboardEventHandler />
			<ContextMenu />
			<div className="container mt-3">
				<ButtonEditor />
				<TextEditor />
				<ImageEditor />
			</div>
		</>
	);
}

export default App;
