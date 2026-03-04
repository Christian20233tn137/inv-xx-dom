import { Play, Pause, Music2 } from "lucide-react";
import useAudio from "../../hooks/useAudio";
import { invitationData } from "../../data/invitationData";

export default function MusicPlayer() {
  const { play, pause, isPlaying } = useAudio(invitationData.song);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">

      {/* Now-playing tooltip */}
      {isPlaying && (
        <div className="flex items-center gap-1.5 bg-primary-800/90 text-quartz-50 px-3 py-1.5 text-xs rounded-full shadow-lg backdrop-blur-sm whitespace-nowrap">
          <Music2 size={12} className="animate-pulse" />
          Reproduciendo…
        </div>
      )}

      {/* Play / Pause button */}
      <button
        onClick={isPlaying ? pause : play}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300
          ${isPlaying
            ? "bg-primary-600 text-quartz-50 scale-110 animate-pulse-slow"
            : "bg-quartz-50 text-primary-800 border-2 border-primary-200 hover:scale-105"
          }`}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <Pause size={20} strokeWidth={2} />
        ) : (
          <Play size={20} strokeWidth={2} className="translate-x-0.5" />
        )}
      </button>
    </div>
  );
}
