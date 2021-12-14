import React from "react";
import { useForm } from "react-hook-form";

import "@styles/components/Form.scss";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("firstName")); // watch input value by passing the name of it

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="Form__title">¡Inscríbete y reserva tu lugar ahora!</h3>

      <div className="Form__group">
        <label>
          Nombre
          <input {...register("firstName", { required: true })} />
        </label>
      </div>

      <div className="Form__group">
        <label>
          Apellido
          <input {...register("lastName", { required: true })} />
        </label>
      </div>

      <div className="Form__group">
        <label>
          Correo electrónico del trabajo
          <input type="email" {...register("email", { required: true })} />
        </label>
      </div>

      <div className="Form__group">
        <label>
          País
          <select {...register("country", { required: true })}>
            <option value="argentina">Argentina</option>
            <option value="brasil">Brasil</option>
            <option value="other">other</option>
          </select>
        </label>
      </div>

      <div className="Form__group">
        <label>
          Correo electrónico del trabajo
          <input type="email" {...register("email", { required: true })} />
        </label>
      </div>

      <div className="Form__group">
        <label>
          Numero de teléfono
          <input type="tel" {...register("phone", { required: true })} />
        </label>
      </div>

      <div className="Form__group">
        <label>
          Puesto de trabajo
          <input type="text" {...register("jobTitle", { required: true })} />
        </label>
      </div>

      {/* errors will return when field validation fails  */}
      {errors.firstName && <span>This field is required</span>}
      {console.log(errors.firstName)}

      <input className="Form__button" type="submit" value="Inscríbete" />
    </form>
  );
};

export default Form;
