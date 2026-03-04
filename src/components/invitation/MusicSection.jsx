import { useState, useRef, useEffect } from "react";
import { Play, Pause, Music2, Music4, Disc3 } from "lucide-react";
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
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
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
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1e2810 0%, #2D3715 35%, #1a2010 65%, #2B311B 100%)",
      }}
    >
      {/* ── decorative background rings ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {[220, 320, 420, 520].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: size,
              height: size,
              borderColor: `rgba(149,181,74,${0.06 - i * 0.012})`,
            }}
          />
        ))}
      </div>

      {/* ── ambient glow ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(122,152,52,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto px-6 py-16 md:py-20 flex flex-col items-center gap-10">

        {/* ── top label ── */}
        <div className="flex items-center gap-2 opacity-60">
          <div className="h-px w-10" style={{ background: "#95B54A" }} />
          <Music2 size={14} style={{ color: "#95B54A" }} />
          <span className="font-sans text-xs tracking-[0.25em] uppercase" style={{ color: "#B2C28F" }}>
            nuestra melodía
          </span>
          <Music2 size={14} style={{ color: "#95B54A" }} />
          <div className="h-px w-10" style={{ background: "#95B54A" }} />
        </div>

        {/* ── poetic heading ── */}
        <div className="text-center -mt-4">
          <h2 className="font-elegant text-quartz-50 leading-tight" style={{ fontSize: "2.6rem", color: "#F7FDFD" }}>
            Déjate llevar
          </h2>
          <p className="mt-2 font-sans text-sm font-light leading-relaxed opacity-55" style={{ color: "#B2C28F" }}>
            Cierra los ojos, respira y déjate envolver…<br />
            cada nota lleva un pedacito de este momento.
          </p>
        </div>

        {/* ── vinyl / disc icon ── */}
        <div className="relative flex items-center justify-center">
          {/* outer glow ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: 168,
              height: 168,
              background: isPlaying
                ? "radial-gradient(circle, rgba(149,181,74,0.25) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(149,181,74,0.08) 0%, transparent 70%)",
              transition: "background 0.8s ease",
            }}
          />

          {/* disc ring 1 */}
          <div
            className="absolute rounded-full border-2"
            style={{
              width: 144,
              height: 144,
              borderColor: "rgba(149,181,74,0.2)",
              animation: isPlaying ? "spinSlow 8s linear infinite" : "none",
            }}
          />

          {/* disc ring 2 */}
          <div
            className="absolute rounded-full border"
            style={{
              width: 110,
              height: 110,
              borderColor: "rgba(149,181,74,0.15)",
              animation: isPlaying ? "spinSlow 12s linear infinite reverse" : "none",
            }}
          />

          {/* center disc */}
          <div
            className="relative flex items-center justify-center rounded-full"
            style={{
              width: 90,
              height: 90,
              background:
                "radial-gradient(circle at 35% 35%, #3E4D19, #1e2810)",
              border: "2px solid rgba(149,181,74,0.3)",
              boxShadow: isPlaying
                ? "0 0 30px rgba(149,181,74,0.45), inset 0 0 20px rgba(0,0,0,0.5)"
                : "0 4px 20px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.4)",
              transition: "box-shadow 0.6s ease",
              animation: isPlaying ? "spinSlow 4s linear infinite" : "none",
            }}
          >
            <Disc3
              size={36}
              style={{ color: isPlaying ? "#95B54A" : "#5C7326", transition: "color 0.4s ease" }}
              strokeWidth={1.2}
            />
          </div>
        </div>

        {/* ── equalizer bars (visible when playing) ── */}
        <div className="flex items-end gap-1 h-7 -mt-2">
          {isPlaying
            ? [1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                  key={i}
                  className="w-1.5 rounded-full"
                  style={{
                    background: "linear-gradient(to top, #5C7326, #95B54A)",
                    animation: `eqBar ${0.35 + i * 0.07}s ease-in-out infinite alternate`,
                    minHeight: 4,
                  }}
                />
              ))
            : [5, 10, 7, 14, 6, 12, 8].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 rounded-full opacity-20"
                  style={{ height: h, background: "#95B54A" }}
                />
              ))}
        </div>

        {/* ── player card ── */}
        <div
          className="w-full rounded-2xl p-4"
          style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(149,181,74,0.18)",
          }}
        >
          {/* song info - CORREGIDO: centrado verticalmente */}
          <div className="flex items-center mb-3">
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <p className="text-white font-sans font-semibold text-sm truncate leading-tight">
                {invitationData.songTitle || "Nuestra Canción"}
              </p>
              <p className="font-sans text-xs opacity-45 truncate leading-tight mt-0.5" style={{ color: "#B2C28F" }}>
                {invitationData.songArtist || "Especialmente para ti ♡"}
              </p>
            </div>
          </div>

          {/* progress bar */}
          <div
            className="w-full h-1.5 rounded-full mb-2 cursor-pointer relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.12)" }}
            onClick={handleSeek}
          >
            <div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #5C7326, #95B54A)",
                transition: "width 0.3s linear",
              }}
            />
          </div>

          {/* timestamps */}
          <div
            className="flex justify-between text-xs mb-5 font-sans opacity-40"
            style={{ color: "#D7F5F5" }}
          >
            <span>{fmt(currentTime)}</span>
            <span>{fmt(duration)}</span>
          </div>

          {/* play / pause button - CORREGIDO: centrado sin desplazamiento */}
          <div className="flex justify-center">
            <button
              onClick={togglePlay}
              className="flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none active:scale-95"
              style={{
                width: 60,
                height: 60,
                background: isPlaying
                  ? "linear-gradient(135deg, #4a6020, #7A9834)"
                  : "linear-gradient(135deg, #66851dff, #3a4e09ff)",
                boxShadow: isPlaying
                  ? "0 0 28px rgba(149,181,74,0.55)"
                  : "0 4px 18px rgba(149,181,74,0.3)",
                transform: isPlaying ? "scale(1.06)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
            >
              {isPlaying ? (
                <Pause size={24} color="#fff" strokeWidth={2} />
              ) : (
                <Play size={24} color="#fff" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* ── footer quote ── */}
        <p
          className="font-elegant text-center leading-snug opacity-45"
          style={{ fontSize: "1.4rem", color: "#B2C28F" }}
        >
          "La música dice lo que las palabras no pueden."
        </p>
      </div>

      {/* ── keyframes ── */}
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes eqBar {
          from { height: 4px; }
          to   { height: 24px; }
        }
      `}</style>
    </section>
  );
}