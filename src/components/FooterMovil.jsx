// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full fixed bottom-0  p-4 text-sm text-center sm:hidden bg-spotify-dark/65">
      <section className=" flex justify-between bg-spotify-turquesa rounded-lg">
        <figure className="w-14 h-14 flex gap-2 flex-shrink-0">
          <img
            src="data:image/jpeg;base64,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"
            alt="cover"
            className="rounded-md w-16 h-12 object-cover m-1"
          />

          <div className="w-24 h-8 flex-shrink-0 text-xs  mt-1">
            <p>Blinding Lights</p>
            <p>Canción de The Weeknd. 2020</p>
          </div>
        </figure>

        <div className="flex flex-shrink-0  justify-end gap-2 m-3">
          <figure className="flex flex-col justify-center items-center w-6 h-6 mt-1 ">
            <img
              src="/speaker.svg"
              alt="opciones"
              className="w-16 h-12 object-contain "
            />
          </figure>

          <figure className="flex flex-col justify-center items-center   w-6 h-6 mt-1">
            <img
              src="/check.svg"
              alt="opciones"
              className="w-16 h-12 object-contain "
            />
          </figure>

          <figure className="flex flex-col justify-center items-center  w-6 h-6 mt-1">
            <img
              src="/play.svg"
              alt="opciones"
              className="w-16 h-12 object-contain "
            />
          </figure>
        </div>
      </section>

      <div className="flex justify-between items-center text-xs    mt-5">

        <figure className="flex flex-col justify-center items-center w-6 h-6 mt-1 ">
          <img
            src="/home.svg"
            alt="opciones"
            className="w-full h-full object-contain "
          />
          <p className="mb-2">Inicio</p>
        </figure>

        <figure className="flex flex-col justify-center items-center   w-6 h-6 mt-1">
          <img
            src="/search.svg"
            alt="opciones"
            className="w-full h-full object-contain "
          />
          <p className="mb-2">Buscar</p>
        </figure>

        <figure className="flex flex-col justify-center items-center     w-6 h-6 mt-1">
          <img
            src="/library.svg"
            alt="opciones"
            className="w-full h-full object-contain "
          />
          <p className="mb-2"> Biblioteca</p>
        </figure>


        <figure className=" flex flex-col justify-center items-center    w-6 h-6 mt-1">
          <img
            src="/create.svg"
            alt="opciones"
            className="w-full h-full object-contain "
          />
          <p className="mb-2">Crear</p>
        </figure>

      </div>
    </footer>
  );
}
