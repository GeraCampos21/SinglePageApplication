import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [customError, setCustomError] = useState("");
  const navigate = useNavigate();
  const { loginPass } = UserAuth()

  const onSubmit = async ({ email, password }) => {
    const success = await loginPass({ email, password });

    if (success) {
      navigate("/home");
    } else {
      Swal.fire({
        title: "Datos Incorrectos ",
        icon: 'warning',
        draggable: true,
        background: '#1F1F1F',
        color: "#fff",
        confirmButtonColor: "#3f5f95",
      });
      setCustomError("Usuario o contraseña incorrectos.");
      reset()
      setTimeout(() => {
        setCustomError("");
      }, 3000);
    }
  };

  const formulario = () => {
    navigate("/Formulario")
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-2 flex flex-nowrap justify-center space-x-2">
          <section>
            <img
              src="https://media.istockphoto.com/id/1257112584/es/vector/clave-de-agudos-y-notas-musicales.jpg?s=612x612&w=0&k=20&c=RidZ1wVtsof2MW2srBEh1vKUR4d1S_tkHmpdWGbpQGg="
              alt="Kodigo Music"
              className="h-16 mx-auto rounded-lg"
            />
          </section>
          <section className="size-24 text-2xl">
            <p>Kodigo Music</p>
          </section>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Inicia sesión en Kodigo Music</h1>
        </div>

        <div className="space-y-4 mb-8">
          <button className="w-full flex items-center justify-center border border-white py-2 rounded-full gap-2 hover:bg-white hover:text-black transition">
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Continuar con Google
          </button>

          <button className="w-full flex items-center justify-center border border-white py-2 rounded-full gap-2 hover:bg-white hover:text-black transition">
            <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
            Continuar con Facebook
          </button>

          <button className="w-full flex items-center justify-center border border-white py-2 rounded-full gap-2 hover:bg-white hover:text-black transition">
            <img src="/apple.svg" alt="Apple" className="w-5 h-5" />
            Continuar con Apple
          </button>
        </div>

        {/* Formulario de correo */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Correo electrónico
            </label>
            <input
              id="1"
              {...register("email", {
                required: "Este campo es obligatorio",
              })}
              placeholder="Correo electrónico"
              className="w-full px-4 py-2 bg-zinc-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <label htmlFor="password" className="block text-sm font-medium mb-1 mt-3">
              Contraseña
            </label>
            <input
              id="2"
              {...register("password", {
                required: "Este campo es obligatorio",
              })}
              placeholder="Contraseña"
              className="w-full px-4 py-2 bt-3 mt-1 bg-zinc-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Error de validación */}
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Error personalizado */}
          {customError && (
            <div className="bg-red-600 text-white p-2 rounded text-sm text-center">
              {customError}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-2 rounded-full"
          >
            Continuar
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          ¿No tienes cuenta?{' '}
          <button onClick={formulario} className="underline text-white hover:text-green-500">
            Suscríbete a Kodigo Music
          </button>
        </p>
      </div>
    </div>
  );
}
