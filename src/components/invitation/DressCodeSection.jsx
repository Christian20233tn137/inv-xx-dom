
import { invitationData } from "../../data/invitationData";

// Color palette for the dress code – adjust hex values to match the event's palette
const colorPalette = [
  { name: "Verde Olivo",  hex: "#5C7326" },
  { name: "Dorado",       hex: "#C5A55A" },
  { name: "Champán",      hex: "#F5E6CC" },
  { name: "Bronce",       hex: "#8B6F47" },
];

export default function DressCodeSection() {
  return (
    <section className="py-20 px-4 bg-primary-800 text-quartz-50 text-center relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-50"></div>
        
        <h3 className="text-3xl font-serif mb-4 tracking-widest text-primary-200 font-light">
          DRESS CODE
        </h3>
        
        <div className="flex flex-col items-center justify-center gap-6">
            <h4 className="text-2xl font-light font-elegant text-primary-300 text-4xl">
                {invitationData.dressCode}
            </h4>

            {/* Color Palette Swatches */}
            <div className="flex items-center justify-center gap-4 mt-4">
              {colorPalette.map((color) => (
                <div key={color.name} className="flex flex-col items-center gap-2">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  ></div>
                  <span className="text-[10px] uppercase tracking-widest text-primary-300 opacity-70">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
            
            <p className="max-w-md mx-auto text-primary-200 font-light opacity-80 mt-4 font-serif italic">
                Rogamos asistir con vestimenta formal.
                <br />
                Nos reservamos el derecho de admisión.
            </p>
        </div>
    </section>
  );
}
