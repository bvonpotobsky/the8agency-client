import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import "@styles/components/Form.scss";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      const response = await axios.post(
        "http://localhost:3005/api/v1/assistant",
        data
      );

      if (response.status === 201) {
        setIsSubmitting(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
            })}
          />
        </label>
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
            })}
          />
        </label>
      </div>

      <div className="Form__group">
        <label>
          Correo electrónico del trabajo
          <input
            type="email"
            placeholder="johngalt@gmail.com"
            {...register("email", { required: true })}
          />
        </label>
      </div>

      <div className="Form__group">
        <label>
          País
          <select {...register("country", { required: true })}>
            <option value="">Selecciona un país</option>
            <option value="argentina">Argentina</option>
            <option value="brasil">Brasil</option>
            <option value="other">other</option>
          </select>
        </label>
      </div>

      <div className="Form__group">
        <label>
          Numero de teléfono
          <input
            type="tel"
            placeholder="+543531234567"
            {...register("phone", { required: true })}
          />
        </label>
      </div>

      <div className="Form__group">
        <label>
          Puesto de trabajo
          <input
            type="text"
            placeholder="Software Developer"
            {...register("jobTitle", { required: true })}
          />
        </label>
      </div>

      {/* errors will return when field validation fails  */}
      {isSubmitting && (
        <span className="Form__submitting">Te estamos inscribiendo...</span>
      )}

      <input className="Form__button" type="submit" value="Inscríbete" />
    </form>
  );
};

export default Form;
