/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Prism from "prismjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

function formatCSS(cssText) {
  const kebabCaseText = cssText.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  return kebabCaseText.replace(/(^\s*)(\w+)(:)(\s*)([^;]+)/gm, (match, p0, p1, p2, p3, p4) => {
    return `${p0}<span class="token property">${p1}</span><span class="token punctuation">${p2}</span>${p3}<span class="token value">${p4}</span>`;
  });
}

function GenericPreview({ classType, style }) {
  const [copySuccess, setCopySuccess] = useState(false);
  const rawCssText = Object.entries(style)
    .map(([key, value]) => {
      const kebabKey = key.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      return `    ${kebabKey}: ${value};`;
    })
    .join("\n");
  const formattedCSS = formatCSS(rawCssText);

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, [formattedCSS]);

  const copyCodeToClipboard = () => {
    const codeToCopy = `.my${classType} {\n${rawCssText}\n}`;
    navigator.clipboard
      .writeText(codeToCopy)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div>
      <pre className="m-0 mb-1 language-css  p-3 pt-1">
        <div className="code-header ">
          <div>
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="d-flex">
            <OverlayTrigger placement="top" delay={{ show: 1000, hide: 0 }} overlay={<Tooltip>How to use?</Tooltip>}>
              <div className="p-2 px-3 how-to-use">
                <FontAwesomeIcon icon={faQuestion} />
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              delay={{ show: 1000, hide: 0 }}
              overlay={<Tooltip>Copy to the clipboard</Tooltip>}
            >
              <div className="copy-code p-2 px-3" onClick={copyCodeToClipboard}>
                {copySuccess ? (
                  <>
                    Copied <FontAwesomeIcon icon={faCheck} />
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faClipboard} /> Copy code
                  </>
                )}
              </div>
            </OverlayTrigger>
          </div>
        </div>
        <code dangerouslySetInnerHTML={{ __html: `.my${classType} {\n${formattedCSS}\n}` }} />
      </pre>
    </div>
  );
}

export default GenericPreview;
