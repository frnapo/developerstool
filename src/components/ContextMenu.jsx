import { useState, useEffect } from "react";

const ContextMenu = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const menuItems = [
    { label: "Azione 1", action: () => alert("Azione 1 eseguita!") },
    { label: "Azione 2", action: () => alert("Azione 2 eseguita!") },
    { label: "Azione 3", action: () => alert("Azione 3 eseguita!") },
  ];

  useEffect(() => {
    const handleRightClick = (event) => {
      event.preventDefault();
      setPosition({ x: event.pageX, y: event.pageY });
      setVisible(true);
    };

    const handleClick = () => {
      setVisible(false);
    };

    document.addEventListener("contextmenu", handleRightClick);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="context-menu" style={{ top: `${position.y}px`, left: `${position.x}px` }}>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} onClick={item.action}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContextMenu;
