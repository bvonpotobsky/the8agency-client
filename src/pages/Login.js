import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "@styles/pages/Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ initialValues });

  const [isError, setIsError] = useState(false);

  const onSubmit = async (data) => {
    const adminData = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await axios.post(
        "http://localhost:3005/api/v1/auth/login",
        adminData
      );

      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/auth/backoffice");
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
  };

  return (
    <section className="Login">
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="Form__title">¡Ingresa al administrador!</h3>

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
            Contraseña
            <input
              type="password"
              placeholder="***********"
              {...register("password", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
          </label>
          {errors.firstName && errors.firstName.type === "required" && (
            <span className="Form__error">La contraseña es obligatoria</span>
          )}
        </div>

        <input className="Form__button" type="submit" value="Iniciar sesión" />

        {isError && (
          <span className="Form__error">
            Lo sentimos, hubo un error al ingresar.
          </span>
        )}
      </form>
    </section>
  );
};

export default Login;
