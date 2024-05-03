import { useState } from "react";
import ButtonExample from "./ButtonExample";
import ButtonStyle from "./ButtonStyle";
import ButtonSnippet from "./ButtonSnippet";

const ButtonEditor = () => {
	const [buttonStyle, setButtonStyle] = useState({
		fontSize: "16px",
		paddingBlock: "10px",
		paddingInline: "20px",
		borderRadius: "5px",
		backgroundColor: "#cd3232",
		color: "#ffffff",
	});

	return (
		<>
			<div className="d-flex justify-content-around align-items-center">
				<ButtonExample buttonStyle={buttonStyle} />
				<ButtonStyle setButtonStyle={setButtonStyle} buttonStyle={buttonStyle} />
			</div>
			<div>
				<ButtonSnippet buttonStyle={buttonStyle} />
			</div>
		</>
	);
};

export default ButtonEditor;
