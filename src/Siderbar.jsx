import { faJs } from "@fortawesome/free-brands-svg-icons";
import {
	faBorderAll,
	faFillDrip,
	faImage,
	faList,
	faPlay,
	faStop,
	faTextHeight,
	faTextWidth,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Sidebar = () => {
	return (
		<div className="sidebar d-flex flex-lg-column bg-custom-dark rounded-4">
			<a href="#button" rel="noreferrer">
				<OverlayTrigger placement="right" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Buttons</Tooltip>}>
					<FontAwesomeIcon icon={faPlay} className="sidebar-item rounded-3" />
				</OverlayTrigger>
			</a>
			<a href="#text" rel="noreferrer">
				<OverlayTrigger placement="right" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Texts</Tooltip>}>
					<FontAwesomeIcon icon={faTextHeight} className="sidebar-item rounded-3" />
				</OverlayTrigger>
			</a>
			<a href="#list" rel="noreferrer">
				<OverlayTrigger placement="right" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Lists</Tooltip>}>
					<FontAwesomeIcon icon={faList} className="sidebar-item rounded-3" />
				</OverlayTrigger>
			</a>
			<a href="#input" rel="noreferrer">
				<OverlayTrigger placement="right" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Inputs</Tooltip>}>
					<FontAwesomeIcon icon={faTextWidth} className="sidebar-item rounded-3" />
				</OverlayTrigger>
			</a>

			<a href="#imageContainer" rel="noreferrer">
				<OverlayTrigger
					placement="right"
					delay={{ show: 500, hide: 0 }}
					overlay={<Tooltip>Background Image</Tooltip>}
				>
					<FontAwesomeIcon icon={faImage} className="sidebar-item rounded-3" />
				</OverlayTrigger>
			</a>
			<a href="#flex-container" rel="noreferrer">
				<OverlayTrigger
					placement="right"
					delay={{ show: 500, hide: 0 }}
					overlay={<Tooltip>Flex Layout</Tooltip>}
				>
					<FontAwesomeIcon icon={faStop} className="sidebar-item rounded-3" />
				</OverlayTrigger>
			</a>
			<a href="#layout" rel="noreferrer">
				<OverlayTrigger
					placement="right"
					delay={{ show: 500, hide: 0 }}
					overlay={<Tooltip>Layout Colors</Tooltip>}
				>
					<FontAwesomeIcon icon={faFillDrip} className="sidebar-item rounded-3" />
				</OverlayTrigger>
			</a>
			<a href="#tables" rel="noreferrer">
				<OverlayTrigger placement="right" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Tables</Tooltip>}>
					<FontAwesomeIcon icon={faBorderAll} className="sidebar-item rounded-3" />
				</OverlayTrigger>
			</a>
			<a href="#js" rel="noreferrer">
				<OverlayTrigger placement="right" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>JS Helper</Tooltip>}>
					<FontAwesomeIcon icon={faJs} className="sidebar-item rounded-3" />
				</OverlayTrigger>
			</a>
		</div>
	);
};

export default Sidebar;
