import { useState } from "react";
import DropImage from "./DropImage";
import ContainerProperties from "./ContainerProperties";
import GenericPreview from "../GenericPreview";

const ImageEditor = () => {
	const [lightMode, setLightMode] = useState(false);
	const [containerProperties, setContainerProperties] = useState({
		width: "400px",
		height: "400px",
		backgroundImage: "url(https://via.placeholder.com/400)",
		backgroundSize: "cover",
		objectPosition: "center",
		backgroundRepeat: "no-repeat",
		borderRadius: "35px",
		boxShadow: "0px 0px 0px 0px #000000",
	});

	return (
		<div className={`${lightMode ? "bg-light" : "bg-custom-dark"} custom-rounded p-3 position-relative my-4`}>
			<button
				className="btn btn-success position-absolute top-0 end-0 me-2 mt-2"
				onClick={() => setLightMode(!lightMode)}
			>
				{lightMode ? "Dark Mode" : "Light Mode"}
			</button>
			<div className="row">
				<div className="col">
					<DropImage
						containerProperties={containerProperties}
						setContainerProperties={setContainerProperties}
					/>
				</div>
				<div className="col ms-2">
					<ContainerProperties
						containerProperties={containerProperties}
						setContainerProperties={setContainerProperties}
					/>
				</div>
				<div className="col-12">
					<GenericPreview style={containerProperties} classType="Container" />
				</div>
			</div>
		</div>
	);
};

export default ImageEditor;
