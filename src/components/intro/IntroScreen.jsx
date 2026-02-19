export default function IntroScreen({ onOpen }) {
  return (
    <div className="min-h-screen bg-primary-100 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-200 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

      <h1 className="text-6xl md:text-8xl mb-8 font-serif text-primary-900 z-10 animate-fade-in-up">
        Dominik
      </h1>

      <div className="z-10 flex flex-col items-center group">
        <div
          className="cursor-pointer relative transition-transform duration-500 hover:scale-105"
          onClick={onOpen}
        >
          {/* Card Image Placeholder - Replace with actual asset if available */}
          <div className="w-64 h-48 bg-quartz-50 border-4 border-primary-300 shadow-xl rotate-3 flex items-center justify-center relative">
              <span className="text-primary-800 text-4xl">
                <img src="carta.jpeg" alt="" />
              </span>
              <div className="absolute inset-0 border border-primary-200 m-2"></div>
          </div>
          
          {/* Click Indicator with Arrow */}
          <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 flex items-center animate-bounce">
             <span className="text-5xl text-primary-800"></span>
          </div>
        </div>

        <p className="text-center mt-8 text-primary-800 text-xl font-light tracking-widest animate-pulse">
          TOCA PARA ABRIR
        </p>
      </div>
    </div>
  );
}
