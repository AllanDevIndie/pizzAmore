"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Tamanho {
  id: string;
  nome: string;
  tamanho: string;
  preco: number;
}

interface SizeSelectorProps {
  tamanhos: Tamanho[];
  selected: string;
  onSelect: (id: string) => void;
}

export function SizeSelector({ tamanhos, selected, onSelect }: SizeSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-foreground">Tamanho</h3>

      <div className="grid grid-cols-3 gap-3">
        {tamanhos.map((tamanho) => {
          const isSelected = selected === tamanho.id;

          return (
            <motion.button
              key={tamanho.id}
              onClick={() => onSelect(tamanho.id)}
              className={`relative p-4 rounded-xl text-center transition-all duration-300 border-2 ${
                isSelected
                  ? "bg-accent/10 border-accent shadow-lg shadow-accent/20"
                  : "bg-card/50 border-transparent hover:bg-card hover:border-border"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {isSelected && (
                <motion.div
                  layoutId="size-indicator"
                  className="absolute inset-0 rounded-xl bg-accent/10 border-2 border-accent"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <div className="relative z-10">
                <p
                  className={`font-bold text-lg ${
                    isSelected ? "text-accent" : "text-foreground"
                  }`}
                >
                  {tamanho.nome}
                </p>
                <p className="text-sm text-muted-foreground">{tamanho.tamanho}</p>
                <p
                  className={`text-lg font-bold mt-1 ${
                    isSelected ? "text-accent" : "text-foreground"
                  }`}
                >
                  R$ {tamanho.preco}
                </p>
              </div>

              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center shadow-lg"
                >
                  <Check className="w-4 h-4 text-accent-foreground" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
