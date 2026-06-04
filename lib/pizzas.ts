export interface Pizza {
  id: number;
  nome: string;
  descricao: string;
  cor: string; // Cor para representar visualmente o sabor
}

export const pizzas: Pizza[] = [
  {
    id: 1,
    nome: "Margherita",
    descricao: "Tomate, mozzarela e manjericão",
    cor: "#e74c3c",
  },
  {
    id: 2,
    nome: "Pepperoni",
    descricao: "Molho de tomate, mozzarela e pepperoni",
    cor: "#c0392b",
  },
  {
    id: 3,
    nome: "Calabresa",
    descricao: "Calabresa, cebola e mozzarela",
    cor: "#d35400",
  },
  {
    id: 4,
    nome: "Frango com Catupiry",
    descricao: "Frango desfiado, catupiry e mozzarela",
    cor: "#f39c12",
  },
  {
    id: 5,
    nome: "Quatro Queijos",
    descricao: "Mozzarela, gorgonzola, parmesão e catupiry",
    cor: "#f1c40f",
  },
  {
    id: 6,
    nome: "Vegetariana",
    descricao: "Tomate, cebola, pimentão, azeitona e mozzarela",
    cor: "#27ae60",
  },
  {
    id: 7,
    nome: "Bacon com Cheddar",
    descricao: "Bacon crocante, cheddar derretido e mozzarela",
    cor: "#e67e22",
  },
  {
    id: 8,
    nome: "Portuguesa",
    descricao: "Presunto, ovo, cebola, pimentão e azeitona",
    cor: "#9b59b6",
  },
];

export const tamanhos = [
  { id: "pequena", nome: "Pequena", tamanho: "30cm", preco: 35 },
  { id: "media", nome: "Média", tamanho: "40cm", preco: 45 },
  { id: "grande", nome: "Grande", tamanho: "50cm", preco: 55 },
];
