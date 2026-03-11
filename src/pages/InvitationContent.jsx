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
      {/* Music section – between Hero and first PhotoSection */}
      <MusicSection />
      <Hero />

      {/* Photo gallery – mosaic layout after hero */}
      <PhotoSection
        title="Dominique"
        subtitle="Un sueño que siempre brilló"
        variant="mosaic"
        photos={[
          { src: "/Foto_10.webp", alt: "Dominique foto 1", fit: "" },
          { src: "/Foto_07.webp", alt: "Dominique foto 2", fit: "" },
          { src: "/Foto_03.webp", alt: "Dominique foto 3", fit: "cover" },
        ]}
      />

      <DetailsCard />
      <LocationSection />

      {/* Photo section – polaroid style before dress code */}
      <PhotoSection
        variant="polaroid"
        bg="bg-primary-50/30"
        photos={[
          {
            src: "/Foto_06.webp",
            alt: "Dominique foto 4",
            caption: "Preparándose",
            fit: "contain",
          },
          {
            src: "/Foto_05.webp",
            alt: "Dominique foto 5",
            caption: "La espera",
          },
          {
            src: "/Foto_04.webp",
            alt: "Dominique foto 6",
            caption: "El gran día",
          },
        ]}
      />

      <DressCodeSection />
      <CountdownSection />
      <RSVPSection />
    </div>
  );
}
