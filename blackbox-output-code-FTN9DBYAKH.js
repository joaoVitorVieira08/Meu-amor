// Array de frases românticas (fáceis de editar)
const frases = [
    "A saudade aperta, mas amar você vale cada segundo.",
    "Meu coração fica onde você está.",
    "A distância nunca foi maior que o nosso amor.",
    "Cada dia longe é um dia a menos pra te abraçar.",
    "Você é meu lugar favorito."
];

let indiceFrase = 0; // Índice da frase atual

// Elementos DOM
const boasVindas = document.getElementById('boas-vindas');
const frasesSection = document.getElementById('frases');
const galeriaSection = document.getElementById('galeria');
const fraseTexto = document.getElementById('frase-texto');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const voltarTopo = document.getElementById('voltar-topo');

// Botões
document.getElementById('abrir-saudade').addEventListener('click', () => {
    boasVindas.classList.add('hidden');
    frasesSection.classList.remove('hidden');
    frasesSection.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave
});

document.getElementById('outra-frase').addEventListener('click', () => {
    indiceFrase = (indiceFrase + 1) % frases.length; // Cicla pelas frases
    fraseTexto.textContent = frases[indiceFrase];
});

document.getElementById('ver-fotos').addEventListener('click', () => {
    frasesSection.classList.add('hidden');
    galeriaSection.classList.remove('hidden');
    galeriaSection.scrollIntoView({ behavior: 'smooth' });
});

// Carregar galeria de fotos (da pasta images)
const galeriaGrid = document.getElementById('galeria-grid');
const imagens = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg', 'foto5.jpg']; // Adicione seus nomes de arquivo aqui

imagens.forEach(img => {
    const imgElement = document.createElement('img');
    imgElement.src = `images/${img}`;
    imgElement.alt = 'Foto do casal';
    imgElement.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modalImg.src = imgElement.src;
    });
    galeriaGrid.appendChild(imgElement);
});

// Fechar modal
document.getElementById('fechar-modal').addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Botão voltar ao topo
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        voltarTopo.classList.remove('hidden');
    } else {
        voltarTopo.classList.add('hidden');
    }
});

voltarTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});