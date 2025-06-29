

export default function Carousel() {
    return (
        <>
            <section className="hidden md:block lg:block w-full">

                <div className="carousel">
                    <div id="slide1" className="carousel-item relative w-full gap-7 ">

                        <div className="  ">
                            <img
                                src="https://media.istockphoto.com/id/638550604/es/foto/dj-tocando-el-tocadiscos.jpg?s=612x612&w=0&k=20&c=WjcKog3U6CK3tjFehIRHY4Sbv8pPl22d12D9vuBIcYI="
                                className="w-52 h-48 rounded-lg" />
                            <p className=" text-center text-lg font-bold "> Mix de musica electronica</p>
                        </div>

                        <div className="">
                            <img
                                src="https://play-lh.googleusercontent.com/uE8QcGXF8UN6cUG4KcgLhzqU2hOd-wH0ugiynJzN-ciEkV4d9SGbsDVENPP0i5wL6IA6=w240-h480-rw"
                                className="w-52  h-48 rounded-lg" />
                            <p className=" text-center text-lg font-bold "> Tu mix de musica cumbia</p>
                        </div>

                       <div className="  ">
                            <img
                                src="https://media.istockphoto.com/id/638550604/es/foto/dj-tocando-el-tocadiscos.jpg?s=612x612&w=0&k=20&c=WjcKog3U6CK3tjFehIRHY4Sbv8pPl22d12D9vuBIcYI="
                                className="w-52  h-48 rounded-lg" />
                            <p className=" text-center text-lg font-bold "> Mix de musica electronica</p>
                        </div>

                        <div className="">
                            <img
                                src="https://play-lh.googleusercontent.com/uE8QcGXF8UN6cUG4KcgLhzqU2hOd-wH0ugiynJzN-ciEkV4d9SGbsDVENPP0i5wL6IA6=w240-h480-rw"
                                className="w-52 h-48 rounded-lg" />
                            <p className=" text-center text-lg font-bold "> Tu mix de musica cumbia</p>
                        </div>

                         <div className="">
                            <img
                                src="https://play-lh.googleusercontent.com/uE8QcGXF8UN6cUG4KcgLhzqU2hOd-wH0ugiynJzN-ciEkV4d9SGbsDVENPP0i5wL6IA6=w240-h480-rw"
                                className="w-52 h-48 rounded-lg" />
                            <p className=" text-center text-lg font-bold "> Tu mix de musica cumbia</p>
                        </div>

                        <div className="  ">
                            <img
                                src="https://media.istockphoto.com/id/638550604/es/foto/dj-tocando-el-tocadiscos.jpg?s=612x612&w=0&k=20&c=WjcKog3U6CK3tjFehIRHY4Sbv8pPl22d12D9vuBIcYI="
                                className="w-52  h-48 rounded-lg" />
                            <p className=" text-center text-lg font-bold "> Mix de musica electronica</p>
                        </div>


                         <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>

                    </div>
                    <div id="slide2" className="carousel-item relative w-full">


                        <img
                            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">


                        <img
                            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                   
                </div>

            </section>
        </>
    )
}