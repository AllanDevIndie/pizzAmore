"use client";

import { motion } from "framer-motion";
import { Pizza } from "@/lib/pizzas";
import { Check } from "lucide-react";

interface FlavorSelectorProps {
  pizzas: Pizza[];
  selectedPizza: Pizza | null;
  onSelect: (pizza: Pizza) => void;
  side: "left" | "right";
}

export function FlavorSelector({
  pizzas,
  selectedPizza,
  onSelect,
  side,
}: FlavorSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
        <span
          className="w-3 h-3 rounded-full"
          style={{
            background:
              side === "left"
                ? "linear-gradient(135deg, #f97316, #ea580c)"
                : "linear-gradient(135deg, #fbbf24, #f59e0b)",
          }}
        />
        Metade {side === "left" ? "Esquerda" : "Direita"}
      </h3>

      <div className="grid gap-2">
        {pizzas.map((pizza, index) => {
          const isSelected = selectedPizza?.id === pizza.id;

          return (
            <motion.button
              key={pizza.id}
              onClick={() => onSelect(pizza)}
              className={`relative w-full p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                isSelected
                  ? "bg-primary/10 border-primary shadow-lg shadow-primary/20"
                  : "bg-card/50 border-transparent hover:bg-card hover:border-border"
              }`}
              initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                {/* Indicador de cor do sabor */}
                <motion.div
                  className="w-10 h-10 rounded-full flex-shrink-0 shadow-md"
                  style={{ backgroundColor: pizza.cor }}
                  animate={{
                    scale: isSelected ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex-1 min-w-0">
                  <p
                    className={`font-semibold truncate ${
                      isSelected ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {pizza.nome}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">
                    {pizza.descricao}
                  </p>
                </div>

                {/* Check mark */}
                <motion.div
                  initial={false}
                  animate={{
                    scale: isSelected ? 1 : 0,
                    opacity: isSelected ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                </motion.div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
