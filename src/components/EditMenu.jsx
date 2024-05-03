/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faEllipsisV, faPenToSquare, faPlus, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const EditMenu = ({ onReset }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const menuVariants = {
    open: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 0.2 },
      originY: 0,
    },
    closed: {
      scaleY: 0,
      opacity: 0,
      transition: { duration: 0.2 },
      originY: 0,
    },
  };

  return (
    <div className="edit-menu-wrapper position-relative">
      <div
        ref={menuRef}
        className={`edit-menu position-absolute rounded-circle ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={isOpen ? faEllipsisV : faEllipsisH} />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="menu-content position-absolute"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <OverlayTrigger placement="left" delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Restore</Tooltip>}>
                <FontAwesomeIcon icon={faRotateRight} className="menu-item" onClick={onReset} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="left"
                delay={{ show: 500, hide: 0 }}
                overlay={<Tooltip>Edit properties</Tooltip>}
              >
                <FontAwesomeIcon icon={faPenToSquare} className="menu-item" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="left"
                delay={{ show: 500, hide: 0 }}
                overlay={<Tooltip>Add properties</Tooltip>}
              >
                <FontAwesomeIcon icon={faPlus} className="menu-item" />
              </OverlayTrigger>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EditMenu;
