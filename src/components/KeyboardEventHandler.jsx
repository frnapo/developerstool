import { useEffect } from "react";

function KeyboardEventHandler() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 123) {
        event.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown, false);
    return () => {
      window.removeEventListener("keydown", handleKeyDown, false);
    };
  }, []);
  return null;
}

export default KeyboardEventHandler;
