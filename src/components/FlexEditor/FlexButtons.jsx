/* eslint-disable react/prop-types */
const FlexButtons = ({ flexStyle, setFlexStyle }) => {
  return (
    <div className="row g-3">
      <div className="d-flex justify-content-around col-12 align-items-center">
        <button
          className="flex-button btn btn-outline-light"
          onClick={() => {
            setFlexStyle({ ...flexStyle, display: flexStyle.display == "flex" ? "block" : "flex" });
          }}
        >
          {flexStyle.display === "flex" ? "Display block" : "Display flex"}
        </button>
        <button
          className="flex-button btn btn-outline-light"
          onClick={() => {
            setFlexStyle({
              ...flexStyle,
              flexDirection: flexStyle.flexDirection === "row" ? "column" : "row",
            });
          }}
        >
          {flexStyle.flexDirection === "row" ? "Direction column" : "Direction row"}
        </button>

        <button
          className="flex-button btn btn-outline-light"
          onClick={() => {
            setFlexStyle({ ...flexStyle, flexWrap: flexStyle.flexWrap === "wrap" ? "nowrap" : "wrap" });
          }}
        >
          {flexStyle.flexWrap === "wrap" ? "Nowrap" : "Wrap"}
        </button>
      </div>
      <div className="d-flex flex-column col-12">
        <label className="my-1">Justify-content</label>
        <select
          className="flex-drop"
          onChange={(e) => {
            setFlexStyle({ ...flexStyle, justifyContent: e.target.value });
          }}
        >
          <option value="center">center</option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="space-around">space-around</option>
          <option value="space-between">space-between</option>
        </select>
      </div>
      <div className="d-flex flex-column col-12">
        <label className="my-1">Align-items</label>
        <select
          className="flex-drop"
          onChange={(e) => {
            setFlexStyle({ ...flexStyle, alignItems: e.target.value });
          }}
        >
          <option value="center">center</option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="space-around">space-around</option>
          <option value="space-between">space-between</option>
          <option value="stretch">stretch</option>
        </select>
      </div>
    </div>
  );
};

export default FlexButtons;
