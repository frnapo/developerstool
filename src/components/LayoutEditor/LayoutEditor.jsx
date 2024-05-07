import { useState } from "react";
import ColorPicker from "./ColorPicker";
import "./layoutEditor.scss";
import GenericPreview from "../GenericPreview";

const LayoutEditor = () => {
	const [colors, setColors] = useState({
		color: "#ffffff", // General text color
		primaryColor: "#3498db", // Primary theme color
		secondaryColor: "#9b59b6", // Secondary theme color
		tertiaryColor: "#2ecc71", // Tertiary theme color
		backgroundColor: "#34495e", // Background color for body
	});

	const handleColorChange = (colorType) => (event) => {
		setColors({ ...colors, [colorType]: event.target.value });
	};

	return (
		<div id="layout" className="bg-custom-dark rounded-5 my-3 p-3">
			<div
				className="rounded-4 p-4 mb-2"
				style={{
					color: colors.color,
					backgroundColor: colors.backgroundColor,
				}}
			>
				<div className="row rounded-4" style={{ backgroundColor: colors.backgroundColor }}>
					<div className="col-12 col-lg-3 order-lg-2">
						<div
							className="bg-opacity-50 rounded-4 me-2 mt-2 mb-3 mb-lg-0 p-3"
							style={{ backgroundColor: colors.primaryColor }}
						>
							<ColorPicker colors={colors} handleColorChange={handleColorChange} />
						</div>
					</div>
					<div className="col-12 col-lg-9 order-lg-1">
						{/* NAVBAR */}
						<div className="rounded-1 w-100 p-2" style={{ backgroundColor: colors.primaryColor }}>
							<div className="d-flex justify-content-start" style={{ color: colors.secondaryColor }}>
								<p className="text-center m-0 fs-5 me-2">Link</p>
								<p className="text-center m-0 fs-5 me-2">Link 1</p>
								<p className="text-center m-0 fs-5 me-2">Link 2</p>
								<p className="text-center m-0 fs-5 ms-auto">Link 3</p>
							</div>
						</div>
						{/* HEADER */}
						<div className="my-4">
							<h2 className="display-3" style={{ color: colors.secondaryColor }}>
								Try your color palette here
							</h2>
							<p className="fs-4" style={{ color: colors.color }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae.
							</p>
						</div>
						{/* HERO */}
						<div
							className="w-100 p-5 rounded-2"
							style={{
								background: `linear-gradient(to right, ${colors.primaryColor}, ${colors.secondaryColor})`,
							}}
						>
							<h1 className="display-1 text-center" style={{ color: colors.secondaryColor }}>
								Hero
							</h1>
						</div>
						{/* CONTENT */}
						<div className="my-4">
							<h2 className="display-4" style={{ color: colors.secondaryColor }}>
								Content
							</h2>
							<p className="fs-5" style={{ color: colors.color }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae.
							</p>
							{/* cards */}
							<div className="row">
								<div className="col-12 col-lg-6">
									<div
										className="card mb-3"
										style={{
											backgroundColor: colors.primaryColor,
											color: colors.color,
										}}
									>
										<div className="card-header">Header</div>
										<div className="card-body">
											<h5 className="card-title">Primary Card</h5>
											<p className="card-text">
												Some quick example text to build on the card title.
											</p>
											<div className="d-flex justify-content-between align-items-center">
												<button
													className="btn me-2"
													style={{ backgroundColor: colors.secondaryColor }}
												>
													Go somewhere
												</button>
												<button
													className="btn"
													style={{ backgroundColor: colors.tertiaryColor }}
												>
													Go somewhere
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-12 col-lg-6">
									<div
										className="card mb-3"
										style={{
											backgroundColor: colors.secondaryColor,
											color: colors.color,
										}}
									>
										<div className="card-header">Header</div>
										<div className="card-body">
											<h5 className="card-title">Secondary Card</h5>
											<p className="card-text">
												Some quick example text to build on the card title.
											</p>
											<div className="d-flex justify-content-between align-items-center">
												<button
													className="btn me-2"
													style={{ backgroundColor: colors.primaryColor }}
												>
													Go somewhere
												</button>
												<button
													className="btn"
													style={{ backgroundColor: colors.tertiaryColor }}
												>
													Go somewhere
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div
										className="mb-3 rounded-2"
										style={{
											background: `linear-gradient(to right, ${colors.tertiaryColor}, ${colors.secondaryColor})`,
											color: colors.color,
											width: "100%",
											height: "20px",
										}}
									></div>
								</div>
								<div className="col-12 col-md-6">
									<p className="fs-5" style={{ color: colors.color }}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dignissimos
										molestias vitae provident dolor quae placeat minima consequuntur laborum
										corporis consequatur nostrum. Incidunt aliquam, in quia libero a voluptatem ea!
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dignissimos
										molestias vitae provident dolor quae placeat minima consequuntur laborum
										corporis consequatur nostrum. Incidunt aliquam, in quia libero a voluptatem ea!
									</p>
								</div>
								<div className="col-12 col-md-6">
									<p className="fs-5" style={{ color: colors.color }}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dignissimos
										molestias vitae provident dolor quae placeat minima consequuntur laborum
										corporis consequatur nostrum. Incidunt aliquam, in quia libero a voluptatem ea!
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dignissimos
										molestias vitae provident dolor quae placeat minima consequuntur laborum
										corporis consequatur nostrum. Incidunt aliquam, in quia libero a voluptatem ea!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<GenericPreview style={colors} classType="Colors" />
		</div>
	);
};

export default LayoutEditor;
