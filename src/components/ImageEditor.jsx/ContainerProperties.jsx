/* eslint-disable react/prop-types */
const ContainerProperties = ({ containerProperties, setContainerProperties, lightMode }) => {
  const boxShadowStyles = {
    none: "none",
    soft: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    medium: "0px 8px 16px rgba(0, 0, 0, 0.5)",
    strong: "0px 12px 24px rgba(0, 0, 0, 0.7)",
  };

  const handleRangeChange = (e, property) => {
    setContainerProperties({ ...containerProperties, [property]: `${e.target.value}px` });
  };

  const handleValueRange = (value) => {
    return value.replace("px", "");
  };

  const textClass = lightMode ? "text-dark" : "text-light";
  const rangeClass = lightMode ? "range-slider-white" : "range-slider";
  const inputClass = lightMode ? "text-input-white" : "";
  const dropClass = lightMode ? "drop-input-white" : "";

  return (
    <div className={`${textClass}`}>
      <div>
        <label>Container Width</label>
        <select
          className={`${dropClass} drop-input mb-2`}
          value={containerProperties.width}
          onChange={(e) => setContainerProperties({ ...containerProperties, width: e.target.value })}
        >
          <option value="100px">100px</option>
          <option value="200px">200px</option>
          <option value="300px">300px</option>
          <option value="400px">400px</option>
          <option value="500px">500px</option>
          <option value="600px">600px</option>
          <option value="700px">700px</option>
          <option value="800px">800px</option>
        </select>
      </div>
      <div className="my-4">
        <label>Container Height</label>
        <select
          className={`${dropClass} drop-input mb-2`}
          value={containerProperties.height}
          onChange={(e) => setContainerProperties({ ...containerProperties, height: e.target.value })}
        >
          <option value="100px">100px</option>
          <option value="200px">200px</option>
          <option value="300px">300px</option>
          <option value="400px">400px</option>
          <option value="500px">500px</option>
          <option value="600px">600px</option>
          <option value="700px">700px</option>
          <option value="800px">800px</option>
        </select>
      </div>
      <div className="my-4">
        <label>Background Size</label>
        <select
          className={`${dropClass} drop-input mb-2`}
          value={containerProperties.backgroundSize}
          onChange={(e) => {
            setContainerProperties({ ...containerProperties, backgroundSize: e.target.value });
          }}
        >
          <option value="cover">Cover</option>
          <option value="contain">Contain</option>
          <option value="fill">Fill</option>
          <option value="unset">Unset</option>
          <option value="scale-down">Scale-down</option>
        </select>
      </div>
      <div className="my-4">
        <label>Object Position</label>
        <select
          className={`${dropClass} drop-input mb-2`}
          value={containerProperties.objectPosition}
          onChange={(e) => setContainerProperties({ ...containerProperties, objectPosition: e.target.value })}
        >
          <option value="center">Center</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div className="my-4">
        <label>Background Repeat</label>
        <select
          className={`${dropClass} drop-input mb-2`}
          value={containerProperties.backgroundRepeat}
          onChange={(e) => setContainerProperties({ ...containerProperties, backgroundRepeat: e.target.value })}
        >
          <option value="no-repeat">No-Repeat</option>
          <option value="repeat">Repeat</option>
          <option value="repeat-x">Repeat-X</option>
          <option value="repeat-y">Repeat-Y</option>
        </select>
      </div>
      <div className="my-4">
        <div className="">
          <label className="me-2">Border Radius</label>
          <input
            type="text"
            className={`${inputClass} text-input mb-2`}
            placeholder="Border Radius"
            min="0"
            max="400"
            value={containerProperties.borderRadius}
            onChange={(e) => setContainerProperties({ ...containerProperties, borderRadius: e.target.value })}
          />
        </div>

        <input
          type="range"
          min="0"
          max="400"
          className={`${rangeClass} mb-2`}
          placeholder="Border Radius"
          value={handleValueRange(containerProperties.borderRadius)}
          onChange={(e) => handleRangeChange(e, "borderRadius")}
        />
      </div>
      <div className="my-4">
        <label>Shadow </label>
        <select
          className={`${inputClass} text-input mb-2`}
          value={containerProperties.boxShadow}
          onChange={(e) => setContainerProperties({ ...containerProperties, boxShadow: e.target.value })}
        >
          {Object.entries(boxShadowStyles).map(([key, value]) => (
            <option key={key} value={value}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ContainerProperties;
