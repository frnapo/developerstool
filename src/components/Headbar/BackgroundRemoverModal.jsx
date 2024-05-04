/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import StyledDropzone from "./StyledDropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight, faXmark } from "@fortawesome/free-solid-svg-icons";

const BackgroundRemoverModal = ({ show, handleClose }) => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleFileAccepted = (file) => {
    setFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setImageUrl("");
    setIsCompleted(false);
  };

  const removeBackground = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("size", "auto");

    try {
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": "Ax8by4sjZQTJDuJfNNnDL8TH",
        },
        body: formData,
        redirect: "follow",
      });

      const data = await response.blob();
      const imageUrl = URL.createObjectURL(data);
      setImageUrl(imageUrl);
      setPreviewUrl("");
      setIsCompleted(true);
    } catch (error) {
      console.error("Failed to remove background:", error);
    } finally {
      setLoading(false);
    }
  };

  const resetImage = () => {
    setFile(null);
    setImageUrl("");
    setPreviewUrl("");
    setIsCompleted(false);
  };

  return (
    <Modal className="custom-modal rounded-5" show={show} onHide={handleClose}>
      <Modal.Header className="d-flex justify-content-between align-items-center">
        <Modal.Title>Remove Background</Modal.Title>
        <FontAwesomeIcon icon={faXmark} className="modal-close-icon" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body className="bg-custom-lightdark">
        <Form>
          {file ? null : (
            <Form.Group controlId="formFile" className="mb-3">
              <StyledDropzone onFileAccepted={handleFileAccepted} />
            </Form.Group>
          )}
          {previewUrl && !imageUrl && (
            <div className="image-preview">
              <img src={previewUrl} alt="Preview" style={{ maxWidth: "100%", marginBottom: "10px" }} />
            </div>
          )}
          {loading && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              style={{ display: "block", margin: "auto" }}
            />
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {file && (
          <Button variant="warning" onClick={resetImage}>
            <FontAwesomeIcon icon={faRotateRight} />
          </Button>
        )}
        {!loading && !isCompleted && file && (
          <Button variant="primary" onClick={removeBackground}>
            Remove Background
          </Button>
        )}
        {imageUrl && (
          <>
            <img src={imageUrl} alt="Result" style={{ marginTop: "20px", maxWidth: "100%" }} />
            <Button variant="success" href={imageUrl} download="no-background.png">
              Download Image
            </Button>
          </>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BackgroundRemoverModal;
