/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Prism from "prismjs";

function formatCSS(cssText) {
  return cssText.replace(/(^\s*)(\w+)(:)(\s*)([^;]+)/gm, (match, p0, p1, p2, p3, p4) => {
    return `${p0}<span class="token property">${p1}</span><span class="token punctuation">${p2}</span>${p3}<span class="token value">${p4}</span>`;
  });
}

function GenericPreview({ classType, style }) {
  const rawCssText = Object.entries(style)
    .map(([key, value]) => `    ${key}: ${value};`)
    .join("\n");

  const formattedCSS = formatCSS(rawCssText); // Per visualizzazione

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, [formattedCSS]);

  const copyCodeToClipboard = () => {
    // Usa rawCssText per copiare il codice CSS non formattato
    const codeToCopy = `.my${classType} {\n${rawCssText}\n}`;
    navigator.clipboard
      .writeText(codeToCopy)
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div>
      <pre className="language-css p-3 pt-1">
        <div className="code-header">
          <div>
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="copy-code" onClick={copyCodeToClipboard}>
            Copy code
          </div>
        </div>
        <code dangerouslySetInnerHTML={{ __html: `.my${classType} {\n${formattedCSS}\n}` }} />
      </pre>
    </div>
  );
}

export default GenericPreview;
