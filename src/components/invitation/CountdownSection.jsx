import useCountdown from "../../hooks/useCountdown";
import { invitationData } from "../../data/invitationData";

const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-quartz-50 rounded-full flex items-center justify-center shadow-lg border-2 border-primary-100 mb-2">
            <span className="text-xl md:text-2xl font-bold text-primary-700">{value}</span>
        </div>
        <span className="text-xs md:text-sm uppercase tracking-wider text-primary-600 font-medium">{label}</span>
    </div>
);

export default function CountdownSection() {
  const { days, hours, minutes, seconds } = useCountdown(invitationData.date);

  return (
    <section className="py-24 bg-gradient-to-b from-quartz-50 to-primary-50 text-center">
      <h3 className="text-3xl font-serif text-primary-800 mb-12 font-elegant">Faltan</h3>
      
      <div className="flex flex-wrap justify-center items-center max-w-3xl mx-auto">
        <TimeBox value={days} label="Días" />
        <TimeBox value={hours} label="Horas" />
        <TimeBox value={minutes} label="Min" />
        <TimeBox value={seconds} label="Seg" />
      </div>
      
      <div className="mt-12 text-primary-400 text-sm tracking-[0.3em]">
          NOS VEMOS PRONTO
      </div>
    </section>
  );
}
