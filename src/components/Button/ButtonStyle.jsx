import propTypes from "prop-types";

const ButtonStyle = ({ buttonStyle, setButtonStyle }) => {
	return (
		<div className="d-flex flex-column">
			{/* Color picker for background color */}
			<label>
				Background Color:
				<input
					type="color"
					onChange={(e) => setButtonStyle((prev) => ({ ...prev, backgroundColor: e.target.value }))}
					value={buttonStyle.backgroundColor}
				/>
			</label>

			{/* Color picker for text color */}
			<label>
				Text Color:
				<input
					type="color"
					onChange={(e) => setButtonStyle((prev) => ({ ...prev, color: e.target.value }))}
					value={buttonStyle.color}
				/>
			</label>

			{/* Range slider for font size */}
			<label>
				Font Size:
				<input
					type="range"
					min="10"
					max="72"
					onChange={(e) => setButtonStyle((prev) => ({ ...prev, fontSize: `${e.target.value}px` }))}
					value={parseInt(buttonStyle.fontSize, 10)}
				/>
			</label>

			{/* Range slider for padding block */}
			<label>
				Padding Block:
				<input
					type="range"
					min="0"
					max="100"
					onChange={(e) => setButtonStyle((prev) => ({ ...prev, paddingBlock: `${e.target.value}px` }))}
					value={parseInt(buttonStyle.paddingBlock, 10)}
				/>
			</label>

			{/* Range slider for padding inline */}
			<label>
				Padding Inline:
				<input
					type="range"
					min="0"
					max="50"
					onChange={(e) => setButtonStyle((prev) => ({ ...prev, paddingInline: `${e.target.value}px` }))}
					value={parseInt(buttonStyle.paddingInline, 10)}
				/>
			</label>

			{/* Range slider for border radius */}
			<label>
				Border Radius:
				<input
					type="range"
					min="0"
					max="100"
					onChange={(e) => setButtonStyle((prev) => ({ ...prev, borderRadius: `${e.target.value}px` }))}
					value={parseInt(buttonStyle.borderRadius, 10)}
				/>
			</label>
		</div>
	);
};

ButtonStyle.propTypes = {
	setButtonStyle: propTypes.func.isRequired,
	buttonStyle: propTypes.object.isRequired,
};

export default ButtonStyle;
