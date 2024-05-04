import { useState } from "react";
import GenericPreview from "../GenericPreview";

const TableEditor = () => {
	const [tableStyle, setTableStyle] = useState({
		backgroundColor: "#ffffff",
		color: "#000000",
		textAlign: "left",
		borderCollapse: "collapse",
		borderWidth: "2px",
		borderStyle: "solid",
		borderColor: "#aaaaaa",
		padding: "10px",
	});

	const [trStyle, setTrStyle] = useState({
		backgroundColor: "#ffffff",
		color: "#000000",
		textAlign: "left",
		borderWidth: "2px",
		borderStyle: "solid",
		borderColor: "#aaaaaa",
		padding: "10px",
	});

	const [tdStyle, setTdStyle] = useState({
		backgroundColor: "#ffffff",
		color: "#000000",
		textAlign: "left",
		borderWidth: "2px",
		borderStyle: "solid",
		borderColor: "#aaaaaa",
		padding: "10px",
	});

	return (
		<div className="bg-custom-dark rounded-5 p-3 my-3">
			<div className="row">
				<div className="col-12 my-3 d-flex justify-content-center align-items-center">
					<table style={tableStyle} className="">
						<thead>
							<tr style={trStyle}>
								<th>Header 1</th>
								<th>Header 2</th>
								<th>Header 3</th>
							</tr>
						</thead>
						<tbody>
							<tr style={trStyle}>
								<td style={tdStyle}>Row 1, Cell 1</td>
								<td style={tdStyle}>Row 1, Cell 2</td>
								<td style={tdStyle}>Row 1, Cell 3</td>
							</tr>
							<tr style={trStyle}>
								<td style={tdStyle}>Row 2, Cell 1</td>
								<td style={tdStyle}>Row 2, Cell 2</td>
								<td style={tdStyle}>Row 2, Cell 3</td>
							</tr>
							<tr style={trStyle}>
								<td style={tdStyle}>Row 3, Cell 1</td>
								<td style={tdStyle}>Row 3, Cell 2</td>
								<td style={tdStyle}>Row 3, Cell 3</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="col-12 col-lg-4">
					<p className="fs-4">Table style</p>
					<div className="d-flex flex-column">
						<div className="d-flex align-items-center my-3">
							<label>Background Color</label>
							<input
								type="color"
								className="color-input"
								value={tableStyle.backgroundColor}
								onChange={(e) => setTableStyle({ ...tableStyle, backgroundColor: e.target.value })}
							/>
						</div>
						<div className="d-flex align-items-center my-3">
							<label>Text Color</label>
							<input
								type="color"
								className="color-input"
								value={tableStyle.color}
								onChange={(e) => setTableStyle({ ...tableStyle, color: e.target.value })}
							/>
						</div>
						<div className="d-flex align-items-center my-3">
							<label>Text Align</label>
							<select
								value={tableStyle.textAlign}
								className="drop-input"
								onChange={(e) => setTableStyle({ ...tableStyle, textAlign: e.target.value })}
							>
								<option value="left">Left</option>
								<option value="center">Center</option>
								<option value="right">Right</option>
							</select>
						</div>
						<div className="d-flex align-items-center my-3">
							<label>Border Collapse</label>
							<select
								value={tableStyle.borderCollapse}
								className="drop-input"
								onChange={(e) => setTableStyle({ ...tableStyle, borderCollapse: e.target.value })}
							>
								<option value="collapse">Collapse</option>
								<option value="separate">Separate</option>
							</select>
						</div>

						<div className="my-3">
							<div className="d-flex align-items-center">
								<label>Border Width</label>
								<input
									type="number"
									className="text-input"
									value={tableStyle.borderWidth.replace("px", "")}
									onChange={(e) =>
										setTableStyle({ ...tableStyle, borderWidth: `${e.target.value}px` })
									}
								/>
							</div>
							<input
								type="range"
								className="range-slider"
								min="0"
								max="10"
								value={tableStyle.borderWidth.replace("px", "")}
								onChange={(e) => setTableStyle({ ...tableStyle, borderWidth: `${e.target.value}px` })}
							/>
						</div>
						<div className="d-flex align-items-center my-3">
							<label>Border Style</label>
							<select
								value={tableStyle.borderStyle}
								className="drop-input"
								onChange={(e) => setTableStyle({ ...tableStyle, borderStyle: e.target.value })}
							>
								<option value="solid">Solid</option>
								<option value="dotted">Dotted</option>
								<option value="dashed">Dashed</option>
								<option value="double">Double</option>
								<option value="groove">Groove</option>
								<option value="ridge">Ridge</option>
								<option value="inset">Inset</option>
								<option value="outset">Outset</option>
								<option value="none">None</option>
							</select>
						</div>
						<div className="d-flex align-items-center my-3">
							<label>Border Color</label>
							<input
								type="color"
								className="color-input"
								value={tableStyle.borderColor}
								onChange={(e) => setTableStyle({ ...tableStyle, borderColor: e.target.value })}
							/>
						</div>
						<div className="my-3">
							<div className="d-flex align-items-center">
								<label>Padding</label>
								<input
									type="number"
									className="text-input"
									value={tableStyle.padding.replace("px", "")}
									onChange={(e) => setTableStyle({ ...tableStyle, padding: `${e.target.value}px` })}
								/>
							</div>
							<input
								type="range"
								className="range-slider"
								min="0"
								max="50"
								value={tableStyle.padding.replace("px", "")}
								onChange={(e) => setTableStyle({ ...tableStyle, padding: `${e.target.value}px` })}
							/>
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-4">
					<p className="fs-4">Table Row style</p>
					<div className="d-flex flex-column">
						<div className="d-flex align-items-center my-3">
							<label>Background Color</label>
							<input
								type="color"
								className="color-input"
								value={trStyle.backgroundColor}
								onChange={(e) => setTrStyle({ ...trStyle, backgroundColor: e.target.value })}
							/>
						</div>
						<div className="d-flex align-items-center my-3">
							<label>Text Color</label>
							<input
								type="color"
								className="color-input"
								value={trStyle.color}
								onChange={(e) => setTrStyle({ ...trStyle, color: e.target.value })}
							/>
						</div>
						<div className="d-flex align-items-center my-3">
							<label>Text Align</label>
							<select
								value={trStyle.textAlign}
								className="drop-input"
								onChange={(e) => setTrStyle({ ...trStyle, textAlign: e.target.value })}
							>
								<option value="left">Left</option>
								<option value="center">Center</option>
								<option value="right">Right</option>
							</select>
						</div>
						<div className="my-3">
							<div className="d-flex align-items-center">
								<label>Border Width</label>
								<input
									type="number"
									className="text-input"
									value={trStyle.borderWidth.replace("px", "")}
									onChange={(e) => setTrStyle({ ...trStyle, borderWidth: `${e.target.value}px` })}
								/>
							</div>
							<input
								type="range"
								className="range-slider"
								min="0"
								max="10"
								value={trStyle.borderWidth.replace("px", "")}
								onChange={(e) => setTrStyle({ ...trStyle, borderWidth: `${e.target.value}px` })}
							/>
						</div>
						<div className="d-flex align-items-center my-3">
							<label>Border Style</label>
							<select
								value={trStyle.borderStyle}
								className="drop-input"
								onChange={(e) => setTrStyle({ ...trStyle, borderStyle: e.target.value })}
							>
								<option value="solid">Solid</option>
								<option value="dotted">Dotted</option>
								<option value="dashed">Dashed</option>
								<option value="double">Double</option>
								<option value="groove">Groove</option>
								<option value="ridge">Ridge</option>
								<option value="inset">Inset</option>
								<option value="outset">Outset</option>
								<option value="none">None</option>
							</select>
						</div>
						<div className="d-flex align-items-center my-3">
							<label>Border Color</label>
							<input
								type="color"
								className="color-input"
								value={trStyle.borderColor}
								onChange={(e) => setTrStyle({ ...trStyle, borderColor: e.target.value })}
							/>
						</div>
						<div className="my-3">
							<div className="d-flex align-items-center">
								<label>Padding</label>
								<input
									type="number"
									className="text-input"
									value={trStyle.padding.replace("px", "")}
									onChange={(e) => setTrStyle({ ...trStyle, padding: `${e.target.value}px` })}
								/>
							</div>
							<input
								type="range"
								className="range-slider"
								min="0"
								max="50"
								value={trStyle.padding.replace("px", "")}
								onChange={(e) => setTrStyle({ ...trStyle, padding: `${e.target.value}px` })}
							/>
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-4">
					<p className="fs-4">Table cells style</p>
					<div className="d-flex flex-column">
						<div className="d-flex align-items-center my-3">
							<label>Background Color</label>
							<input
								type="color"
								className="color-input"
								value={tdStyle.backgroundColor}
								onChange={(e) => setTdStyle({ ...tdStyle, backgroundColor: e.target.value })}
							/>
						</div>
						<div className="d-flex align-items-center my-3">
							<label>Text Color</label>
							<input
								type="color"
								className="color-input"
								value={tdStyle.color}
								onChange={(e) => setTdStyle({ ...tdStyle, color: e.target.value })}
							/>
						</div>
						<div className="d-flex align-items-center my-3">
							<label>Text Align</label>
							<select
								value={tdStyle.textAlign}
								className="drop-input"
								onChange={(e) => setTdStyle({ ...tdStyle, textAlign: e.target.value })}
							>
								<option value="left">Left</option>
								<option value="center">Center</option>
								<option value="right">Right</option>
							</select>
						</div>
						<div className="my-3">
							<div className="d-flex align-items-center">
								<label>Border Width</label>
								<input
									type="number"
									className="text-input"
									value={tdStyle.borderWidth.replace("px", "")}
									onChange={(e) => setTdStyle({ ...tdStyle, borderWidth: `${e.target.value}px` })}
								/>
							</div>
							<input
								type="range"
								className="range-slider"
								min="0"
								max="10"
								value={tdStyle.borderWidth.replace("px", "")}
								onChange={(e) => setTdStyle({ ...tdStyle, borderWidth: `${e.target.value}px` })}
							/>
						</div>
						<div className="d-flex align-items-center my-3">
							<label>Border Style</label>
							<select
								value={tdStyle.borderStyle}
								className="drop-input"
								onChange={(e) => setTdStyle({ ...tdStyle, borderStyle: e.target.value })}
							>
								<option value="solid">Solid</option>
								<option value="dotted">Dotted</option>
								<option value="dashed">Dashed</option>
								<option value="double">Double</option>
								<option value="groove">Groove</option>
								<option value="ridge">Ridge</option>
								<option value="inset">Inset</option>
								<option value="outset">Outset</option>
								<option value="none">None</option>
							</select>
						</div>
						<div className="d-flex align-items-center my-3">
							<label>Border Color</label>
							<input
								type="color"
								className="color-input"
								value={tdStyle.borderColor}
								onChange={(e) => setTdStyle({ ...tdStyle, borderColor: e.target.value })}
							/>
						</div>
						<div className="my-3">
							<div className="d-flex align-items-center">
								<label>Padding</label>
								<input
									type="number"
									className="text-input"
									value={tdStyle.padding.replace("px", "")}
									onChange={(e) => setTdStyle({ ...tdStyle, padding: `${e.target.value}px` })}
								/>
							</div>
							<input
								type="range"
								className="range-slider"
								min="0"
								max="50"
								value={tdStyle.padding.replace("px", "")}
								onChange={(e) => setTdStyle({ ...tdStyle, padding: `${e.target.value}px` })}
							/>
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-4">
					<GenericPreview style={tableStyle} classType="Table" />
				</div>
				<div className="col-12 col-lg-4">
					<GenericPreview style={trStyle} classType="TableRow" />
				</div>
				<div className="col-12 col-lg-4">
					<GenericPreview style={tdStyle} classType="TableCell" />
				</div>
			</div>
		</div>
	);
};

export default TableEditor;
