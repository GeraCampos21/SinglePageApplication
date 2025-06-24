import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [customError, setCustomError] = useState("");

  const onSubmit = (data) => {
    if (data.email.trim() !== "") {
      setCustomError("");
      navigate("/home"); // Redirige a la página de inicio de kodigo Music

      console.log(data);


    } else {
      setCustomError("El campo no puede estar vacío.");
    }
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
          <h1 className="text-3xl font-bold">Suscribete a Kodigo Music</h1>
        </div>

        {/* Formulario de correo */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Correo electrónico 
            </label>
            <input
              id="email"
              {...register("email", {
                required: "Este campo es obligatorio",
              })}
              placeholder="Correo electrónico"
              className="w-full px-4 py-2 bg-zinc-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
           
            <label htmlFor="Nombre de usuario" className="block text-sm font-medium mb-1 mt-3">
              Nombre usuario
            </label>
            <input
              id="NombreUsuario"
              {...register("NombreUsuario", {
                required: "Este campo es obligatorio",
              })}
              placeholder="Nombre usuario"
              className="w-full px-4 py-2 bt-3 mt-1 bg-zinc-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

             <label htmlFor="contraseña" className="block text-sm font-medium mb-1 mt-3">
              Contraseña
            </label>
            <input
              id="contraseña"
              {...register("contraseña", {
                required: "Este campo es obligatorio",
              })}
              placeholder="Contraseña"
              className="w-full px-4 py-2 bt-3 mt-1 bg-zinc-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

             <label htmlFor="edad" className="block text-sm font-medium mb-1 mt-3">
              Edad
            </label>
            <input
              id="edad"
              {...register("edad", {
                required: "Este campo es obligatorio",
              })}
              placeholder="edad"
              className="w-full px-4 py-2 bt-3 mt-1 bg-zinc-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <label htmlFor="genero" className="block text-sm font-medium mb-1 mt-3">
              Genero
            </label>
            <input
              id="genero"
              {...register("genero", {
                required: "Este campo es obligatorio",
              })}
              placeholder="genero"
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
      </div>
    </div>
  );
}
