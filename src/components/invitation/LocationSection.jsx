
import { invitationData } from "../../data/invitationData";

export default function LocationSection() {
  return (
    <section className="py-24 px-4 bg-quartz-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Details */}
        <div className="flex-1 text-center md:text-left z-10">
          <h3 className="text-4xl font-serif text-primary-800 mb-6 font-elegant">Ubicación</h3>
          <p className="text-xl text-primary-500 mb-2">{invitationData.place}</p>
          <p className="text-primary-600 mb-8 italic">Un lugar mágico para una noche inolvidable</p>
          
          <a 
            href="#" 
            className="inline-block px-8 py-3 bg-primary-600 text-quartz-50 rounded-full hover:bg-primary-700 transition-colors shadow-lg uppercase tracking-wider text-sm"
          >
            Ver en Mapa
          </a>
        </div>

        {/* Stacked Cards Images */}
        <div className="flex-1 relative w-full max-w-sm h-80 flex items-center justify-center">
            {/* Card 3 (Bottom) */}
            <div className="absolute w-64 h-80 bg-stone-200 rounded-xl shadow-lg transform rotate-6 translate-x-4 translate-y-4 border-4 border-white overflow-hidden">
                 <div className="w-full h-full bg-primary-200"></div> {/* Placeholder for image */}
            </div>
            {/* Card 2 (Middle) */}
            <div className="absolute w-64 h-80 bg-stone-300 rounded-xl shadow-lg transform -rotate-3 translate-x-1 translate-y-1 border-4 border-white overflow-hidden">
                 <div className="w-full h-full bg-secondary-200"></div> {/* Placeholder for image */}
            </div>
            {/* Card 1 (Top) */}
            <div className="absolute w-64 h-80 bg-stone-100 rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white overflow-hidden z-10">
                 {/* This would be the main location image */}
                 <div className="w-full h-full bg-primary-100 flex items-center justify-center text-primary-300 text-4xl">🏰</div>
            </div>
        </div>
      </div>
    </section>
  );
}
