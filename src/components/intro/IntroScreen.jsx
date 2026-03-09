import { ChevronRight, Mail } from "lucide-react";

export default function IntroScreen({ onOpen }) {
  return (
    <div
      className="min-h-screen bg-primary-100 flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: "url('/fondoConteo.webp')" }}
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80  rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Name */}
      <h1 className="text-6xl md:text-8xl mb-12 font-elegant text-primary-900 z-10 animate-fade-in-up drop-shadow-sm">
        Dominique Escobar Días
      </h1>

      {/* Elegant Invitation Card */}
      <div className="z-10 flex flex-col items-center gap-8">
        {/* Clickable invitation card */}
        <button
          onClick={onOpen}
          aria-label="Abrir invitación"
          className="group cursor-pointer focus:outline-none"
        >
          <div className="relative hover:scale-105 transition-transform duration-300 ease-out">
            {/* Main invitation image */}
            <img
              src="/CARTAFINAL.webp"
              alt="Invitación de boda elegante"
              className="w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] 
                         h-auto object-contain
                         drop-shadow-2xl 
                         animate-float
                         transition-all duration-500 ease-out
                         group-hover:scale-105 
                         group-hover:drop-shadow-3xl
                         group-focus:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />

            {/* Elegant fallback for when image fails to load */}
            <div
              className="hidden w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] h-96
                           bg-gradient-to-b from-white to-primary-50 
                           border border-primary-200 rounded-lg shadow-2xl
                           flex-col items-center justify-center gap-4"
            >
              <Mail className="text-primary-400" size={64} strokeWidth={1} />
              <span className="text-primary-600 font-serif text-lg tracking-[0.15em] uppercase opacity-80">
                Invitación Elegante
              </span>
            </div>

            {/* Subtle arrow hint */}
            <div
              className="absolute -right-8 top-1/2 -translate-y-1/2 flex items-center 
                           animate-pulse opacity-60 group-hover:opacity-80 transition-opacity"
            >
              <ChevronRight
                className="text-primary-500 drop-shadow-sm"
                size={28}
                strokeWidth={1.5}
              />
            </div>
          </div>
        </button>

        {/* Elegant CTA text */}
        <p
          className="text-center text-primary-700 text-base sm:text-lg font-light 
                      tracking-[0.3em] uppercase opacity-80 animate-pulse"
        >
          Toca para abrir
        </p>
      </div>

      {/* Custom floating animation styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .drop-shadow-3xl {
          filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
        }
      `}</style>
    </div>
  );
}
