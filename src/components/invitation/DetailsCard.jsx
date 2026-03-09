import { CalendarDays, Clock } from "lucide-react";

export default function DetailsCard() {
  return (
    <section className="py-24 px-4 bg-quartz-50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Sutil halo de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/20 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-lg mx-auto w-full flex flex-col items-center gap-10 animate-fade-in-up">
        {/* Adorno superior: líneas + icono */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-[1px] bg-primary-300"></div>
          <CalendarDays
            size={16}
            strokeWidth={1}
            className="text-primary-400"
          />
          <div className="w-12 h-[1px] bg-primary-300"></div>
        </div>

        {/* Heading */}
        <div className="text-center -mt-4">
          <span className="font-elegant text-5xl md:text-6xl text-primary-600 block mb-2">
            Cuándo
          </span>
          <h3 className="text-xs font-sans tracking-[0.3em] text-primary-700/60 uppercase">
            Te esperamos ese día
          </h3>
        </div>

        {/* Tarjeta de detalles */}
        <div className="w-full bg-white/60 backdrop-blur-md border-[1px] border-primary-200/50 shadow-[0_8px_30px_rgba(43,49,27,0.06)] p-10 relative">
          {/* Esquinas decorativas */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-[1px] border-l-[1px] border-primary-400/50"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-[1px] border-r-[1px] border-primary-400/50"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1px] border-l-[1px] border-primary-400/50"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[1px] border-r-[1px] border-primary-400/50"></div>

          {/* Contenido: fecha y hora */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
            {/* Bloque Fecha */}
            <div className="flex flex-col items-center flex-1 text-center">
              <p className="text-[10px] font-sans tracking-[0.25em] text-primary-600/55 uppercase mb-3">
                Fecha
              </p>
              <p className="font-serif text-primary-950 text-2xl md:text-3xl mb-1 tracking-wide">
                11 de Abril
              </p>
              <p className="font-serif text-primary-600/70 text-3xl md:text-4xl font-light tracking-widest">
                2026
              </p>
            </div>

            {/* Divisor */}
            <div className="hidden md:block w-[1px] h-20 bg-primary-200/60 mx-6"></div>
            <div className="md:hidden w-16 h-[1px] bg-primary-200/60"></div>

            {/* Bloque Hora */}
            <div className="flex flex-col items-center flex-1 text-center">
              <p className="text-[10px] font-sans tracking-[0.25em] text-primary-600/55 uppercase mb-3">
                Hora
              </p>
              <p className="font-serif text-primary-950 text-2xl md:text-3xl mb-1 tracking-wide">
                7:00 PM
              </p>
              <p className="font-sans text-[10px] tracking-[0.2em] text-primary-600/55 uppercase mt-1">
                Recepción
              </p>
            </div>
          </div>

          {/* Divisor vertical sutil */}
          <div className="w-[1px] h-5 bg-primary-300 mx-auto my-7"></div>

          {/* Cita */}
          <p className="text-center font-serif italic text-primary-800/70 text-sm md:text-base leading-relaxed">
            "Esperamos contar con tu presencia en este día tan especial"
          </p>
        </div>

        {/* Adorno inferior */}
        <div className="flex items-center gap-3 -mt-2">
          <div className="w-12 h-[1px] bg-primary-300"></div>
          <Clock size={14} strokeWidth={1} className="text-primary-400" />
          <div className="w-12 h-[1px] bg-primary-300"></div>
        </div>
      </div>
    </section>
  );
}
