import { Col, Row } from "react-bootstrap";

/* eslint-disable react/prop-types */
// label
function StyleEditor({ style, onUpdate, elementType = "button" }) {
  function handleChange(e) {
    const { name, value, type } = e.target;
    const finalValue = type === "range" && name !== "fontWeight" ? value + "px" : value;
    const updatedStyle = { ...style, [name]: finalValue };
    onUpdate(updatedStyle);
  }
  function getInputType(key) {
    if (key.toLowerCase().includes("color")) return "color";
    return "text";
  }

  const renderElement = () => {
    const commonProps = { style };

    switch (elementType) {
      case "button":
        return <button {...commonProps}>{"Esempio Bottone"}</button>;
      case "text":
        return <span {...commonProps}>{"Esempio Testo"}</span>;
      case "image":
        return <img {...commonProps} src={"https://via.placeholder.com/150"} alt="Esempio" />;
      default:
        return <div {...commonProps}>{"Contenuto Generico"}</div>;
    }
  };

  return (
    <div>
      {/* <h3 className="text-center">{label}</h3> */}
      <Row className="d-flex align-items-center">
        <Col xs={12} md={6} className="text-center overflow-hidden">
          {renderElement()}
        </Col>
        <Col xs={12} md={6} className="text-center text-md-start">
          {Object.keys(style).map((key) => {
            const value = style[key];
            const inputType = getInputType(key);
            const isPixelValue = typeof value === "string" && value.endsWith("px");
            const isRangeValue = key === "fontWeight";

            return (
              <div
                className={`${
                  inputType === "color"
                    ? "d-flex align-items-center justify-content-center justify-content-md-start"
                    : ""
                } my-4`}
                key={key}
              >
                <label>
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .charAt(0)
                    .toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type={inputType}
                  className={inputType === "text" ? "text-input" : inputType === "color" ? "color-input" : ""}
                  name={key}
                  value={value}
                  onChange={handleChange}
                />
                {isPixelValue && (
                  <div>
                    <input
                      type="range"
                      className="range-slider"
                      name={key}
                      min="0"
                      max={key === "fontSize" ? "72" : "100"}
                      value={parseInt(value, 10)}
                      onChange={(e) => handleChange({ ...e, target: { ...e.target, name: key, type: "range" } })}
                    />
                  </div>
                )}
                {isRangeValue && (
                  <div>
                    <input
                      type="range"
                      className="range-slider"
                      name={key}
                      min="200"
                      max="900"
                      step="100"
                      value={parseInt(value, 10)}
                      onChange={(e) => handleChange({ ...e, target: { ...e.target, name: key, type: "range" } })}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default StyleEditor;
