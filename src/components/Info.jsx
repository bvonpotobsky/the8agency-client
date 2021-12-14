import React from "react";

import companiesImg from "@images/companies.jpg";
import vonMises from "@images/vonmises.jpeg";
import antonioEscohotado from "@images/escohotado.jpeg";
import hayek from "@images/hayek.jpeg";
import huertaDeSoto from "@images/jhs.jpeg";

import "@styles/components/Info.scss";

const Info = () => {
  return (
    <div className="Info">
      <figure className="Info__banner">
        <img
          src={companiesImg}
          alt="Imagen de empresas que apoyan el Webinar"
        />
      </figure>

      <div className="Info__description">
        <p>
          Te invitan este webinar, donde trataremos la temática de cómo
          humanizar la experiencia del cliente de Banca y Seguros en el nuevo
          entorno digital.
        </p>

        <p>
          Además podremos conocer las estrategias que aplicó LOREM para generar
          una experiencia memorable para sus clientes, mientras se convertía en
          el gran Unicornio de LATAM.
        </p>

        <p>Escucha de primera mano la voz de nuestros especialistas:</p>
      </div>

      <div className="Info__speakers">
        <div className="Info__speaker">
          <figure className="Info__speaker__image">
            <img src={huertaDeSoto} alt="Imagen Jesús Huerta de Soto" />
          </figure>

          <div className="Info__speaker__content">
            <h3>Jesús Huerta De Soto</h3>
            <p>Presidente</p>
          </div>
        </div>

        <div className="Info__speaker">
          <figure className="Info__speaker__image">
            <img src={hayek} alt="Imagen de Friedrich Hayek" />
          </figure>

          <div className="Info__speaker__content">
            <h3>Friedrich Hayek</h3>
            <p>Customer Service Senior Manager</p>
          </div>
        </div>

        <div className="Info__speaker">
          <figure className="Info__speaker__image">
            <img src={vonMises} alt="Imagen de Ludwig von Mises" />
          </figure>

          <div className="Info__speaker__content">
            <h3>Ludwig von Mises</h3>
            <p>Senior Customer Success Consultant</p>
          </div>
        </div>

        <div className="Info__speaker">
          <figure className="Info__speaker__image">
            <img src={antonioEscohotado} alt="Imagen de Antonio Escohotado" />
          </figure>

          <div className="Info__speaker__content">
            <h3>Antonio Escohotado</h3>
            <p>Gerente de Consultaría de Soluciones</p>
          </div>
        </div>
      </div>

      <div className="Info__description">
        <p>
          Participa e inspírate para innovar y mejorar la interacción entre
          clientes y marcas con historias de éxito de empresas del ámbito
          financiero en América Latina.
        </p>

        <p>¡Te esperamos!</p>
      </div>

      <figure className="Info__banner">
        <img
          src={companiesImg}
          alt="Imagen de empresas que apoyan el Webinar"
        />
      </figure>
    </div>
  );
};

export default Info;
