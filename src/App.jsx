import { useState } from "react";
import ButtonEditor from "./components/ButtonEditor";
import ButtonPreview from "./components/ButtonPreview";

function App() {
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: "#1A1A1A",
    color: "white",
    fontSize: "16px",
    padding: "10px",
    borderRadius: "5px",
  });

  return (
    <div className="App">
      <ButtonEditor onUpdate={setButtonStyle} />
      <ButtonPreview style={buttonStyle} />
    </div>
  );
}

export default App;
