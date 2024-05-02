/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

function ButtonPreview({ style }) {
  const cssText = Object.entries(style)
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n");

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, [cssText]);

  return (
    <div>
      <button style={style}>Esempio Bottone</button>
      <pre className="language-css">
        <code>{cssText}</code>
      </pre>
    </div>
  );
}

export default ButtonPreview;
