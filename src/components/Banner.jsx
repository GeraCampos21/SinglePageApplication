// components/Banner.jsx
export default function Banner() {
  return (
    <>
      <div className="flex justify-center items-center lg:justify-start  mb-4 px-2  md:px-0 space-x-2">

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

      <section className="grid grid-cols-2 gap-2 mb-6 lg:grid-cols-4   ">

        <div className="bg-spotify-lightgray flex flex-row gap-2 rounded-md">
          <img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b153a935fb9526d6c37bedfd" className=" rounded w-15 h-12" />
          <p className="font-semibold text-sm flex mt-3   "> Tus me gustas</p>
        </div>

        <div className="bg-spotify-lightgray flex flex-row gap-2 rounded-md">
          <img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b153a935fb9526d6c37bedfd" className=" rounded w-15 h-12" />
          <p className="font-semibold text-sm flex mt-3   "> Tus me gustas</p>
        </div>
        <div className="bg-spotify-lightgray flex flex-row gap-2 rounded-md">
          <img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b153a935fb9526d6c37bedfd" className=" rounded w-15 h-12" />
          <p className="font-semibold text-sm flex mt-3   "> Tus me gustas</p>
        </div>

        <div className="bg-spotify-lightgray flex flex-row gap-2 rounded-md">
          <img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b153a935fb9526d6c37bedfd" className=" rounded w-15 h-12" />
          <p className="font-semibold text-sm flex mt-3   "> Tus me gustas</p>
        </div>
        <div className="bg-spotify-lightgray flex flex-row gap-2 rounded-md">
          <img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b153a935fb9526d6c37bedfd" className=" rounded w-15 h-12" />
          <p className="font-semibold text-sm flex mt-3   "> Tus me gustas</p>
        </div>

        <div className="bg-spotify-lightgray flex flex-row gap-2 rounded-md">
          <img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b153a935fb9526d6c37bedfd" className=" rounded w-15 h-12" />
          <p className="font-semibold text-sm flex mt-3   "> Tus me gustas</p>
        </div>
        <div className="bg-spotify-lightgray flex flex-row gap-2 rounded-md">
          <img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b153a935fb9526d6c37bedfd" className=" rounded w-15 h-12" />
          <p className="font-semibold text-sm flex mt-3   "> Tus me gustas</p>
        </div>

        <div className="bg-spotify-lightgray flex flex-row gap-2 rounded-md">
          <img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b153a935fb9526d6c37bedfd" className=" rounded w-15 h-12" />
          <p className="font-semibold text-sm flex mt-3   "> Tus me gustas</p>
        </div>

      </section>





    </>

  );
}
