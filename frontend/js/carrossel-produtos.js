const carrosseis = {

    brownies:   {atual: 0, total: 0},
    copos:      {atual: 0, total: 0},
    pequenasDelicias:    {atual: 0, total: 0},
    sobremesas: {atual: 0, total: 0}

};

let touchStartX = 0;
let touchEndX   = 0;

function getVisiveis() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    
    return 1;
}

function atualizarPosicao(categoria, animado) {
    const track = document.getElementById(`track-${categoria}`);
    if (!track) return;

    const primeiroCard = track.querySelector('.card-produto');
    if (!primeiroCard) return;

    const larguraCard = primeiroCard.offsetWidth + 24;
    const deslocamento = carrosseis[categoria].atual * larguraCard;

    track.style.transition = animado ? 'transform 0.3s ease' : 'none';
    track.style.transform = `translateX(-${deslocamento}px)`;

}

function moverCarrossel(categoria, direcao) {
    const config   = carrosseis[categoria];
    const visiveis = getVisiveis();
    const total    = config.total;

    config.atual += direcao;

    if (config.atual > total - visiveis) {
        atualizarPosicao(categoria, true);
        setTimeout(() => {
            config.atual = 0;
            atualizarPosicao(categoria, false);
        }, 300);
        return;
    }

    if (config.atual < 0) {
        config.atual = total - visiveis;
        atualizarPosicao(categoria, false);
        setTimeout(() => {
            atualizarPosicao(categoria, true);
        }, 10);
        return;
    }

    atualizarPosicao(categoria, true);
}

function adicionarSwipe(categoria) {
    const track = document.getElementById(`track-${categoria}`);
    if (!track) return;

    const container = track.parentElement;
    if (!container) return;

    let startX = 0;

    container.addEventListener('touchstart', (e) =>{
        startX = e.touches[0].clientX;
    },{passive: true});

    container.addEventListener('touchend', (e) => {
        const diferenca = startX - e.changedTouches[0].clientX;

        if (Math.abs(diferenca) < 50) return;

        if (diferenca > 0) {
            moverCarrossel(categoria, 1);
        } else {
            moverCarrossel(categoria, -1);
        }
    }, {passive: true });
}

function inicializarCarrossel(categoria) {
    const track = document.getElementById(`track-${categoria}`);
    if (!track) return;

    const cards = track.querySelectorAll('.card-produto');
    carrosseis[categoria].total = cards.length;
    carrosseis[categoria].atual = 0;

    atualizarPosicao(categoria, false);
    adicionarSwipe(categoria)
}

window.addEventListener('resize', () => {
    Object.keys(carrosseis).forEach(cat => {

        const visiveis = getVisiveis();
        const max = carrosseis[cat].total - visiveis;
        if (carrosseis[cat].atual > max) {
            carrosseis[cat].atual = Math.max(0, max);
        }
        atualizarPosicao(cat, false);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    Object.keys(carrosseis).forEach(cat => inicializarCarrossel(cat));
});