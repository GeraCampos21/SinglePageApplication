// Puedes mover esta data a un archivo externo si gustas
import { cards } from "../data/cards"

export default function Carousel() {
    return (
        <>
            <section className="hidden md:block lg:block w-full  ">
               <h3 className="text-2xl text-spotify-white font-bold my-5">Canciones Más Escuchadas</h3>
                <div className="carousel w-full mt-15">

                    {/* Slide 1 */}
                    <div id="slide1" className="carousel-item relative w-full gap-6 px-6">
                        <div className="grid grid-cols-8 gap-7 ">
                            {cards.slice(0, 8).map((card, index) => (
                                <div key={index} className="text-center">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-40 h-40 rounded-lg object-cover"
                                    />
                                    <p className="text-white text-sm font-semibold mt-2">{card.title}</p>
                                </div>
                            ))}
                        </div>

                        <div className="absolute left-8 right-14 top-1/4 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div id="slide2" className="carousel-item relative w-full gap-6 px-6">
                        <div className="grid grid-cols-8 gap-7">
                            {cards.slice(8, 16).map((card, index) => (
                                <div key={index} className="text-center">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-40 h-40 rounded-lg object-cover"
                                    />
                                    <p className="text-white text-sm font-semibold mt-2">{card.title}</p>
                                </div>
                            ))}
                        </div>

                        <div className="absolute left-8 right-14 top-1/4 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div id="slide3" className="carousel-item relative w-full gap-6 px-6">
                        <div className="grid grid-cols-8 gap-7">
                            {cards.slice(16, 24).map((card, index) => (
                                <div key={index} className="text-center">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-40 h-40 rounded-lg object-cover"
                                    />
                                    <p className="text-white text-sm font-semibold mt-2">{card.title}</p>
                                </div>
                            ))}
                        </div>

                        <div className="absolute left-8 right-14 top-1/4 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}