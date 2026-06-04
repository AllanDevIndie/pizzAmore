"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Pizza as PizzaIcon, ChevronDown } from "lucide-react";
import { PizzaVisualizer } from "./pizza-visualizer";
import { FlavorSelector } from "./flavor-selector";
import { SizeSelector } from "./size-selector";
import { pizzas, tamanhos, Pizza } from "@/lib/pizzas";

export function PizzaBuilder() {
  const [leftHalf, setLeftHalf] = useState<Pizza | null>(null);
  const [rightHalf, setRightHalf] = useState<Pizza | null>(null);
  const [selectedSize, setSelectedSize] = useState("media");
  const [observacoes, setObservacoes] = useState("");
  const [showLeftFlavors, setShowLeftFlavors] = useState(true);
  const [showRightFlavors, setShowRightFlavors] = useState(true);

  const selectedTamanho = tamanhos.find((t) => t.id === selectedSize)!;
  const canOrder = leftHalf && rightHalf;

  const handleOrder = () => {
    if (!canOrder) {
      alert("Por favor, escolha os sabores para as duas metades da pizza!");
      return;
    }

    const numeroWhats = "5581994733852";
    let mensagem = `*Novo Pedido PizzAmore*\n\n`;
    mensagem += `*Pizza Meio-a-Meio*\n`;
    mensagem += `*Metade Esquerda:* ${leftHalf.nome}\n`;
    mensagem += `*Metade Direita:* ${rightHalf.nome}\n`;
    mensagem += `*Tamanho:* ${selectedTamanho.nome} (${selectedTamanho.tamanho})\n`;
    mensagem += `*Valor:* R$ ${selectedTamanho.preco}\n`;

    if (observacoes.trim()) {
      mensagem += `*Observacoes:* ${observacoes}\n`;
    }

    mensagem += `\n_Aguardando confirmacao de disponibilidade._`;

    const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="min-h-screen py-12 px-4" id="montar">
      <div className="max-w-7xl mx-auto">
        {/* Titulo */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Monte Sua Pizza
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha os sabores para cada metade e veja sua pizza ganhar vida em tempo real
          </p>
        </motion.div>

        {/* Layout principal */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Coluna da Pizza Visual */}
          <motion.div
            className="lg:sticky lg:top-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
              <PizzaVisualizer leftHalf={leftHalf} rightHalf={rightHalf} />

              {/* Info da pizza */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${leftHalf?.id}-${rightHalf?.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-2xl font-bold text-foreground mb-2">
                      {leftHalf && rightHalf
                        ? `${leftHalf.nome} + ${rightHalf.nome}`
                        : leftHalf
                        ? leftHalf.nome
                        : rightHalf
                        ? rightHalf.nome
                        : "Escolha os sabores"}
                    </p>
                    <p className="text-4xl font-bold text-accent">
                      R$ {selectedTamanho.preco}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Tamanho */}
              <div className="mt-8">
                <SizeSelector
                  tamanhos={tamanhos}
                  selected={selectedSize}
                  onSelect={setSelectedSize}
                />
              </div>

              {/* Observacoes */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Observacoes (opcional)
                </label>
                <textarea
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  placeholder="Sem cebola, sem alho, etc..."
                  className="w-full p-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  rows={3}
                />
              </div>

              {/* Botao de Pedido */}
              <motion.button
                onClick={handleOrder}
                disabled={!canOrder}
                className={`w-full mt-6 py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                  canOrder
                    ? "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
                whileHover={canOrder ? { scale: 1.02 } : {}}
                whileTap={canOrder ? { scale: 0.98 } : {}}
              >
                <MessageCircle className="w-6 h-6" />
                Fazer Pedido via WhatsApp
              </motion.button>
            </div>
          </motion.div>

          {/* Coluna dos Sabores */}
          <div className="space-y-6">
            {/* Metade Esquerda */}
            <motion.div
              className="bg-card/30 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <button
                onClick={() => setShowLeftFlavors(!showLeftFlavors)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-card/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <PizzaIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Metade Esquerda
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {leftHalf ? leftHalf.nome : "Nenhum sabor selecionado"}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: showLeftFlavors ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-muted-foreground" />
                </motion.div>
              </button>

              <AnimatePresence>
                {showLeftFlavors && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      <FlavorSelector
                        pizzas={pizzas}
                        selectedPizza={leftHalf}
                        onSelect={setLeftHalf}
                        side="left"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Metade Direita */}
            <motion.div
              className="bg-card/30 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={() => setShowRightFlavors(!showRightFlavors)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-card/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center">
                    <PizzaIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Metade Direita
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {rightHalf ? rightHalf.nome : "Nenhum sabor selecionado"}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: showRightFlavors ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-muted-foreground" />
                </motion.div>
              </button>

              <AnimatePresence>
                {showRightFlavors && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      <FlavorSelector
                        pizzas={pizzas}
                        selectedPizza={rightHalf}
                        onSelect={setRightHalf}
                        side="right"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
