import { useState, useEffect } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const JsHelper = () => {
	const [code, setCode] = useState('// Write your JavaScript code here\nconsole.log("Hello, world!");');
	const [output, setOutput] = useState("");

	useEffect(() => {
		const originalConsoleLog = console.log;
		console.log = (...args) => {
			setOutput((currentOutput) => currentOutput + "\n" + args.map(String).join(" "));
			originalConsoleLog(...args);
		};

		return () => {
			console.log = originalConsoleLog; // Restore original console.log on cleanup
		};
	}, []);

	const runCode = () => {
		setOutput(""); // Clear previous output
		try {
			eval(code);
		} catch (error) {
			setOutput(`Error: ${error.message}`);
		}
	};

	return (
		<div className="bg-custom-dark p-3 my-3 rounded-5 text-white">
			<h2>JavaScript Editor</h2>
			<AceEditor
				mode="javascript"
				theme="monokai"
				onChange={setCode}
				name="js_editor"
				value={code}
				height="200px"
				width="100%"
				wrapEnabled={true} // Ensure text wraps in the editor
				enableBasicAutocompletion={true}
				enableLiveAutocompletion={true}
				enableSnippets={true}
			/>
			<button className="btn btn-light mt-3" onClick={runCode}>
				Run Code
			</button>
			<div className="mt-3">
				<pre>{output}</pre>
			</div>
		</div>
	);
};

export default JsHelper;
