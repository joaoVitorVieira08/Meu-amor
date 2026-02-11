// script.js

// Seleção de elementos
const abrirSaudadeBtn = document.getElementById("abrir-saudade");
const frasesSection = document.getElementById("frases");
const boasVindasSection = document.getElementById("boas-vindas");
const fraseTexto = document.getElementById("frase-texto");
const outraFraseBtn = document.getElementById("outra-frase");
const verFotosBtn = document.getElementById("ver-fotos");
const galeriaSection = document.getElementById("galeria");
const galeriaGrid = document.getElementById("galeria-grid");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const fecharModal = document.getElementById("fechar-modal");

// Frases personalizadas
const frases = [
    "A saudade aperta, mas amar você vale cada segundo.",
    "Mesmo longe, você está sempre no meu coração.",
    "Cada lembrança sua me faz sorrir.",
    "Obrigado por me mostrar uma parte de mim que eu nunca conheci antes.",
    "Você me faz muito feliz, espero te fazer sentir ao menos metade do que sinto por você, te amo💙"
];

// Imagens (coloque exatamente os nomes com F maiúsculo)
const imagens = [
    "Foto1.jpg",
    "Foto2.jpg",
    "Foto3.jpg",
    "Foto4.jpg",
    "Foto5.jpg"
];

// Função para mostrar a próxima frase aleatória
function mostrarFraseAleatoria() {
    const indice = Math.floor(Math.random() * frases.length);
    fraseTexto.textContent = frases[indice];
}

// Função para mostrar a galeria de fotos
function mostrarGaleria() {
    galeriaGrid.innerHTML = ""; // Limpa o grid antes de adicionar
    imagens.forEach(img => {
        const imagemEl = document.createElement("img");
        imagemEl.src = img;
        imagemEl.alt = "Foto nossa";
        imagemEl.classList.add("galeria-img");

        // Abrir modal ao clicar na imagem
        imagemEl.addEventListener("click", () => {
            modal.classList.remove("hidden");
            modalImg.src = img;
        });

        galeriaGrid.appendChild(imagemEl);
    });
    galeriaSection.classList.remove("hidden");
}

// Eventos
abrirSaudadeBtn.addEventListener("click", () => {
    boasVindasSection.classList.add("hidden");
    frasesSection.classList.remove("hidden");
});

outraFraseBtn.addEventListener("click", mostrarFraseAleatoria);

verFotosBtn.addEventListener("click", () => {
    frasesSection.classList.add("hidden");
    mostrarGaleria();
});

// Fechar modal
fecharModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalImg.src = ""; // Limpa o src do modal ao fechar
});