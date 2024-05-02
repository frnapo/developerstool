import { useState } from "react";
import ButtonEditor from "./components/ButtonEditor";
import ButtonPreview from "./components/ButtonPreview";

function App() {
  const [buttonStyle, setButtonStyle] = useState({});

  return (
    <div className="App">
      <ButtonEditor onUpdate={setButtonStyle} />
      <ButtonPreview style={buttonStyle} />
    </div>
  );
}

export default App;
