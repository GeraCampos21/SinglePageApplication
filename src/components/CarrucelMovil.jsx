// components/MadeForYou.jsx
export default function Carrusel() {
  return (
    <section className="mb-32  sm:hidden">
      <h3 className="text-2xl text-spotify-white font-bold mb-2">Vuelve a tu musica</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 h-64 ">
        <div className="carousel rounded-box w-96 space-x-3">
          <div className="carousel-item w-1/2 flex flex-col justify-between ">
            <img
              src="https://media.istockphoto.com/id/638550604/es/foto/dj-tocando-el-tocadiscos.jpg?s=612x612&w=0&k=20&c=WjcKog3U6CK3tjFehIRHY4Sbv8pPl22d12D9vuBIcYI="
              className="w-full h-48 rounded-lg" />
            <p className=" text-center text-lg font-bold "> Mix de musica electronica</p>
          </div>

          <div className="carousel-item w-1/2 flex flex-col justify-between ">
            <img
              src="https://play-lh.googleusercontent.com/uE8QcGXF8UN6cUG4KcgLhzqU2hOd-wH0ugiynJzN-ciEkV4d9SGbsDVENPP0i5wL6IA6=w240-h480-rw"
              className="w-full h-48 rounded-lg" />
            <p className=" text-center text-lg font-bold "> Tu mix de musica cumbia</p>
          </div>

          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="w-full" />
          </div>


          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              className="w-full" />
          </div>
        </div>
      </div>

      {/** Carrusel dos */}

      <h3 className="text-2xl text-spotify-white font-bold mb-2 mt-6">Álbumes con canciones que te gustan</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 h-64 ">
        <div className="carousel rounded-box w-96 space-x-3">
          <div className="carousel-item w-1/2 flex flex-col justify-between ">
            <img
              src="https://media.istockphoto.com/id/638550604/es/foto/dj-tocando-el-tocadiscos.jpg?s=612x612&w=0&k=20&c=WjcKog3U6CK3tjFehIRHY4Sbv8pPl22d12D9vuBIcYI="
              className="w-full h-48 rounded-lg" />
            <p className=" text-center text-lg font-bold "> Mix de musica electronica</p>
          </div>

          <div className="carousel-item w-1/2 flex flex-col justify-between ">
            <img
              src="https://play-lh.googleusercontent.com/uE8QcGXF8UN6cUG4KcgLhzqU2hOd-wH0ugiynJzN-ciEkV4d9SGbsDVENPP0i5wL6IA6=w240-h480-rw"
              className="w-full h-48 rounded-lg" />
            <p className=" text-center text-lg font-bold "> Tu mix de musica cumbia</p>
          </div>

          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="w-full" />
          </div>


          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              className="w-full" />
          </div>
        </div>
      </div>

      {/** Carrusel dos */}

      <h3 className="text-2xl text-spotify-white font-bold mb-2 mt-6">Listas</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 h-64 mb-6 ">
        <div className="carousel rounded-box w-96 space-x-3">

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

      {/** card */}

      <div className="card bg-spotify-gray w-96 h-48 shadow-sm">
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

        {/* Opcional: Botón al fondo */}

        <div className="card-actions justify-end px-4 pb-2">
          <button className="btn btn-primary">Reproducir</button>
        </div>

      </div>

    </section>
  );
}
