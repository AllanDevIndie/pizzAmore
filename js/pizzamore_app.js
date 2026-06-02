/**
 * PizzAmore - Lógica Principal
 * Sistema de Pizza Meio-a-Meio Interativa
 */

let pizzaSelecionada = {
    esquerda: null,
    direita: null,
    tamanho: 'pequena',
    preco: 35
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderizarSabores();
    configurarTamanhos();
});

// Renderiza os botões de sabores
function renderizarSabores() {
    const containerEsquerda = document.getElementById('sabores-esquerda');
    const containerDireita = document.getElementById('sabores-direita');

    pizzas.forEach(pizza => {
        // Botão para metade esquerda
        const btnEsquerda = document.createElement('button');
        btnEsquerda.className = 'btn-sabor';
        btnEsquerda.textContent = pizza.nome;
        btnEsquerda.onclick = () => selecionarEsquerda(pizza);
        containerEsquerda.appendChild(btnEsquerda);

        // Botão para metade direita
        const btnDireita = document.createElement('button');
        btnDireita.className = 'btn-sabor';
        btnDireita.textContent = pizza.nome;
        btnDireita.onclick = () => selecionarDireita(pizza);
        containerDireita.appendChild(btnDireita);
    });
}

// Seleciona o sabor da metade esquerda
function selecionarEsquerda(pizza) {
    pizzaSelecionada.esquerda = pizza;
    atualizarBotoes('esquerda');
    atualizarPizza();
}

// Seleciona o sabor da metade direita
function selecionarDireita(pizza) {
    pizzaSelecionada.direita = pizza;
    atualizarBotoes('direita');
    atualizarPizza();
}

// Atualiza o estado visual dos botões
function atualizarBotoes(lado) {
    const container = document.getElementById(`sabores-${lado}`);
    const botoes = container.querySelectorAll('.btn-sabor');
    const pizzaSelecionadaLado = lado === 'esquerda' ? pizzaSelecionada.esquerda : pizzaSelecionada.direita;

    botoes.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === pizzaSelecionadaLado?.nome) {
            btn.classList.add('active');
        }
    });
}

// Configura os botões de tamanho
function configurarTamanhos() {
    const botoes = document.querySelectorAll('.btn-tamanho');
    botoes.forEach(btn => {
        btn.addEventListener('click', () => {
            botoes.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            pizzaSelecionada.tamanho = btn.getAttribute('data-tamanho');
            pizzaSelecionada.preco = parseInt(btn.getAttribute('data-preco'));
            atualizarPizza();
        });
    });
}

// Atualiza a visualização da pizza
function atualizarPizza() {
    const imagemElement = document.getElementById('pizza-image');
    const nomeElement = document.getElementById('pizza-nome');
    const precoElement = document.getElementById('pizza-preco');

    // Se ambas as metades foram selecionadas
    if (pizzaSelecionada.esquerda && pizzaSelecionada.direita) {
        // Aqui você poderia usar uma imagem que mostra as duas metades
        // Por enquanto, vamos usar a primeira pizza como referência
        imagemElement.src = pizzaSelecionada.esquerda.imagem;
        nomeElement.textContent = `${pizzaSelecionada.esquerda.nome} + ${pizzaSelecionada.direita.nome}`;
    } else if (pizzaSelecionada.esquerda) {
        imagemElement.src = pizzaSelecionada.esquerda.imagem;
        nomeElement.textContent = pizzaSelecionada.esquerda.nome;
    } else if (pizzaSelecionada.direita) {
        imagemElement.src = pizzaSelecionada.direita.imagem;
        nomeElement.textContent = pizzaSelecionada.direita.nome;
    } else {
        imagemElement.src = 'img/pizza-vazia.png';
        nomeElement.textContent = 'Escolha os sabores';
    }

    precoElement.textContent = `R$ ${pizzaSelecionada.preco}`;
}

// Função para fazer o pedido
function fazerPedido() {
    // Validação
    if (!pizzaSelecionada.esquerda || !pizzaSelecionada.direita) {
        alert('Por favor, escolha os sabores para as duas metades da pizza!');
        return;
    }

    const observacoes = document.getElementById('observacoes').value;
    const numeroWhats = '5581994733852';

    // Monta a mensagem
    let mensagem = `*Novo Pedido PizzAmore*\n\n`;
    mensagem += `🍕 *Pizza Meio-a-Meio*\n`;
    mensagem += `*Metade Esquerda:* ${pizzaSelecionada.esquerda.nome}\n`;
    mensagem += `*Metade Direita:* ${pizzaSelecionada.direita.nome}\n`;
    mensagem += `*Tamanho:* ${pizzaSelecionada.tamanho.charAt(0).toUpperCase() + pizzaSelecionada.tamanho.slice(1)}\n`;
    mensagem += `*Valor:* R$ ${pizzaSelecionada.preco}\n`;
    
    if (observacoes.trim()) {
        mensagem += `*Observações:* ${observacoes}\n`;
    }

    mensagem += `\n_Aguardando confirmação de disponibilidade._`;

    // Abre o WhatsApp
    const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// Função auxiliar para scroll suave
function scrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
