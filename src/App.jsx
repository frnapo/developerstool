import ContextMenu from "./components/ContextMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.scss";
import KeyboardEventHandler from "./components/KeyboardEventHandler";
import ButtonEditor from "./components/ButtonComponent/ButtonEditor";
import TextEditor from "./components/TextEditor/TextEditor";
import ImageEditor from "./components/ImageEditor.jsx/ImageEditor";
import FlexEditor from "./components/FlexEditor/FlexEditor";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./Siderbar";

function App() {
  return (
    <>
      <KeyboardEventHandler />
      <div className="container mt-3">
        <ContextMenu />
        <Row>
          <Col xs={12} md={2} lg={1}>
            <Sidebar />
          </Col>
          <Col xs={12} md={10} lg={11}>
            <ButtonEditor />
            <TextEditor />
            <ImageEditor />
            <FlexEditor />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
