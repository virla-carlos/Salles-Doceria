const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu-mobile');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})

const imgs = document.querySelectorAll('.carrossel-img');
const dotsContainer = document.getElementById('dots');
let atual = 0;

imgs.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `w-2 h-2 rounded-full cursor-pointer transition-all ${i === 0 ? 'bg-white' : 'bg-white/50'}`;
    dot.addEventListener('click', () => irPara(i));
    dotsContainer.append(dot)
});

function irPara(index) {
    imgs[atual].classList.replace('opacity-100', 'opacity-0');
    dotsContainer.children[atual].classList.replace('bg-white', 'bg-white/50');

    atual = index;

    imgs[atual].classList.replace('opacity-0', 'opacity-100');
    dotsContainer.children[atual].classList.replace('bg-white/50', 'bg-white');
}

// Troca automática a cada 3 segundos
setInterval(() => {
    irPara((atual + 1) % imgs.length);
}, 3000);


const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('shadow-lg', 'backdrop-blur-sm', 'bg-white/80');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('shadow-lg', 'backdrop-blur-sm', 'bg-white/80');
        navbar.classList.add('bg-transparent');
    }
});