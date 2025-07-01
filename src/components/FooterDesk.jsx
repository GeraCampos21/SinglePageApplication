import {
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Shuffle,
    Repeat,
    Volume2,
    ListMusic,
    Maximize2,
    Mic2,
    Laptop2,
    Plus,
} from "lucide-react";


export default function FooterPlayer() {
    return (
        <footer className="w-full h-24 bg-black text-white items-center justify-between px-4 md:px-8 hidden md:flex">

            {/* IZQUIERDA */}
            <div className="flex items-center gap-3 w-1/3 min-w-0">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkChFpxPFTsPr8UrQ91V6AUCtATN38_2YMJQ&s"
                    alt="cover"
                    className="w-12 h-12 rounded"
                />
                <div className="flex flex-col overflow-hidden">
                    <p className="text-sm font-semibold truncate">Take on Me</p>
                    <p className="text-xs text-zinc-400 truncate">Music video • a-ha</p>
                </div>
                <Plus className="w-4 h-4 ml-2 text-zinc-400 cursor-pointer" />
            </div>

            {/* CENTRO */}
            <div className="flex flex-col items-center w-1/3 max-w-xl">
                {/* Controles */}
                <div className="flex items-center gap-4">
                    <Shuffle className="w-4 h-4 text-zinc-400" />
                    <SkipBack className="w-5 h-5" />
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black">
                        <Pause className="w-4 h-4" />
                    </button>
                    <SkipForward className="w-5 h-5" />
                    <Repeat className="w-4 h-4 text-zinc-400" />
                </div>

                {/* Barra de progreso */}
                <div className="flex items-center gap-2 mt-1 text-xs text-zinc-400 w-full">
                    <span>3:28</span>
                    <div className="h-1 flex-1 bg-zinc-700 rounded-full overflow-hidden">
                        <div className="bg-white h-full w-[75%]"></div>
                    </div>
                    <span>3:45</span>
                </div>
            </div>

            {/* DERECHA */}
            <div className="hidden md:flex items-center gap-4 w-1/3 justify-end text-zinc-400">
                <Laptop2 className="w-4 h-4 text-green-500" />
                <Mic2 className="w-4 h-4" />
                <ListMusic className="w-4 h-4" />
                <Volume2 className="w-4 h-4" />
                <div className="h-1 w-24 bg-zinc-700 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-[60%]"></div>
                </div>
                <Maximize2 className="w-4 h-4" />
            </div>
        </footer>
    );
}
