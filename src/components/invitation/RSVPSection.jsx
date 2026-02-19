
export default function RSVPSection() {
  return (
    <section className="py-24 px-4 bg-secondary-950 text-quartz-50 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-secondary-700 opacity-50 m-4"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-secondary-700 opacity-50 m-4"></div>

        <div className="relative z-10 max-w-xl mx-auto">
            <h3 className="text-4xl font-serif mb-6 text-secondary-200 font-elegant">Confirmar Asistencia</h3>
            
            <p className="text-secondary-100/80 mb-10 font-light leading-relaxed">
                Por favor confirma tu asistencia antes del 1 de Octubre para que podamos reservar tu lugar en este día tan especial.
            </p>

            <button className="px-10 py-4 bg-secondary-600 hover:bg-secondary-500 text-secondary-950 font-bold rounded-sm uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_20px_rgba(20,255,138,0.3)]">
                Confirmar por WhatsApp
            </button>
        </div>
    </section>
  );
}
