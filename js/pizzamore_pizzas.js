/**
 * Dados das Pizzas - PizzAmore
 * Cada pizza tem: nome, descrição e imagem
 */

const pizzas = [
    {
        id: 1,
        nome: "Margherita",
        descricao: "Tomate, mozzarela e manjericão",
        imagem: "img/margherita.png"
    },
    {
        id: 2,
        nome: "Pepperoni",
        descricao: "Molho de tomate, mozzarela e pepperoni",
        imagem: "img/pepperoni.png"
    },
    {
        id: 3,
        nome: "Calabresa",
        descricao: "Calabresa, cebola e mozzarela",
        imagem: "img/calabresa.png"
    },
    {
        id: 4,
        nome: "Frango com Catupiry",
        descricao: "Frango desfiado, catupiry e mozzarela",
        imagem: "img/frango-catupiry.png"
    },
    {
        id: 5,
        nome: "Quatro Queijos",
        descricao: "Mozzarela, gorgonzola, parmesão e catupiry",
        imagem: "img/quatro-queijos.png"
    },
    {
        id: 6,
        nome: "Vegetariana",
        descricao: "Tomate, cebola, pimentão, azeitona e mozzarela",
        imagem: "img/vegetariana.png"
    },
    {
        id: 7,
        nome: "Bacon com Cheddar",
        descricao: "Bacon crocante, cheddar derretido e mozzarela",
        imagem: "img/bacon-cheddar.png"
    },
    {
        id: 8,
        nome: "Portuguesa",
        descricao: "Presunto, ovo, cebola, pimentão e azeitona",
        imagem: "img/portuguesa.png"
    },
    {
        id: 9,
        nome: "Havaiana",
        descricao: "Presunto, abacaxi e mozzarela",
        imagem: "img/havaiana.png"
    },
    {
        id: 10,
        nome: "Toscana",
        descricao: "Tomate seco, rúcula, parmesão e mozzarela",
        imagem: "img/toscana.png"
    }
];

// Função para obter uma pizza pelo ID
function getPizza(id) {
    return pizzas.find(p => p.id === id);
}

// Função para obter todas as pizzas
function todasAsPizzas() {
    return pizzas;
}
