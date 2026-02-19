import Hero from "../components/invitation/Hero";
import MusicPlayer from "../components/invitation/MusicPlayer";
import DetailsCard from "../components/invitation/DetailsCard";
import LocationSection from "../components/invitation/LocationSection";
import DressCodeSection from "../components/invitation/DressCodeSection";
import CountdownSection from "../components/invitation/CountdownSection";
import RSVPSection from "../components/invitation/RSVPSection";

export default function InvitationContent() {
  return (
    <div className="flex flex-col">
      <Hero />
      <MusicPlayer />
      <DetailsCard />
      <LocationSection />
      <DressCodeSection />
      <CountdownSection />
      <RSVPSection />
    </div>
  );
}
