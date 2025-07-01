// components/MadeForYou.jsx
export default function Carrusel() {
  return (
    <section className="mb-32  sm:hidden">
      <h3 className="text-2xl text-spotify-white font-bold mb-2">Vuelve a tu musica</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 h-64 ">
        <div className="carousel rounded-box w-84 space-x-3">
          <div className="carousel-item w-1/2 flex flex-col justify-between ">
            <img
              src="https://i.ytimg.com/vi/-VnIClI6HPI/maxresdefault.jpg"
              className="w-full h-48 rounded-lg" />
            <p className=" text-center text-lg font-bold "> Mix de musica electronica</p>
          </div>

          <div className="carousel-item w-1/2 flex flex-col justify-between ">
            <img
              src="https://mundoindie.mx/wp-content/uploads/2025/06/Portada-Alta-1024x1024.jpg"
              className="w-full h-48 rounded-lg" />
            <p className=" text-center text-lg font-bold "> Playlist- de Exitos de Mana</p>
          </div>

          <div className="carousel-item w-1/2 flex flex-col justify-between ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRjHbO7gQImkpC94y9vVeKuWRFKRvydLItg&s"
              className="w-full h-48 rounded-lg" />
              <p className=" text-center text-lg font-bold ">  Mejores canciones de Imagen Dragons</p>
          </div>


          <div className="carousel-item w-1/2 flex flex-col justify-between ">
            <img
              src="https://external-preview.redd.it/FiKcajy39PUS5-11XlRLq9SsBbfS8rHyEm4oOF2ROtw.jpg?auto=webp&s=4d18e52d822bfae60af2050b73608ef73074100f"
              className="w-full h-48 rounded-lg" />
              <p className=" text-center text-lg font-bold "> Playlist- Twenty One Pilots</p>
          </div>
        </div>
      </div>

      {/* Carrusel uno */}

      <h3 className="text-2xl text-spotify-white font-bold mb-2 mt-6">Álbumes con canciones que te gustan</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 h-64 ">
        <div className="carousel rounded-box w-84 space-x-3">
           <div className="carousel-item w-1/2 flex flex-col justify-between ">
            <img
              src="https://i.scdn.co/image/ab67616d0000b2738137d1f6ee9029bf4fe640eb"
              className="w-full h-48 rounded-lg" />
            <p className=" text-center text-lg font-bold "> Corridos Tumbados - Album by Natanael Cano</p>
          </div>

          <div className="carousel-item w-1/2 flex flex-col justify-between ">
            <img
              src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846a887d46baceae2b1f8211fc"
              className="w-full h-48 rounded-lg" />
            <p className=" text-center text-lg font-bold "> Musica de Banda - Mejores Canciones de Banda</p>
          </div>

          <div className="carousel-item w-1/2 flex flex-col justify-between ">
            <img
              src="https://img.freepik.com/vector-premium/logotipo-musica-rock_1895-231.jpg"
              className="w-full h-48 rounded-lg" />
              <p className=" text-center text-lg font-bold ">  Las 10 mejores canciones de rock de los 80</p>
          </div>


          <div className="carousel-item w-1/2 flex flex-col justify-between ">
            <img
              src="https://i.ytimg.com/vi/LwAtWdT1I8Q/maxresdefault.jpg"
              className="w-full h-48 rounded-lg" />
              <p className=" text-center text-lg font-bold "> Shakira - Las Mujeres Ya No Lloran</p>
          </div>
        </div>
      </div>

      {/* Carrusel dos */}

      <h3 className="text-2xl text-spotify-white font-bold mb-2 mt-6">Listas</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 h-64 mb-6 ">
        <div className="carousel rounded-box w-84 space-x-3">

          <div className=" w-1/2 flex flex-col justify-between ">
            <img
              src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_sv_default.jpg"
              className="w-full h-48 rounded-lg" />
            <p className=" text-justify text-xs font-bold ">Tu actualización diaria de las canciones más escuchadas ahora mismo en El salvador.</p>
          </div>


          <div className="w-1/2 flex flex-col justify-between ">
            <img
              src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg"
              className="w-full h-48 rounded-lg" />
            <p className=" text-justify text-xs font-bold "> Tu actualización diaria de las canciones más escuchadas ahora mismo en Global.</p>
          </div>

        </div>
      </div>

      {/* card */}

      <div className="card bg-spotify-gray w-84 h-48 shadow-sm">
        <section className="flex justify-between items-start h-full p-4 space-x-4">

          <figure className="w-24 h-28 flex-shrink-0">
            <img
              src="https://i.scdn.co/image/ab67616d00001e02378f9769891c17741446a110"
              alt="cover"
              className="rounded-xl w-full h-full object-cover"
            />
          </figure>

          <div className="flex-1 flex flex-col justify-start text-white">
            <p className="text-sm font-semibold">Playlist</p>
            <p className="text-xs  mt-1">
              50 canciones. Maná, Enrique Iglesias, Alejandro Sanz, La Oreja de Van Gogh...
            </p>
          </div>

          <figure className="w-6 h-6 mt-1">
            <img
              src="/ellipsis.svg"
              alt="opciones"
              className="w-full h-full object-contain "
            />
          </figure>

        </section>

        {/* Botón al fondo */}

        <div className="card-actions justify-end px-4 pb-2">
          <button className="btn btn-primary">Reproducir</button>
        </div>

      </div>

    </section>
  );
}
