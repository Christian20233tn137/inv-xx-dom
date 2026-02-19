import { useState } from "react";
import IntroScreen from "../components/intro/IntroScreen";
import InvitationContent from "./InvitationContent";

export default function InvitationPage() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className={`fixed inset-0 z-50 transition-transform duration-1000 ease-in-out ${opened ? 'translate-x-full' : 'translate-x-0'}`}>
        <IntroScreen onOpen={() => setOpened(true)} />
      </div>
      <div className={`relative z-0 transition-opacity duration-1000 ${opened ? 'opacity-100' : 'opacity-0'}`}>
         <InvitationContent />
      </div>
    </>
  );
}
