import { Sparkles, Quote } from "lucide-react";
import { invitationData } from "../../data/invitationData";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-quartz-50 overflow-hidden">
      {/* Fondos difuminados y elegantes (Reemplaza los puntos por luz suave) */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-200/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#DBC1C1]/20 rounded-full blur-[100px] pointer-events-none"></div>{" "}
      {/* Toque de Rosa Polvo */}
      <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center w-full mt-10 md:mt-0">
        {/* Adorno superior sutil */}
        <div className="mb-6 flex items-center justify-center gap-4 animate-fade-in">
          <div className="w-12 md:w-20 h-[1px] bg-primary-300"></div>
          <Sparkles size={20} strokeWidth={1} className="text-primary-400" />
          <div className="w-12 md:w-20 h-[1px] bg-primary-300"></div>
        </div>

        {/* Subtítulo: Menos tamaño, pero MÁS tracking para lujo editorial */}
        <h2 className="text-xl md:text-3xl lg:text-4xl tracking-[0.4em] md:tracking-[0.6em] text-primary-800 uppercase mb-6 animate-fade-in font-manville font-light ml-[0.4em]">
          Mis XX Años
        </h2>

        {/* Nombre Principal: Intacto, siendo el protagonista absoluto */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-elegant text-primary-600 mb-16 drop-shadow-sm animate-fade-in-up">
          Dominique Escobar
        </h1>

        {/* Tarjeta de la Cita (Quote Card) - Efecto Glassmorphism Premium */}
        <div
          className="relative w-full max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Marco exterior flotante con sutil blur */}
          <div className="relative bg-white/70 backdrop-blur-sm rounded-sm p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-primary-100/50">
            {/* Ícono de comillas decorativo en la esquina */}
            <div className="absolute -top-5 -left-5 bg-quartz-50 rounded-full p-2 border border-primary-100 hidden md:block">
              <Quote
                size={24}
                strokeWidth={1}
                className="text-primary-300 fill-primary-50"
              />
            </div>

            {/* Marco interior delicado */}
            <div className="border-[1px] border-primary-200/50 p-6 md:p-10 relative">
              {/* Esquinas decorativas del marco */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-[1px] border-l-[1px] border-primary-400"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-[1px] border-r-[1px] border-primary-400"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1px] border-l-[1px] border-primary-400"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[1px] border-r-[1px] border-primary-400"></div>

              <p className="text-primary-800/90 font-serif text-lg md:text-xl leading-loose italic tracking-wide text-center">
                "Hay sueños que esperan el momento perfecto para cumplirse…{" "}
                <br className="hidden md:block mb-2" />
                Hoy, 5 años después, celebramos un anhelo que la vida y la
                distancia pausaron, pero que nunca dejaron de latir. Porque los
                momentos más especiales no tienen fecha,{" "}
                <span className="text-primary-950 font-medium">
                  solo el corazón listo para vivirlos.
                </span>
                "
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
