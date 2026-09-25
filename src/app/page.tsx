import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Lottery } from "@/components/Lottery";
import { MassageBanner } from "@/components/MassageBanner";
import { NewYear } from "@/components/NewYear";
import { Additionally } from "@/components/Additionally";
import { Salons } from "@/components/Salons";
import { VIP } from "@/components/Vip";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <section className="max-w-325 mx-auto my-0">
          <Lottery />
          <NewYear />
        </section>

        <section>
          <MassageBanner />
        </section>

        <section>
          <VIP />
          <Additionally />
          <Salons />
        </section>
      </main>
      <Footer />
    </>
  );
};
