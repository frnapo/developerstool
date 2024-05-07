import { useState } from "react";
import GenericPreview from "../GenericPreview";

const InputEditor = () => {
	const [inputSettings, setInputSettings] = useState({
		type: "text",
		placeholder: "Write something...",
	});

	const [inputStyle, setInputStyle] = useState({
		borderWidth: "2px",
		borderStyle: "solid",
		borderColor: "#f00000",
		borderRadius: "5px",
		padding: "5px",
		backgroundColor: "#ffffff",
		color: "#000000",
		fontSize: "16px",
	});

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<div id="input" className="bg-custom-dark custom-rounded p-3 my-4">
			<div className="row g-3">
				<div className="col-12 col-lg-6 d-flex justify-content-center align-items-center py-3 overflow-hidden">
					<input style={inputStyle} type={inputSettings.type} placeholder={inputSettings.placeholder} />
				</div>
				<div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start">
					<div className="my-3">
						<label htmlFor="inputType">Type</label>
						<select
							id="inputType"
							className="drop-input"
							value={inputSettings.type}
							onChange={(e) => setInputSettings({ ...inputSettings, type: e.target.value })}
						>
							<option value="text">Text</option>
							<option value="password">Password</option>
							<option value="email">Email</option>
							<option value="number">Number</option>
							<option value="date">Date</option>
							<option value="time">Time</option>
							<option value="search">Search</option>
							<option value="tel">Tel</option>
							<option value="url">URL</option>
						</select>
					</div>
					<div className="my-3">
						<label htmlFor="inputPlaceholder">Placeholder</label>
						<input
							type="text"
							id="inputPlaceholder"
							className="text-input"
							value={inputSettings.placeholder}
							onChange={(e) => setInputSettings({ ...inputSettings, placeholder: e.target.value })}
						/>
					</div>
					<div className="my-3">
						<div className="d-flex align-items-center">
							<label htmlFor="inputBorderWidth">Border Width</label>
							<input
								type="text"
								className="text-input"
								value={inputStyle.borderWidth}
								onChange={(e) => setInputStyle({ ...inputStyle, borderWidth: e.target.value })}
							/>
						</div>
						<input
							type="range"
							id="inputBorderWidth"
							className="range-slider"
							min="0"
							max="20"
							value={inputStyle.borderWidth.replace("px", "")}
							onChange={(e) => setInputStyle({ ...inputStyle, borderWidth: `${e.target.value}px` })}
						/>
					</div>
					<div className="my-3">
						<label htmlFor="inputBorderStyle">Border Style</label>
						<select
							id="inputBorderStyle"
							className="drop-input"
							value={inputStyle.borderStyle}
							onChange={(e) => setInputStyle({ ...inputStyle, borderStyle: e.target.value })}
						>
							<option value="none">None</option>
							<option value="hidden">Hidden</option>
							<option value="solid">Solid</option>
							<option value="dotted">Dotted</option>
							<option value="dashed">Dashed</option>
							<option value="double">Double</option>
							<option value="groove">Groove</option>
							<option value="ridge">Ridge</option>
							<option value="inset">Inset</option>
							<option value="outset">Outset</option>
						</select>
					</div>
					<div className="my-3 d-flex align-items-center">
						<label htmlFor="inputBorder">Border color</label>
						<input
							type="color"
							id="inputBorder"
							className="color-input"
							value={inputStyle.borderColor}
							onChange={(e) => setInputStyle({ ...inputStyle, borderColor: e.target.value })}
						/>
					</div>
					<div className="my-3">
						<div className="d-flex align-items-center">
							<label htmlFor="inputBorderRadius" className="me-2">
								Border Radius
							</label>
							<input
								type="text"
								className="text-input"
								value={inputStyle.borderRadius}
								onChange={(e) => setInputStyle({ ...inputStyle, borderRadius: e.target.value })}
							/>
						</div>
						<input
							type="range"
							id="inputBorderRadius"
							className="range-slider"
							min="0"
							max="50"
							value={inputStyle.borderRadius.replace("px", "")}
							onChange={(e) => setInputStyle({ ...inputStyle, borderRadius: `${e.target.value}px` })}
						/>
					</div>
					<div className="my-3">
						<div className="d-flex align-items-center">
							<label htmlFor="inputPadding">Padding</label>
							<input
								type="text"
								className="text-input"
								value={inputStyle.padding}
								onChange={(e) => setInputStyle({ ...inputStyle, padding: e.target.value })}
							/>
						</div>
						<input
							type="range"
							id="inputPadding"
							className="range-slider"
							min="0"
							max="50"
							value={inputStyle.padding.replace("px", "")}
							onChange={(e) => setInputStyle({ ...inputStyle, padding: `${e.target.value}px` })}
						/>
					</div>
					<div className="my-3 d-flex align-items-center">
						<label htmlFor="inputBackgroundColor">Background Color</label>
						<input
							type="color"
							className="color-input"
							id="inputBackgroundColor"
							value={inputStyle.backgroundColor}
							onChange={(e) => setInputStyle({ ...inputStyle, backgroundColor: e.target.value })}
						/>
					</div>
					<div className="my-3 d-flex align-items-center">
						<label htmlFor="inputColor">Text Color</label>
						<input
							type="color"
							id="inputColor"
							className="color-input"
							value={inputStyle.color}
							onChange={(e) => setInputStyle({ ...inputStyle, color: e.target.value })}
						/>
					</div>
					<div className="my-3">
						<div className="d-flex align-items-center">
							<label htmlFor="inputFontSize">Font Size</label>
							<input
								type="text"
								className="text-input"
								value={inputStyle.fontSize}
								onChange={(e) => setInputStyle({ ...inputStyle, fontSize: e.target.value })}
							/>
						</div>
						<input
							type="range"
							id="inputFontSize"
							className="range-slider"
							min="12"
							max="50"
							value={inputStyle.fontSize.replace("px", "")}
							onChange={(e) => setInputStyle({ ...inputStyle, fontSize: `${e.target.value}px` })}
						/>
					</div>
				</div>
				<GenericPreview style={inputStyle} classType={`Input${capitalizeFirstLetter(inputSettings.type)}`} />
			</div>
		</div>
	);
};

export default InputEditor;
