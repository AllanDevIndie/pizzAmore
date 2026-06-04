"use client";

import { motion } from "framer-motion";
import { Pizza } from "@/lib/pizzas";

interface PizzaVisualizerProps {
  leftHalf: Pizza | null;
  rightHalf: Pizza | null;
}

export function PizzaVisualizer({ leftHalf, rightHalf }: PizzaVisualizerProps) {
  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto">
      {/* Sombra da pizza */}
      <div className="absolute inset-0 rounded-full bg-black/30 blur-3xl translate-y-8 scale-90" />

      {/* Pizza container */}
      <motion.div
        className="relative w-full h-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Borda da pizza */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 shadow-2xl" />

        {/* Interior da pizza (massa) */}
        <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-amber-200 via-amber-100 to-amber-200 overflow-hidden">
          {/* Container das metades */}
          <div className="relative w-full h-full">
            {/* Metade esquerda */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
            >
              {leftHalf ? (
                <motion.div
                  key={leftHalf.id}
                  className="w-full h-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    background: `radial-gradient(ellipse at 30% 50%, ${leftHalf.cor}dd 0%, ${leftHalf.cor}99 40%, ${leftHalf.cor}66 70%, transparent 100%)`,
                  }}
                >
                  {/* Ingredientes decorativos */}
                  <PizzaToppings color={leftHalf.cor} side="left" />
                </motion.div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-amber-400/50 text-sm font-medium -rotate-45 -translate-x-4">
                    Escolha um sabor
                  </span>
                </div>
              )}
            </motion.div>

            {/* Linha divisória */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-amber-300/50 via-amber-400/80 to-amber-300/50 z-10" />

            {/* Metade direita */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
            >
              {rightHalf ? (
                <motion.div
                  key={rightHalf.id}
                  className="w-full h-full"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    background: `radial-gradient(ellipse at 70% 50%, ${rightHalf.cor}dd 0%, ${rightHalf.cor}99 40%, ${rightHalf.cor}66 70%, transparent 100%)`,
                  }}
                >
                  {/* Ingredientes decorativos */}
                  <PizzaToppings color={rightHalf.cor} side="right" />
                </motion.div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-amber-400/50 text-sm font-medium rotate-45 translate-x-4">
                    Escolha um sabor
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Brilho superior */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
}

function PizzaToppings({ color, side }: { color: string; side: "left" | "right" }) {
  const positions = side === "left" 
    ? [
        { top: "25%", left: "15%" },
        { top: "45%", left: "25%" },
        { top: "65%", left: "18%" },
        { top: "35%", left: "35%" },
        { top: "55%", left: "38%" },
        { top: "75%", left: "30%" },
      ]
    : [
        { top: "25%", left: "65%" },
        { top: "45%", left: "75%" },
        { top: "65%", left: "68%" },
        { top: "35%", left: "55%" },
        { top: "55%", left: "58%" },
        { top: "75%", left: "62%" },
      ];

  return (
    <>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            ...pos,
            backgroundColor: i % 2 === 0 ? "#fff" : color,
            opacity: 0.7,
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
        />
      ))}
    </>
  );
}
