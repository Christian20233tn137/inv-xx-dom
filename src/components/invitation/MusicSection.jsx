import { useState, useRef, useEffect } from "react";
import { Play, Pause, Music2 } from "lucide-react";
import { invitationData } from "../../data/invitationData";

export default function MusicSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(invitationData.song);
    audioRef.current = audio;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress(
        audio.duration ? (audio.currentTime / audio.duration) * 100 : 0,
      );
    };
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.pause();
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((e) => console.error("Error playing:", e));
      setIsPlaying(true);
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    audio.currentTime = (x / rect.width) * audio.duration;
  };

  const fmt = (s) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <section className="py-24 px-4 bg-quartz-50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Sutil halo de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/20 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-lg mx-auto w-full flex flex-col items-center gap-10 animate-fade-in-up">
        {/* Adorno superior: líneas + icono */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-[1px] bg-primary-300"></div>
          <Music2 size={16} strokeWidth={1} className="text-primary-400" />
          <div className="w-12 h-[1px] bg-primary-300"></div>
        </div>

        {/* Heading */}
        <div className="text-center -mt-4">
          <span className="font-elegant text-5xl md:text-6xl text-primary-600 block mb-2">
            Déjate llevar
          </span>
          <h3 className="text-xs font-sans tracking-[0.3em] text-primary-700/60 uppercase">
            La melodía de este momento
          </h3>
        </div>

        {/* Icono disco — limpio, sin anillos */}
        <div
          className="w-24 h-24 rounded-full bg-white/60 backdrop-blur-md border-[1px] border-primary-200/60 flex items-center justify-center shadow-[0_4px_20px_rgba(43,49,27,0.07)] transition-all duration-700"
          style={{
            animation: isPlaying ? "spinSlow 10s linear infinite" : "none",
          }}
        >
          <Music2
            size={34}
            strokeWidth={1}
            className={`transition-colors duration-500 ${isPlaying ? "text-primary-500" : "text-primary-400"}`}
          />
        </div>

        {/* Barras ecualizador — minimalistas */}
        <div className="flex items-end gap-[3px] h-6 -mt-4">
          {isPlaying
            ? [1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-[3px] rounded-full bg-primary-400"
                  style={{
                    animation: `eqBar ${0.4 + i * 0.09}s ease-in-out infinite alternate`,
                    minHeight: 4,
                  }}
                />
              ))
            : [5, 10, 7, 12, 6].map((h, i) => (
                <div
                  key={i}
                  className="w-[3px] rounded-full bg-primary-300"
                  style={{ height: h, opacity: 0.45 }}
                />
              ))}
        </div>

        {/* Tarjeta del reproductor */}
        <div className="w-full bg-white/60 backdrop-blur-md border-[1px] border-primary-200/50 shadow-[0_8px_30px_rgba(43,49,27,0.06)] p-8 relative">
          {/* Esquinas decorativas */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-[1px] border-l-[1px] border-primary-400/50"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-[1px] border-r-[1px] border-primary-400/50"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1px] border-l-[1px] border-primary-400/50"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[1px] border-r-[1px] border-primary-400/50"></div>

          {/* Info de la canción */}
          <div className="text-center mb-5">
            <p className="font-serif text-primary-950 text-base mb-1 tracking-wide">
              {invitationData.songTitle || "Mi Canción"}
            </p>
            <p className="font-sans text-[10px] tracking-[0.2em] text-primary-600/55 uppercase">
              {invitationData.songArtist || "Especialmente para ti"}
            </p>
          </div>

          {/* Divisor vertical sutil */}
          <div className="w-[1px] h-5 bg-primary-300 mx-auto mb-5"></div>

          {/* Barra de progreso */}
          <div
            className="w-full h-[1px] bg-primary-200 cursor-pointer relative mb-2"
            onClick={handleSeek}
          >
            <div
              className="absolute left-0 top-0 h-full bg-primary-500 transition-[width] duration-300 linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Tiempos */}
          <div className="flex justify-between text-[10px] font-sans text-primary-600/45 mb-7 tracking-wide">
            <span>{fmt(currentTime)}</span>
            <span>{fmt(duration)}</span>
          </div>

          {/* Botón play/pausa */}
          <div className="flex justify-center">
            <button
              onClick={togglePlay}
              className="w-14 h-14 rounded-full bg-white/70 backdrop-blur-md border-[1px] border-primary-300/70 flex items-center justify-center shadow-[0_4px_16px_rgba(43,49,27,0.08)] hover:bg-primary-50 transition-all duration-300 focus:outline-none active:scale-95"
              aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
            >
              {isPlaying ? (
                <Pause
                  size={20}
                  strokeWidth={1.5}
                  className="text-primary-700"
                />
              ) : (
                <Play
                  size={20}
                  strokeWidth={1.5}
                  className="text-primary-700 translate-x-[1px]"
                />
              )}
            </button>
          </div>
        </div>

        {/* Cita de cierre */}
        <p className="font-elegant text-center text-4xl text-primary-600/45 leading-snug">
          "La música dice lo que las palabras no pueden."
        </p>

      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes eqBar {
          from { height: 4px; }
          to   { height: 18px; }
        }
      `}</style>
    </section>
  );
}
