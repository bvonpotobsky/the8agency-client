import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import Modal from "@layouts/Modal";

import "@styles/components/Form.scss";

const Form = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    jobTitle: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ initialValues });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // This state is used to show the name in the success message
  const [name, setName] = useState("");

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      const response = await axios.post(
        "http://localhost:3005/api/v1/assistant",
        data
      );

      if (response.status === 201) {
        setIsSubmitting(false);
        setIsModalOpen(true);
        setName(response.data.newAssistant.firstName);
        reset();
      }
    } catch (error) {
      setIsSubmitting(false);
      setIsError(true);
      console.error(error);

      setTimeout(() => {
        setIsError(false);
      }, 2000);
    }
  };

  // Get Latam countries for select input
  const [countries, setCountries] = useState([]);
  useEffect(async () => {
    try {
      const response = await axios.get(
        "https://restcountries.com/v2/regionalbloc/usan"
      );

      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="Form__title">¡Inscríbete y reserva tu lugar ahora!</h3>

        <div className="Form__group">
          <label>
            Nombre
            <input
              type="text"
              placeholder="John"
              {...register("firstName", {
                required: true,
                minLength: 3,
                maxLength: 30,
                valueTrim: true,
              })}
            />
          </label>
          {errors.firstName && errors.firstName.type === "required" && (
            <span className="Form__error">El nombre es obligatorio</span>
          )}
        </div>

        <div className="Form__group">
          <label>
            Apellido
            <input
              type="text"
              placeholder="Galt"
              {...register("lastName", {
                required: true,
                minLength: 3,
                maxLength: 30,
                valueTrim: true,
              })}
            />
          </label>
          {errors.lastName && errors.lastName.type === "required" && (
            <span className="Form__error">El apellido es obligatorio</span>
          )}
        </div>

        <div className="Form__group">
          <label>
            Correo electrónico del trabajo
            <input
              type="email"
              placeholder="johngalt@gmail.com"
              {...register("email", { required: true, valueTrim: true })}
            />
          </label>
          {errors.email && errors.email.type === "required" && (
            <span className="Form__error">El correo es obligatorio</span>
          )}
        </div>

        <div className="Form__group">
          <label>
            País
            <select {...register("country", { required: true })}>
              <option value="">Selecciona un país:</option>
              {countries.map((country) => (
                <option key={country.name} value={country.translations.es}>
                  {country.translations.es}
                </option>
              ))}
              <option value="Otro">Otro</option>
            </select>
          </label>
          {errors.country && errors.country.type === "required" && (
            <span className="Form__error">El país es obligatorio</span>
          )}
        </div>

        <div className="Form__group">
          <label>
            Numero de teléfono
            <input
              type="tel"
              placeholder="+543531234567"
              {...register("phone", { required: true, valueTrim: true })}
            />
          </label>
          {errors.phone && errors.phone.type === "required" && (
            <span className="Form__error">El teléfono es obligatorio</span>
          )}
        </div>

        <div className="Form__group">
          <label>
            Puesto de trabajo
            <input
              type="text"
              placeholder="Software Developer"
              {...register("jobTitle", { required: true, valueTrim: true })}
            />
          </label>
          {errors.jobTitle && errors.jobTitle.type === "required" && (
            <span className="Form__error">
              El puesto de trabajo es obligatorio
            </span>
          )}
        </div>

        <input className="Form__button" type="submit" value="Inscríbete" />

        {/* errors will return when field validation fails  */}
        {isSubmitting && (
          <span className="Form__submitting">Te estamos inscribiendo...</span>
        )}

        {isError && (
          <span className="Form__error">
            Lo sentimos, hubo un error al enviar su solicitud.
          </span>
        )}
      </form>

      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} firstName={name} />
      )}
    </>
  );
};

export default Form;
