import { Header, Hero, About, Footer } from "@/components/sections";
import { PizzaBuilder } from "@/components/pizza-builder";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PizzaBuilder />
      <About />
      <Footer />
    </main>
  );
}
