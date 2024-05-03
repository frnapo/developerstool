import {
  faBorderAll,
  faFillDrip,
  faImage,
  faList,
  faPlay,
  faStop,
  faTextHeight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column bg-custom-dark rounded-4">
      <OverlayTrigger placement="right" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Buttons</Tooltip>}>
        <FontAwesomeIcon icon={faPlay} className="sidebar-item rounded-3" />
      </OverlayTrigger>
      <OverlayTrigger placement="right" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Texts</Tooltip>}>
        <FontAwesomeIcon icon={faTextHeight} className="sidebar-item rounded-3" />
      </OverlayTrigger>
      <OverlayTrigger placement="right" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Lists</Tooltip>}>
        <FontAwesomeIcon icon={faList} className="sidebar-item rounded-3" />
      </OverlayTrigger>
      <OverlayTrigger placement="right" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Tables</Tooltip>}>
        <FontAwesomeIcon icon={faBorderAll} className="sidebar-item rounded-3" />
      </OverlayTrigger>
      <OverlayTrigger placement="right" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Background Image</Tooltip>}>
        <FontAwesomeIcon icon={faImage} className="sidebar-item rounded-3" />
      </OverlayTrigger>
      <OverlayTrigger placement="right" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Flex Layout</Tooltip>}>
        <FontAwesomeIcon icon={faStop} className="sidebar-item rounded-3" />
      </OverlayTrigger>
      <OverlayTrigger placement="right" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Layout Colors</Tooltip>}>
        <FontAwesomeIcon icon={faFillDrip} className="sidebar-item rounded-3" />
      </OverlayTrigger>
    </div>
  );
};

export default Sidebar;
