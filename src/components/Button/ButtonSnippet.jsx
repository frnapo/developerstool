import propTypes from "prop-types";

const ButtonSnippet = ({ buttonStyle }) => {
	// Button style object
	const formatCSS = () => {
		return Object.entries(buttonStyle)
			.map(([key, value]) => {
				const cssKey = key.replace(/([A-Z])/g, "-$1").toLowerCase(); // Convert camelCase to kebab-case
				return `  ${cssKey}: ${value};`;
			})
			.join("\n");
	};

	// Function to copy CSS to clipboard
	const copyCodeToClipboard = () => {
		const cssCode = `.my-button {\n${formatCSS()}\n}`;
		navigator.clipboard.writeText(cssCode).then(
			() => {
				alert("CSS code copied to clipboard!");
			},
			(err) => {
				console.error("Failed to copy text: ", err);
			}
		);
	};

	return (
		<div>
			<pre className="language-css p-3 pt-1" style={{ color: "#333" }}>
				<div className="code-header" style={{ marginBottom: "10px" }}>
					<div>
						<span className="dot" style={{ backgroundColor: "#ff605c" }}></span>
						<span className="dot" style={{ backgroundColor: "#ffbd44" }}></span>
						<span className="dot" style={{ backgroundColor: "#00ca4e" }}></span>
					</div>
					<div
						className="copy-code"
						onClick={copyCodeToClipboard}
						style={{ cursor: "pointer", color: "#007bff" }}
					>
						Copy code
					</div>
				</div>
				<code>
					<span style={{ color: "red" }}>.my-button</span> {"{\n"}
					<span
						dangerouslySetInnerHTML={{
							__html: formatCSS()
								.split("\n")
								.map(
									(line) =>
										`<span style="color: purple;">${
											line.split(": ")[0]
										}</span>: <span style="color: blue;">${line.split(": ")[1]}</span>\n`
								)
								.join(""),
						}}
					/>
					{"}"}
				</code>
			</pre>
		</div>
	);
};

ButtonSnippet.propTypes = {
	buttonStyle: propTypes.object.isRequired,
};
export default ButtonSnippet;
