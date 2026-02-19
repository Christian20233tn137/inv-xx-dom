import { invitationData } from "../../data/invitationData";

export default function DetailsCard() {
  return (
    <section className="py-24 px-4 bg-primary-50/30 flex justify-center perspective-1000">
      <div className="bg-[#fdfbf7] p-8 md:p-12 max-w-2xl w-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform rotate-1 border border-[#e8dfc8] relative mx-auto">
        
        {/* Paper texture/effect overlay */}
        <div className="absolute inset-0 opacity-10 bg-repeat bg-[url('/assets/images/paper-noise.png')]"></div>
        
        <div className="border border-primary-900/20 p-6 h-full flex flex-col items-center justify-center relative z-10">
          <h3 className="text-3xl font-serif text-primary-700 mb-8 border-b-2 border-primary-200 pb-2">
            Detalles del Evento
          </h3>
          
          <div className="space-y-6 text-center text-primary-700 font-medium tracking-wide">
            <div className="group transition-all hover:scale-105">
                <p className="text-sm text-primary-400 uppercase tracking-widest mb-1">Fecha</p>
                <p className="text-2xl font-serif">{invitationData.date}</p>
            </div>
            
            <div className="w-12 h-[1px] bg-primary-200 mx-auto"></div>

            <div className="group transition-all hover:scale-105">
                <p className="text-sm text-primary-400 uppercase tracking-widest mb-1">Hora</p>
                <p className="text-2xl font-serif">7:00 PM</p>
            </div>

            <div className="w-12 h-[1px] bg-primary-200 mx-auto"></div>

            <div className="group transition-all hover:scale-105">
                <p className="text-sm text-primary-400 uppercase tracking-widest mb-1">Recepción</p>
                <p className="text-2xl font-serif">{invitationData.place}</p>
            </div>
          </div>
          
          <div className="mt-12 text-center text-primary-500 italic text-sm">
            "Esperamos contar con tu presencia en este día especial"
          </div>
        </div>
      </div>
    </section>
  );
}
