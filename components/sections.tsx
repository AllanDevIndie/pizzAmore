"use client";

import { motion } from "framer-motion";
import { Pizza, Phone, MapPin, ExternalLink } from "lucide-react";

export function Header() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("#home")}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Pizza className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-serif font-bold text-foreground">
            PizzAmore
          </span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Home", href: "#home" },
            { label: "Monte Sua Pizza", href: "#montar" },
            { label: "Sobre", href: "#sobre" },
            { label: "Contato", href: "#contato" },
          ].map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <motion.button
          onClick={() => scrollToSection("#montar")}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full font-semibold transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Pedir Agora
        </motion.button>
      </div>
    </motion.header>
  );
}

export function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Pizza className="w-4 h-4" />
            Desde 2015 servindo com amor
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 leading-tight">
            A Arte da{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Pizza Perfeita
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Monte sua pizza meio-a-meio com ingredientes premium. Cada sabor
            escolhido com carinho, cada mordida uma experiencia unica.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={() => scrollToSection("#montar")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Monte Sua Pizza
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("#sobre")}
              className="border-2 border-border hover:border-primary text-foreground hover:text-primary px-8 py-4 rounded-full font-bold text-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nossa Historia
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Sobre a PizzAmore
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Desde 2015, a PizzAmore traz a autenticidade italiana para sua mesa.
            Com ingredientes selecionados e receitas tradicionais passadas de
            geracao em geracao, cada pizza e feita com paixao e dedicacao.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Nossa missao e proporcionar momentos especiais atraves de sabores
            unicos, com a qualidade que voce merece. Venha descobrir o verdadeiro
            sabor da Italia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contato" className="bg-card border-t border-border py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo e descricao */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Pizza className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-serif font-bold text-foreground">
                PizzAmore
              </span>
            </div>
            <p className="text-muted-foreground">
              A verdadeira pizza artesanal, feita com amor e ingredientes premium.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold text-accent mb-4">Contato</h4>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                (81) 99473-3852
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                Rua da Pizza, 123 - Recife, PE
              </p>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold text-accent mb-4">
              Siga-nos
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>
            &copy; 2026 PizzAmore. Todos os direitos reservados. | Desenvolvido por{" "}
            <strong className="text-foreground">DEV ALBK</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
