import { useState } from "react";

const LayoutEditor = () => {
	const [Color, setColor] = useState({
		color: "#000000",
		primaryColor: "#000000",
		secondaryColor: "#000000",
		tertiaryColor: "#000000",
	});
	return (
		<div className="bg-custom-dark my-4 p-3 rounded-5">
			<h1>Layout</h1>
		</div>
	);
};

export default LayoutEditor;
