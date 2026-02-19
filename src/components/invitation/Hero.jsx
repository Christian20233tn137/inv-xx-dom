import { invitationData } from "../../data/invitationData";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary-50 opacity-30 pattern-dots"></div>
      
      <div className="z-10 text-center px-4">
        <h2 className="text-xl tracking-[0.2em] text-primary-800 uppercase mb-4 animate-fade-in">
          Mis XX Años
        </h2>
         {/* Dejar esta tipografia */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-primary-600 mb-8 font-elegant drop-shadow-sm">
          {invitationData.name}
        </h1>

        <div className="relative mx-auto w-64 h-80 md:w-80 md:h-96 transform rotate-3 hover:rotate-0 transition-transform duration-700 bg-white p-2 shadow-2xl skew-y-1">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary-200 z-0"></div>
          <img 
            src="/assets/images/carta.jpg" 
            alt={invitationData.name} 
            className="w-full h-full object-cover relative z-10 sepia-[.15]"
          />
        </div>
      </div>
    </section>
  );
}
