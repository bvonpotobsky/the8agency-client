import React, { useState, useEffect } from "react";
import axios from "axios";

import "@styles/pages/Backoffice.scss";

const Backoffice = () => {
  const [assistants, setAssistants] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(
        "http://localhost:3005/api/v1/assistant"
      );

      const { data } = response;
      setAssistants(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const downloadAssistants = async () => {
    try {
      const response = await axios.get("http://localhost:3005/api/v1/download");

      const { data } = response;
      const blob = new Blob([data], { type: "application/json" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "assistants.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log(error);
    }
  };

  const qtyAssistants = assistants.length;

  return (
    <section className="Backoffice">
      <div className="Backoffice__container">
        <h1 className="Backoffice__title">Lista de asistentes</h1>

        <button onClick={downloadAssistants} className="Backoffice__button">
          Descargar lista
        </button>

        {assistants?.length > 0 ? (
          <div className="Backoffice__table">
            <p className="Backoffice__counter">
              Hay <b>{qtyAssistants}</b> inscriptos por el momento
            </p>

            <div className="Backoffice__table__header">
              <span>Nombre</span>
              <span>Apellido</span>
            </div>

            <div className="Backoffice__table__body">
              {assistants?.map((assistant) => (
                <div
                  key={assistant.id}
                  className="Backoffice__table__body--item"
                >
                  <span>{assistant.firstName}</span>
                  <span>{assistant.lastName}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="Backoffice__empty">
            <p>No hay asistentes registrados</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Backoffice;
