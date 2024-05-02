/* eslint-disable react/prop-types */

function ButtonPreview({ style }) {
  const cssText = Object.entries(style)
    .map(([key, value]) => `${key}: ${value};`)
    .join(" ");

  return (
    <div>
      <button style={style}>Esempio Bottone</button>
      <pre>{cssText}</pre>
    </div>
  );
}

export default ButtonPreview;
