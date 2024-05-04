import { useState } from "react";
import DropImage from "./DropImage";
import ContainerProperties from "./ContainerProperties";
import GenericPreview from "../GenericPreview";
import ToggleSwitch from "../ToggleSwitch";

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
      <div className="text-end me-1">
        <ToggleSwitch isOn={lightMode} handleToggle={() => setLightMode(!lightMode)} />
      </div>
      <div className="row">
        <div className="col mb-5 mb-lg-0">
          <DropImage containerProperties={containerProperties} setContainerProperties={setContainerProperties} />
        </div>
        <div className="col text-center text-lg-start ms-2">
          <ContainerProperties
            containerProperties={containerProperties}
            setContainerProperties={setContainerProperties}
            lightMode={lightMode}
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
