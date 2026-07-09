let carrinho = [];

//? abrindo o carrinho 
document.getElementById('btn-carrinho').addEventListener('click', () => {
    document.getElementById('painel-carrinho').classList.remove('translate-x-full');
    document.getElementById('overlay-carrinho').classList.remove('hidden');
});

//? fechando o carrinho 
document.getElementById('btn-fechar-carrinho').addEventListener('click', fecharCarrinho);
document.getElementById('overlay-carrinho').addEventListener('click', fecharCarrinho);

//? função correta
function fecharCarrinho() {
    document.getElementById('painel-carrinho').classList.add('translate-x-full');
    document.getElementById('overlay-carrinho').classList.add('hidden');
}

//! adicionando item ao carrinho (tem algo impedindo o item de aparecer no carrinho)
//? aparentemente está correto, mas eu tenho certeza que tem coisa errada
function adicionarAoCarrinho(nome, preco) {

    const produtoExistente = carrinho.find(item => item.nome === nome);

    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        carrinho.push({nome, preco, quantidade: 1 });
    }

    atualizarCarrinho();

    document.getElementById('painel-carrinho').classList.remove('translate-x-full');
    document.getElementById('overlay-carrinho').classList.remove('hidden');
}

//! interface do carrinho
//? Foi realizada uma correção no erro do carrinho do site

function atualizarCarrinho() {
    const lista = document.getElementById('lista-carrinho');
    const vazio = document.getElementById('carrinho-vazio');
    const contador = document.getElementById('contador-carrinho');
    const total = document.getElementById('total-carrinho');

    const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);
    const totalValor = carrinho.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);

    if (totalItens > 0) {
        contador.textContent = totalItens;
        contador.classList.remove('hidden');
    } else {
        contador.classList.add('hidden');
    }

    total.textContent = `R$ ${totalValor.toFixed(2).replace('.', '.')}`;

    lista.innerHTML = '';

    if (carrinho.length === 0) {

        lista.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full text-gray-400">
                <span class="text-5xl mb-4">🛍️</span>
                <p class="text-lg">Seu carrinho está vazio</p>
                <p class="text-sm mt-1">Adicione produtos para continuar</p>
            </div>`;
        return;
    }

    carrinho.forEach(item => {
        lista.innerHTML += `
            <div class="flex items-center justify-between py-4 border-b border-gray-100">
                
                <div class="flex-1">
                    <p class="font-semibold text-gray-900 text-sm">${item.nome}</p>
                    <p class="text-red-500 font-bold">R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', '.')}</p>
                </div>
                
                <div class="flex items-center gap-2 ml-4">

                    <button    
                        onclick="alterarQuantidade('${item.nome}', -1)" 
                        class="w-7 h-7 rounded-full  text-gray-600 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 cursor-pointer">
                        -
                    </button>

                    <span class="w-6 text-center font-bold text-gray-900">${item.quantidade}</span>

                    <button 
                        onclick="alterarQuantidade('${item.nome}', 1)"
                        class="w-7 h-7 rounded-full text-gray-600 hover:text-white hover:border-green-500 transition-all duration=200 cursor-pointer">
                        +
                    </button>

                </div>
            </div>
        `;
    });

    atualizarLinkWhatsApp(totalValor);
}

function alterarQuantidade(nome, delta) {
    const produto = carrinho.find(item => item.nome === nome);

    if (produto) {
        produto.quantidade += delta;

        if (produto.quantidade <= 0) {
            carrinho = carrinho.filter(item => item.nome !== nome);
        }
    }

    atualizarCarrinho();
}

function atualizarLinkWhatsApp(totalValor) {
    const btnFinalizar = document.getElementById('btn-finalizar');

    let mensagem = 'Olá! Bom dia, gostaria de realizar um pedido: %0A%0A';

    carrinho.forEach(item => {
        mensagem += `🍫 ${item.nome} x${item.quantidade} - R$ ${(item.preco * item.quantidade).toFixed(2).replace('.','.')}%0A`;
    });

    mensagem += `%0A*Total: R$ ${totalValor.toFixed(2).replace('.','.')}*`;

    if (carrinho === null) {
        
    } 

    btnFinalizar.href = `https://wa.me/5521991398370?text=${mensagem}`;
}