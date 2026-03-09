import { MapPin, Map } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-32 px-4 relative flex items-center justify-center min-h-[60vh] bg-primary-950 overflow-hidden">
      {/* ── Marco arquitectónico interior (Más sutil y oscuro) ── */}
      <div className="absolute inset-4 md:inset-8 border-[1px] border-primary-900 pointer-events-none"></div>

      {/* ── Decoración de esquinas con un verde olivo muy suave (primary-200) ── */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t-[1px] border-l-[1px] border-primary-200/40"></div>
      <div className="absolute top-8 right-8 w-4 h-4 border-t-[1px] border-r-[1px] border-primary-200/40"></div>
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b-[1px] border-l-[1px] border-primary-200/40"></div>
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b-[1px] border-r-[1px] border-primary-200/40"></div>

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center animate-fade-in-up">
        {/* Ícono solitario en tono salvia/pistacho suave */}
        <MapPin
          className="text-primary-200/80 mb-8 animate-pulse-slow"
          size={36}
          strokeWidth={1}
        />

        {/* Subtítulo en cursiva con un tono almendra/olivo claro */}
        <span className="font-elegant text-5xl md:text-6xl text-primary-100 mb-4 block">
          Ubicación
        </span>

        {/* Título Principal en Blanco Cuarzo para máximo contraste y limpieza */}
        <h3 className="text-2xl md:text-4xl font-serif text-quartz-50 uppercase tracking-[0.2em] mb-8">
          Recepción del Evento
        </h3>

        {/* Separador oscurecido para no llamar tanto la atención */}
        <div className="w-16 h-[1px] bg-primary-800 mx-auto mb-8"></div>

        {/* Detalles del lugar con colores muy tenues */}
        <p className="text-quartz-50/90 font-sans text-sm md:text-base font-light mb-2 tracking-wide max-w-md mx-auto">
          Esperamos tu presencia
        </p>
        <p className="text-primary-100/60 font-serif italic text-sm md:text-base mb-12 max-w-sm mx-auto leading-relaxed">
          "Un lugar mágico para una noche inolvidable. Te esperamos para
          celebrar juntos."
        </p>

        {/* Botón Premium: Bordes suaves que se rellenan con un tono pastel elegante */}
        <a
          href="https://maps.app.goo.gl/TFafHE8oLPf6M6ta6?g_st=ic"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-10 py-5 border border-primary-200/60 text-primary-100 hover:bg-primary-100 hover:text-primary-950 transition-all duration-500 font-sans text-xs md:text-sm uppercase tracking-[0.25em]"
        >
          <Map
            size={18}
            strokeWidth={1.5}
            className="group-hover:scale-110 transition-transform duration-500"
          />
          <span>Abrir en el mapa</span>
        </a>
      </div>
    </section>
  );
}
