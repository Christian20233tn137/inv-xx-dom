
import { invitationData } from "../../data/invitationData";

export default function DressCodeSection() {
  return (
    <section className="py-20 px-4 bg-primary-800 text-quartz-50 text-center relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-50"></div>
        
        <h3 className="text-3xl font-serif mb-8 tracking-widest text-primary-200">DRESS CODE</h3>
        
        <div className="flex flex-col items-center justify-center gap-6">
            <div className="w-20 h-20 bg-primary-700 rounded-full flex items-center justify-center text-4xl mb-2 shadow-inner border border-primary-600">
                👔
            </div>
            
            <h4 className="text-2xl font-light font-elegant text-primary-300">
                {invitationData.dressCode}
            </h4>
            
            <p className="max-w-md mx-auto text-primary-200 font-light opacity-80">
                Rogamos asistir con vestimenta formal.
                <br />
                Nos reservamos el derecho de admisión.
            </p>
        </div>
    </section>
  );
}
