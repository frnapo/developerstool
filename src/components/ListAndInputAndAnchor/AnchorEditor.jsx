import { useState } from "react";
import GenericPreview from "../GenericPreview";

const AnchorEditor = () => {
	const [anchorStyle, setAnchorStyle] = useState({
		color: "#00ffff",
		textDecoration: "underline",
		fontSize: "16px",
		fontWeight: "normal",
	});
	return (
		<div className="bg-custom-dark custom-rounded p-3">
			<div className="row g-3">
				<div className="col-6 d-flex justify-content-center align-items-center py-3">
					<a style={anchorStyle} href="#" target="_blank">
						Link Text
					</a>
				</div>
				<div className="col-6 d-flex flex-column align-items-start">
					<div className="my-3 d-flex align-items-center">
						<label htmlFor="anchorColor">Color</label>
						<input
							type="color"
							id="anchorColor"
							className="color-input ms-2"
							value={anchorStyle.color}
							onChange={(e) => setAnchorStyle({ ...anchorStyle, color: e.target.value })}
						/>
					</div>
					<div className="my-3">
						<label htmlFor="anchorTextDecoration">Text Decoration</label>
						<select
							id="anchorTextDecoration"
							className="drop-input"
							value={anchorStyle.textDecoration}
							onChange={(e) => setAnchorStyle({ ...anchorStyle, textDecoration: e.target.value })}
						>
							<option value="">None</option>
							<option value="underline">Underline</option>
							<option value="overline">Overline</option>
							<option value="line-through">Line Through</option>
							<option value="none">None</option>
						</select>
					</div>
					<div className="my-3">
						<div className="d-flex align-items-center">
							<label htmlFor="anchorFontSize">Font Size</label>
							<input
								type="text"
								id="anchorFontSize"
								className="text-input"
								value={anchorStyle.fontSize}
								onChange={(e) => setAnchorStyle({ ...anchorStyle, fontSize: e.target.value })}
							/>
						</div>
						<input
							type="range"
							min="10"
							max="50"
							className="range-slider"
							value={anchorStyle.fontSize.replace("px", "")}
							onChange={(e) => setAnchorStyle({ ...anchorStyle, fontSize: `${e.target.value}px` })}
						/>
					</div>
					<div className="my-3">
						<label htmlFor="anchorFontWeight">Font Weight</label>
						<select
							id="anchorFontWeight"
							className="drop-input"
							value={anchorStyle.fontWeight}
							onChange={(e) => setAnchorStyle({ ...anchorStyle, fontWeight: e.target.value })}
						>
							<option value="normal">Normal</option>
							<option value="bold">Bold</option>
							<option value="bolder">Bolder</option>
							<option value="lighter">Lighter</option>
						</select>
					</div>
				</div>
			</div>
			<GenericPreview style={anchorStyle} classType="Anchor" />
		</div>
	);
};

export default AnchorEditor;
