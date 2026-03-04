import { invitationData } from "../../data/invitationData";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary-50 opacity-30 pattern-dots"></div>
      
      <div className="z-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-6xl tracking-[0.2em] text-primary-800 uppercase mb-4 animate-fade-in font-manville font-light">
          Mis XX Años
        </h2>
         {/* Dejar esta tipografia */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-elegant text-primary-600 mb-10 drop-shadow-sm">
          {invitationData.name}
        </h1>

        {/* Quote Card instead of image */}
        <div className="quote-card rounded-sm px-8 py-10 md:px-12 md:py-14 max-w-xl mx-auto animate-fade-in-up">
          <div className="border border-primary-200/40 p-6 md:p-8">
            <p className="text-primary-700 font-serif text-base md:text-lg leading-relaxed italic tracking-wide">
              Hay sueños que esperan el momento perfecto para cumplirse…
              Hoy, 5 años después, celebramos un anhelo que la vida y la
              distancia pausaron, pero que nunca dejaron de latir. Porque los
              momentos más especiales no tienen fecha, solo el corazón listo
              para vivirlos.
            </p>
            <div className="mt-6 w-16 h-[1px] bg-primary-300 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
