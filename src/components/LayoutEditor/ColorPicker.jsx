/* eslint-disable react/prop-types */
const ColorPicker = ({ colors, handleColorChange }) => {
	return (
		<div className="p-1">
			<div className="d-flex align-items-center ">
				<label>Text Color</label>
				<input
					type="color"
					className="color-input"
					value={colors.color}
					onChange={handleColorChange("color")}
				/>
			</div>
			<div className="d-flex align-items-center">
				<label>Background Color</label>
				<input
					type="color"
					className="color-input border border-2 border-dark "
					value={colors.backgroundColor}
					onChange={handleColorChange("backgroundColor")}
				/>
			</div>
			<div className="d-flex align-items-center">
				<label>Primary Color</label>
				<input
					type="color"
					className="color-input"
					value={colors.primaryColor}
					onChange={handleColorChange("primaryColor")}
				/>
			</div>
			<div className="d-flex align-items-center">
				<label>Secondary Color</label>
				<input
					type="color"
					className="color-input"
					value={colors.secondaryColor}
					onChange={handleColorChange("secondaryColor")}
				/>
			</div>
			<div className="d-flex align-items-center">
				<label>Tertiary Color</label>
				<input
					type="color"
					className="color-input"
					value={colors.tertiaryColor}
					onChange={handleColorChange("tertiaryColor")}
				/>
			</div>
		</div>
	);
};

export default ColorPicker;
