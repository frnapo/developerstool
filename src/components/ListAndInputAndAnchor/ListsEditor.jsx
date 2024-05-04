import { useState } from "react";
import GenericPreview from "../GenericPreview";

const ListsEditor = () => {
	const [isOrdered, setIsOrdered] = useState(false);

	const [listStyle, setListStyle] = useState({
		listStyleType: "",
		listStylePosition: "",
	});

	return (
		<div className="bg-custom-dark custom-rounded p-3 h-100 position-relative">
			<p className="position-absolute top-0 end-50 translate-middle-y fs-3 fw-bold text-black-50">LISTE</p>
			<div className="row g-3">
				<div className="col-6 d-flex justify-content-center align-items-center py-3">
					{isOrdered ? (
						<ol style={listStyle}>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
						</ol>
					) : (
						<ul style={listStyle}>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
						</ul>
					)}
				</div>

				<div className="col-6 d-flex flex-column">
					<div className="my-3">
						<label htmlFor="isOrdered">Ordered List</label>
						<input
							className="ms-3"
							type="checkbox"
							id="isOrdered"
							checked={isOrdered}
							onChange={() => setIsOrdered(!isOrdered)}
						/>
					</div>
					<div className="my-3">
						<label htmlFor="listStyleType">List Style Type</label>
						<select
							id="listStyleType"
							className="drop-input"
							value={listStyle.listStyleType}
							onChange={(e) => setListStyle({ ...listStyle, listStyleType: e.target.value })}
						>
							<option value="">Default</option>
							<option value="none">None</option>
							<option value="circle">Circle</option>
							<option value="disc">Disc</option>
							<option value="square">Square</option>
							<option value="decimal">Decimal</option>
							<option value="lower-alpha">Lower Alpha</option>
							<option value="upper-alpha">Upper Alpha</option>
							<option value="lower-roman">Lower Roman</option>
							<option value="upper-roman">Upper Roman</option>
						</select>
					</div>
					<div className="my-3">
						<label htmlFor="listStylePosition">List Style Position</label>
						<select
							id="listStylePosition"
							className="drop-input"
							value={listStyle.listStylePosition}
							onChange={(e) => setListStyle({ ...listStyle, listStylePosition: e.target.value })}
						>
							<option value="">Default</option>
							<option value="inside">Inside</option>
							<option value="outside">Outside</option>
						</select>
					</div>
				</div>

				<div className="col-12 ">
					<GenericPreview style={listStyle} classType="List" />
				</div>
			</div>
		</div>
	);
};

export default ListsEditor;
