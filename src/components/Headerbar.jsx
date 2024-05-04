import {
  faArrowPointer,
  faExpand,
  faEyeDropper,
  faIcons,
  faImages,
  faRepeat,
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import BackgroundRemoverModal from "./Headbar/BackgroundRemoverModal";
import { useState } from "react";
import Elementique from "../assets/Elementique.png";

const Headbar = () => {
  const [showBackgroundRemover, setShowBackgroundRemover] = useState(false);

  return (
    <>
      <div className="logo-container">
        <img src={Elementique} alt="elementique-logo" className="elementique-logo" width={200} />
      </div>
      <div className="headbar d-flex bg-custom-dark rounded-4">
        <OverlayTrigger placement="bottom" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Cursor</Tooltip>}>
          <FontAwesomeIcon icon={faArrowPointer} className="headbar-item rounded-3" />
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Add section</Tooltip>}>
          <FontAwesomeIcon icon={faSquarePlus} className="headbar-item rounded-3" />
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Remove section</Tooltip>}>
          <FontAwesomeIcon icon={faSquareMinus} className="headbar-item rounded-3" />
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 500, hide: 0 }}
          overlay={<Tooltip>Background Remover</Tooltip>}
        >
          <FontAwesomeIcon
            icon={faImages}
            className="headbar-item rounded-3"
            onClick={() => setShowBackgroundRemover(true)}
          />
        </OverlayTrigger>
        <BackgroundRemoverModal show={showBackgroundRemover} handleClose={() => setShowBackgroundRemover(false)} />
        <OverlayTrigger placement="bottom" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Images resizer</Tooltip>}>
          <FontAwesomeIcon icon={faExpand} className="headbar-item rounded-3" />
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Color picker</Tooltip>}>
          <FontAwesomeIcon icon={faEyeDropper} className="headbar-item rounded-3" />
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>SVG Editor</Tooltip>}>
          <FontAwesomeIcon icon={faIcons} className="headbar-item rounded-3" />
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Image Converter</Tooltip>}>
          <FontAwesomeIcon icon={faRepeat} className="headbar-item rounded-3" />
        </OverlayTrigger>
      </div>
    </>
  );
};

export default Headbar;
