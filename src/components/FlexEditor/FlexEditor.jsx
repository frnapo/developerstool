import { useState } from "react";
import "./flexeditor.css";
import FlexButtons from "./FlexButtons";
import GenericPreview from "../GenericPreview";
const FlexEditor = () => {
	const [flexStyle, setFlexStyle] = useState({
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "start",
		flexWrap: "wrap",
	});

	return (
		<div className="bg-custom-dark custom-rounded p-3 my-4 position-relative" id="flex-container" style={flexStyle}>
			<div id="box-flex">
				<div id="aurora"></div>
			</div>
			<div id="buttons-flex">
				<FlexButtons flexStyle={flexStyle} setFlexStyle={setFlexStyle} />
			</div>
			<div id="snippet-flex">
				<GenericPreview style={flexStyle} classType={"flex"} />
			</div>
		</div>
	);
};

export default FlexEditor;
