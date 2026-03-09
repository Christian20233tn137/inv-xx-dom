import { Clock3 } from "lucide-react";
import useCountdown from "../../hooks/useCountdown";
import { invitationData } from "../../data/invitationData";

const TimeBox = ({ value, label }) => (
  <div className="flex flex-col items-center mx-2 md:mx-4 group">
    {/* Círculo con efecto cristal (Glassmorphism) y animación sutil al hacer hover */}
    <div className="w-20 h-20 md:w-24 md:h-24 bg-white/60 backdrop-blur-md rounded-full flex flex-col items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] border-[1px] border-primary-200/50 mb-3 transition-transform duration-700 group-hover:-translate-y-2">
      <span className="text-3xl md:text-4xl font-serif text-primary-900 leading-none mb-1">
        {value}
      </span>
      {/* Etiqueta dentro del círculo para un look más limpio */}
      <span className="text-[9px] md:text-[11px] uppercase tracking-[0.2em] text-primary-700/80 font-sans">
        {label}
      </span>
    </div>
  </div>
);

export default function CountdownSection() {
  const { days, hours, minutes, seconds } = useCountdown(invitationData.date);

  return (
    <section
      className="relative py-32 px-4 flex flex-col items-center justify-center min-h-[60vh] bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/fondoConteo.webp')" }}
    >
      {/* Overlay con gradiente: funde los bordes con las secciones adyacentes y revela la imagen en el centro */}
      <div className="absolute inset-0 bg-gradient-to-b from-quartz-50 via-quartz-50/65 to-quartz-50 backdrop-blur-[2px]"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
        {/* Ícono decorativo sutil */}
        <Clock3
          strokeWidth={1}
          size={28}
          className="text-primary-400 mb-6 opacity-80"
        />

        {/* Título en dos niveles (Cursiva + Sans-serif espaciada) */}
        <span className="font-elegant text-5xl md:text-6xl text-primary-600 mb-2 block">
          La cuenta regresiva
        </span>
        <h3 className="text-xs md:text-sm font-sans tracking-[0.4em] text-primary-900 uppercase mb-16">
          Para nuestro gran día
        </h3>

        {/* Contenedor del reloj con separadores sutiles en desktop */}
        <div className="flex justify-center items-center w-full">
          <TimeBox value={days} label="Días" />
          <div className="hidden md:block text-2xl text-primary-300 font-serif mb-4 font-light">
            :
          </div>
          <TimeBox value={hours} label="Horas" />
          <div className="hidden md:block text-2xl text-primary-300 font-serif mb-4 font-light">
            :
          </div>
          <TimeBox value={minutes} label="Min" />
          <div className="hidden md:block text-2xl text-primary-300 font-serif mb-4 font-light">
            :
          </div>
          <TimeBox value={seconds} label="Seg" />
        </div>

        {/* Divisor difuminado y cierre */}
        <div className="mt-16 flex flex-col items-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary-300 to-transparent mb-6"></div>
          <div className="text-primary-800 text-xs md:text-sm font-sans tracking-[0.4em] uppercase">
            Nos vemos pronto
          </div>
        </div>
      </div>
    </section>
  );
}
