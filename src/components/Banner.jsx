// components/Banner.jsx
import { libraryData } from "../data/libraryData";
import { MoreHorizontal } from "lucide-react";

export default function Banner() {
  return (
    <>
      <div className="hidden lg:block">
        <div className=" bg-gradient-to-r from-green-900 to-green-700 rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start justify-between text-white shadow-md">

          {/* Imagen del álbum */}
          <div className="w-40 h-40 min-w-[10rem] mr-6">
            <img
              src="https://i.scdn.co/image/ab67616d0000b27396027f6ac89acd32cfa65e25"
              alt="FERXXO VOL X"
              className="rounded"
            />
          </div>

          {/* Información del álbum */}
          <div className="flex-1">
            <p className="uppercase text-sm text-white/80 mb-1">Album</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2">FERXXO VOL X: <span className="text-white">Sagrado</span></h1>
            <a href="#" className="text-white underline hover:text-green-300 font-semibold">Feid</a>
            <p className="mt-2 text-white/90 text-sm">¡Mor El Nuevo Álbum Del Ferxxo Llegó, escúchalo aquí!</p>

            {/* Botones */}
            <div className="mt-4 flex gap-2 items-center">
              <button className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-2 rounded-full">
                Play
              </button>
              <button className="border border-white px-5 py-2 rounded-full text-white hover:bg-white hover:text-black transition">
                Save
              </button>
              <button className="hover:bg-white/10 p-2 rounded-full">
                <MoreHorizontal className="text-white" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Botones del menu para movil y escritorio */}
      <div className="flex justify-center items-center lg:justify-start  mb-4 px-2  md:px-0 space-x-2 mt-3">
        <button className=" bg-spotify-lightgray hover:bg-spotify-green rounded-full text-sm p-1.5 px-3.5 mt-3">
          Todas
        </button>

        <button className="bg-spotify-lightgray hover:bg-spotify-green rounded-full text-xs p-2 px-3 mt-3">
          Música
        </button>

        <button className="bg-spotify-lightgray hover:bg-spotify-green rounded-full text-xs p-2 mt-3">
          Podcasts
        </button>

      </div>

      {/* Las playlist como favoritas */}
      <section className="grid grid-cols-2 gap-2 mb-6 lg:grid-cols-4  mt-5 ">

        {libraryData.map((item, index) => (
          <div
            key={index}
            className="bg-spotify-lightgray flex flex-row gap-2 rounded-md overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="rounded w-[60px] h-[60px] object-cover"
            />
            <p className="font-semibold text-sm flex items-center truncate">
              {item.title}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
