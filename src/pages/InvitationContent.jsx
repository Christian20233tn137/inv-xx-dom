
import Hero from "../components/invitation/Hero";
import MusicSection from "../components/invitation/MusicSection";
import DetailsCard from "../components/invitation/DetailsCard";
import LocationSection from "../components/invitation/LocationSection";
import DressCodeSection from "../components/invitation/DressCodeSection";
import CountdownSection from "../components/invitation/CountdownSection";
import RSVPSection from "../components/invitation/RSVPSection";
import PhotoSection from "../components/invitation/PhotoSection";

export default function InvitationContent() {
  return (
    <div className="w-full bg-quartz-50 min-h-screen relative z-0 overflow-hidden">
        <Hero />

        {/* Music section – between Hero and first PhotoSection */}
        <MusicSection />

        {/* Photo gallery – mosaic layout after hero */}
        <PhotoSection
          title="Dominik"
          subtitle="Un sueño que siempre brilló"
          variant="mosaic"
          photos={[
            { src: "/assets/images/photo-1.jpg", alt: "Dominik foto 1" },
            { src: "/assets/images/photo-2.jpg", alt: "Dominik foto 2" },
            { src: "/assets/images/photo-3.jpg", alt: "Dominik foto 3" },
          ]}
        />

        <DetailsCard />
        <LocationSection />

        {/* Photo section – polaroid style before dress code */}
        <PhotoSection
          variant="polaroid"
          bg="bg-primary-50/30"
          photos={[
            { src: "/assets/images/photo-4.jpg", alt: "Dominik foto 4", caption: "Preparándose" },
            { src: "/assets/images/photo-5.jpg", alt: "Dominik foto 5", caption: "La espera" },
            { src: "/assets/images/photo-6.jpg", alt: "Dominik foto 6", caption: "El gran día" },
          ]}
        />

        <DressCodeSection />
        <CountdownSection />
        <RSVPSection />
    </div>
  );
}
