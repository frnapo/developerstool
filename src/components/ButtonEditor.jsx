/* eslint-disable react/prop-types */
import { useState } from "react";

function ButtonEditor({ onUpdate }) {
  const [style, setStyle] = useState({
    backgroundColor: "#1A1A1A",
    color: "white",
    fontSize: "16px",
    padding: "10px",
    borderRadius: "5px",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    let finalValue = value;
    if (e.target.type === "range") {
      finalValue += "px";
    }

    const updatedStyle = { ...style, [name]: finalValue };
    setStyle(updatedStyle);
    onUpdate(updatedStyle);
  }

  return (
    <div>
      <div>
        <label>Background Color:</label>
        <input type="color" name="backgroundColor" value={style.backgroundColor} onChange={handleChange} />
      </div>
      <div>
        <label>Color:</label>
        <input type="color" name="color" value={style.color} onChange={handleChange} />
      </div>
      <div>
        <label>Font Size:</label>
        <input type="text" name="fontSize" value={style.fontSize} onChange={handleChange} />
        <input
          type="range"
          name="fontSize"
          min="8"
          max="72"
          value={parseInt(style.fontSize, 10)}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Padding:</label>
        <input type="text" name="padding" value={style.padding} onChange={handleChange} />
        <input
          type="range"
          name="padding"
          min="0"
          max="50"
          value={parseInt(style.padding, 10)}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Border Radius:</label>
        <input type="text" name="borderRadius" value={style.borderRadius} onChange={handleChange} />
        <input
          type="range"
          name="borderRadius"
          min="0"
          max="100"
          value={parseInt(style.borderRadius, 10)}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default ButtonEditor;
