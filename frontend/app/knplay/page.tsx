import type { Metadata } from "next";
import NavOverlay from '../components/NavOverlay'; 
import PlayCatalogue from "./PlayCatalogue";

export const metadata: Metadata = {
  title: "KN Play | KN Design Space",
  description:
    "Steel and timber play structures designed in Kigali and rooted in Rwanda. Climbing frames, towers, dens, animals and inclusive pieces for homes, schools and public spaces.",
};

export default function PlayPage() {
  return (
    <>
      <NavOverlay />
      <PlayCatalogue />
    </>
  );
}