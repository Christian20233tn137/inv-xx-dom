
import { useState, useEffect } from 'react';

export default function useAudio(url) {
  const [audio] = useState(new Audio(url));
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    audio.play().catch(e => console.error("Error playing audio:", e));
    setIsPlaying(true);
  };

  const pause = () => {
    audio.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    audio.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setIsPlaying(false));
      audio.pause();
    };
  }, [audio]);

  return { play, pause, isPlaying };
}
