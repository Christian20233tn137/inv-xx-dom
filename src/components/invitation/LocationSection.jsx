import { MapPin, ExternalLink, Landmark } from "lucide-react";
import { invitationData } from "../../data/invitationData";

export default function LocationSection() {
  return (
    <section className="py-16 px-4 bg-quartz-50 relative overflow-hidden">

      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-secondary-100 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* ── Stacked cards (top on mobile, left on desktop) ── */}
        <div className="w-full flex justify-center md:flex-1 order-1 md:order-none">
          {/* Outer wrapper keeps a stable height so cards don't spill */}
          <div className="relative w-60 h-72 sm:w-64 sm:h-80">

            {/* Card 3 – bottom */}
            <div className="absolute inset-0 bg-primary-200 rounded-xl shadow-md
                            transform rotate-6 translate-x-3 translate-y-3
                            border-4 border-white overflow-hidden" />

            {/* Card 2 – middle */}
            <div className="absolute inset-0 bg-secondary-200 rounded-xl shadow-md
                            transform -rotate-3 translate-x-1 translate-y-1
                            border-4 border-white overflow-hidden" />

            {/* Card 1 – top / visible */}
            <div className="absolute inset-0 bg-primary-50 rounded-xl shadow-2xl
                            transform rotate-1 hover:rotate-0 transition-transform duration-500
                            border-4 border-white overflow-hidden z-10
                            flex flex-col items-center justify-center gap-3">
              <Landmark
                className="text-primary-400"
                size={56}
                strokeWidth={1.2}
              />
              <span className="text-primary-600 font-serif text-sm tracking-widest uppercase opacity-70 text-center px-4">
                {invitationData.place}
              </span>
            </div>

          </div>
        </div>

        {/* ── Text Details ── */}
        <div className="flex-1 text-center md:text-left order-2 md:order-none w-full">

          {/* Icon + heading row */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <MapPin className="text-primary-500 shrink-0" size={24} strokeWidth={1.8} />
            <h3 className="text-3xl sm:text-4xl font-elegant text-primary-800 leading-tight">
              Ubicación
            </h3>
          </div>

          <p className="text-lg sm:text-xl text-primary-500 mb-1 font-serif">
            {invitationData.place}
          </p>
          <p className="text-primary-600 mb-8 italic font-serif text-sm sm:text-base">
            Un lugar mágico para una noche inolvidable
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3
                       bg-primary-600 text-quartz-50 rounded-full
                       hover:bg-primary-700 active:scale-95
                       transition-all duration-200 shadow-lg
                       uppercase tracking-wider text-sm font-medium"
          >
            <ExternalLink size={16} strokeWidth={2} />
            Ver en Mapa
          </a>
        </div>

      </div>
    </section>
  );
}
