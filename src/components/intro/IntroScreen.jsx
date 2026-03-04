import { ChevronRight, Mail } from "lucide-react";

export default function IntroScreen({ onOpen }) {
  return (
    <div className="min-h-screen bg-primary-100 flex flex-col items-center justify-center relative overflow-hidden">

      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-200 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Name */}
      <h1 className="text-6xl md:text-8xl mb-10 font-elegant text-primary-900 z-10 animate-fade-in-up drop-shadow-sm">
        Dominik
      </h1>

      {/* Envelope Card + CTA */}
      <div className="z-10 flex flex-col items-center gap-8">

        {/* Clickable envelope card */}
        <button
          onClick={onOpen}
          aria-label="Abrir invitación"
          className="group cursor-pointer focus:outline-none"
        >
          <div className="relative transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1">

            {/* Card frame */}
            <div
              className="w-72 h-52 sm:w-80 sm:h-56 bg-[#fdfbf7] border-4 border-primary-300 shadow-2xl rotate-3
                         flex flex-col items-center justify-center gap-3 relative overflow-hidden rounded-sm"
            >
              {/* Inner border decoration */}
              <div className="absolute inset-2 border border-primary-200 pointer-events-none" />

              {/* Carta image or fallback icon */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="/carta.jpg"
                  alt="Carta de invitación"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />
                {/* Fallback visible only when image fails */}
                <div
                  className="hidden absolute inset-0 flex-col items-center justify-center gap-2 bg-[#fdfbf7]"
                >
                  <Mail
                    className="text-primary-400"
                    size={56}
                    strokeWidth={1.2}
                  />
                  <span className="text-primary-600 font-serif text-sm tracking-widest uppercase opacity-70">
                    Invitación
                  </span>
                </div>
              </div>

              {/* Wax seal badge */}
              <span className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-primary-600 text-quartz-50 flex items-center justify-center shadow-lg border-2 border-primary-300">
                <Mail size={16} strokeWidth={1.8} />
              </span>
            </div>

            {/* Arrow hint */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 flex items-center animate-bounce">
              <ChevronRight
                className="text-primary-700 drop-shadow"
                size={36}
                strokeWidth={2}
              />
            </div>
          </div>
        </button>

        {/* CTA text */}
        <p className="text-center text-primary-800 text-lg sm:text-xl font-light tracking-[0.25em] animate-pulse uppercase">
          Toca para abrir
        </p>
      </div>
    </div>
  );
}
