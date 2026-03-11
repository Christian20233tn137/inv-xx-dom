import { Sparkles } from "lucide-react";
import { invitationData } from "../../data/invitationData";

// Nueva paleta de colores suaves y románticos
const colorPalette = [
  { name: "Rosa Pastel", hex: "#F6CBCE" },
  { name: "Amarillo Pastel", hex: "#FDE2A7" },
  { name: "Durazno", hex: "#F6BAA1" },
  { name: "Verde Salvia", hex: "#ABC4B9" },
  { name: "Verde Pistacho", hex: "#CDE0C0" },
];

export default function DressCodeSection() {
  return (
    <section className="py-24 px-4 bg-white text-center relative flex flex-col items-center justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-md h-[1px] "></div>
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center animate-fade-in-up">
        <Sparkles
          strokeWidth={1}
          size={32}
          className="text-primary-400 mb-6 animate-pulse-slow"
        />
        <span className="font-elegant text-5xl md:text-6xl text-primary-600 mb-2 block">
          Código de Vestimenta
        </span>
        <h3 className="text-2xl md:text-3xl font-serif mb-10 tracking-[0.2em] text-primary-950 uppercase">
          Formal Elegante
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12">
          {colorPalette.map((color) => (
            <div
              key={color.name}
              className="flex flex-col items-center gap-3 group"
            >
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-sm border-[1px] border-primary-100/50 transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              ></div>
              <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.15em] text-primary-800/70">
                {color.name}
              </span>
            </div>
          ))}
        </div>
        <div className="relative mt-4">
          <p className="max-w-md mx-auto text-primary-800 font-sans font-light text-sm md:text-base leading-relaxed">
            Se sugiere el siguiente código de vestimenta, se está abierto a
            otros colores siempre y cuando cumplan con tonalidades pasteles
          </p>
          <p className="max-w-md mx-auto text-primary-600/60 font-serif italic text-xs mt-4">
            Te esperamos con ansias.
          </p>
        </div>
      </div>
    </section>
  );
}
