
export default function RSVPSection() {
  return (
    <section className="py-24 px-4 bg-stone-900 text-stone-50 text-center relative overflow-hidden">
      {/* Decorative elements - más sutiles */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-stone-600 opacity-30 m-4"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-stone-600 opacity-30 m-4"></div>

      <div className="relative z-10 max-w-xl mx-auto">
        <h3 className="text-4xl font-serif mb-6 text-stone-200 font-elegant">
          Confirmar Asistencia
        </h3>

        <p className="text-stone-300/90 mb-10 font-light leading-relaxed">
          Por favor confirma tu asistencia antes del 1 de Octubre para que 
          podamos reservar tu lugar en este día tan especial.
        </p>

        <a 
          href="https://forms.google.com/tu-enlace-aqui" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-stone-700 hover:bg-stone-600 text-stone-50 font-medium rounded-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Confirmar Asistencia
        </a>
      </div>
    </section>
  );
}