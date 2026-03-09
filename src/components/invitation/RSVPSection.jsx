import { Heart, CalendarCheck } from "lucide-react";

export default function RSVPSection() {
  return (
    <section className="py-32 px-4 bg-quartz-50 text-primary-900 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
      {/* Elementos decorativos - Líneas finas y elegantes con animación fade-in */}
      <div className="absolute top-0 left-0 w-32 md:w-48 h-32 md:h-48 border-l-[1px] border-t-[1px] border-primary-300 opacity-60 m-6 md:m-10 animate-fade-in"></div>
      <div className="absolute bottom-0 right-0 w-32 md:w-48 h-32 md:h-48 border-r-[1px] border-b-[1px] border-primary-300 opacity-60 m-6 md:m-10 animate-fade-in"></div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center animate-fade-in-up">
        {/* Icono sutil animado */}
        <div className="mb-6 text-primary-400">
          <Heart strokeWidth={1} size={36} className="animate-pulse-slow" />
        </div>

        {/* Subtítulo decorativo en cursiva */}
        <span className="font-elegant text-5xl md:text-6xl text-primary-600 mb-2 block">
          Acompáñanos
        </span>

        {/* Título principal con mucho tracking (espaciado) */}
        <h3 className="text-3xl md:text-4xl font-serif mb-8 text-primary-950 uppercase tracking-[0.2em]">
          Confirmar Asistencia
        </h3>

        {/* Divisor elegante */}
        <div className="w-16 h-[1px] bg-primary-300 mb-8"></div>

        {/* Texto del cuerpo usando la fuente Marcellus (sans) */}
        <p className="text-primary-800/90 mb-12 font-sans text-lg md:text-xl leading-relaxed max-w-md mx-auto">
          Nos llenaría de alegría compartir este día contigo. Por favor,
          confírmanos tu presencia antes del{" "}
          <span className="text-primary-950 font-bold">30 de Marzo</span>.
        </p>

        {/* Botón Premium: Sólido que se vuelve transparente (Ghost) en hover */}
        <a
          href="https://forms.google.com/tu-enlace-aqui"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-10 py-5 bg-primary-900 text-quartz-50 font-sans text-xs md:text-sm tracking-[0.25em] uppercase border border-primary-900 transition-all duration-500 hover:bg-transparent hover:text-primary-900"
        >
          <CalendarCheck
            size={18}
            strokeWidth={1.5}
            className="group-hover:scale-110 transition-transform duration-500"
          />
          <span>Confirmar ahora</span>
        </a>
      </div>
    </section>
  );
}
