/* eslint-disable react/prop-types */
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDropzone } from "react-dropzone";

const StyledDropzone = (props) => {
  const { onFileAccepted } = props;
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      onFileAccepted(acceptedFiles[0]);
    },
    multiple: false,
    accept: "image/*",
  });

  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <FontAwesomeIcon icon={faFileCirclePlus} className="display-1 custom-dropzone-icon" />
    </div>
  );
};

export default StyledDropzone;
