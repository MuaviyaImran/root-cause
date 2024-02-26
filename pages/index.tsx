import Hero from "@/components/Hero";
import { Brygada_1918 } from "next/font/google";
const brygada = Brygada_1918({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${brygada.className}`}>
      <Hero />
    </main>
  );
}
