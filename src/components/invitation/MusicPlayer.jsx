import useAudio from "../../hooks/useAudio";
import { invitationData } from "../../data/invitationData";

export default function MusicPlayer() {
  const { play, pause, isPlaying } = useAudio(invitationData.song);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button 
        onClick={isPlaying ? pause : play}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isPlaying ? 'bg-primary-600 text-quartz-50 scale-110 animate-pulse-slow' : 'bg-quartz-50 text-primary-800 border-2 border-primary-200'
        }`}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <span className="text-2xl">⏸</span>
        ) : (
          <span className="text-2xl pl-1">▶</span>
        )}
      </button>
      {isPlaying && (
          <div className="absolute bottom-14 right-0 bg-primary-100 text-primary-900 px-3 py-1 text-xs rounded-lg whitespace-nowrap opacity-70">
              Reproduciendo...
          </div>
      )}
    </div>
  );
}
