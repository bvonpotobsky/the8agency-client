import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import "@styles/layouts/Modal.scss";

function Modal({ firstName, setIsModalOpen }) {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && setIsModalOpen) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return ReactDOM.createPortal(
    <div className="Modal" onClick={closeModal}>
      <div className="Modal__container">
        <button onClick={closeModal}>X</button>
        <h2>¡Gracias, {firstName}!</h2>
        <p>Ya estás inscripto al Webinar</p>
        <p>Nos contactaremos contigo vía email</p>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
