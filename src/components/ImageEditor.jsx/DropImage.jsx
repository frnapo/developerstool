/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropImage = ({ containerProperties, setContainerProperties }) => {
	const onDrop = useCallback((acceptedFiles) => {
		const file = acceptedFiles[0];
		const reader = new FileReader();

		reader.onload = () => {
			setContainerProperties({ ...containerProperties, backgroundImage: `url(${reader.result})` });
		};

		reader.readAsDataURL(file);
	}, []);

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<div {...getRootProps()} style={containerProperties} className="mx-auto mt-4">
			<input {...getInputProps()} />
		</div>
	);
};

export default DropImage;
