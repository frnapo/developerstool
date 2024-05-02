/* eslint-disable react/prop-types */
import { useState } from "react";

function ButtonEditor({ onUpdate }) {
  const [style, setStyle] = useState({
    backgroundColor: "blue",
    color: "white",
    fontSize: "16px",
    padding: "10px",
    borderRadius: "5px",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedStyle = { ...style, [name]: value };

    setStyle(updatedStyle);
    onUpdate(updatedStyle);
  };

  return (
    <div>
      <input type="color" name="backgroundColor" value={style.backgroundColor} onChange={handleChange} />
      <input type="text" name="color" value={style.color} onChange={handleChange} />
      <input type="text" name="fontSize" value={style.fontSize} onChange={handleChange} />
      <input type="text" name="padding" value={style.padding} onChange={handleChange} />
      <input type="text" name="borderRadius" value={style.borderRadius} onChange={handleChange} />
    </div>
  );
}

export default ButtonEditor;
