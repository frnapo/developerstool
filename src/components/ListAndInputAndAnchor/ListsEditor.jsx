import { useState } from "react";
import GenericPreview from "../GenericPreview";

const ListsEditor = () => {
  const [isOrdered, setIsOrdered] = useState(false);

  const [listStyle, setListStyle] = useState({
    listStyleType: "",
    listStylePosition: "",
  });

  return (
    <div className="bg-custom-dark custom-rounded p-3 h-100 position-relative">
      <div className="row g-3">
        <div className="col-12 d-flex justify-content-center align-items-center py-3">
          {isOrdered ? (
            <ol style={listStyle}>
              <li>List Item 1</li>
              <li>List Item 2</li>
              <li>List Item 3</li>
            </ol>
          ) : (
            <ul style={listStyle}>
              <li>List Item 1</li>
              <li>List Item 2</li>
              <li>List Item 3</li>
            </ul>
          )}
        </div>

        <div className="col-12 d-flex flex-column align-items-center">
          <div className="my-2 d-flex align-items-center">
            <label className="me-2" htmlFor="isOrdered">
              Ordered List?
            </label>
            <label className="switch">
              <input type="checkbox" checked={isOrdered} onChange={() => setIsOrdered(!isOrdered)} />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="my-2">
            <label htmlFor="listStyleType">List Style Type</label>
            <select
              id="listStyleType"
              className="drop-input"
              value={listStyle.listStyleType}
              onChange={(e) => setListStyle({ ...listStyle, listStyleType: e.target.value })}
            >
              <option value="">Default</option>
              <option value="none">None</option>
              <option value="circle">Circle</option>
              <option value="disc">Disc</option>
              <option value="square">Square</option>
              <option value="decimal">Decimal</option>
              <option value="lower-alpha">Lower Alpha</option>
              <option value="upper-alpha">Upper Alpha</option>
              <option value="lower-roman">Lower Roman</option>
              <option value="upper-roman">Upper Roman</option>
            </select>
          </div>
          <div className="my-2">
            <label htmlFor="listStylePosition">List Style Position</label>
            <select
              id="listStylePosition"
              className="drop-input"
              value={listStyle.listStylePosition}
              onChange={(e) => setListStyle({ ...listStyle, listStylePosition: e.target.value })}
            >
              <option value="">Default</option>
              <option value="inside">Inside</option>
              <option value="outside">Outside</option>
            </select>
          </div>
        </div>

        <div className="col-12 list-item-code">
          <GenericPreview style={listStyle} classType="List" />
        </div>
      </div>
    </div>
  );
};

export default ListsEditor;
