// ELEMENTOS
const abrirSaudadeBtn = document.getElementById("abrir-saudade");
const boasVindasSection = document.getElementById("boas-vindas");
const frasesSection = document.getElementById("frases");
const fraseTexto = document.getElementById("frase-texto");
const outraFraseBtn = document.getElementById("outra-frase");
const verFotosBtn = document.getElementById("ver-fotos");
const galeriaSection = document.getElementById("galeria");
const galeriaGrid = document.getElementById("galeria-grid");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const fecharModal = document.getElementById("fechar-modal");

// FRASES
const frases = [
    "A saudade aperta, mas amar você vale cada segundo.",
    "Mesmo longe, você está sempre no meu coração.",
    "Cada lembrança sua me faz sorrir.",
    "Obrigado por me mostrar uma parte de mim que eu nunca conheci antes.",
    "Você me faz muito feliz, espero te fazer sentir ao menos metade do que sinto por você, te amo💙"
];

// IMAGENS
const imagens = ["Foto1.jpg", "Foto2.jpg", "Foto3.jpg", "Foto4.jpg", "Foto5.jpg"];

// MOSTRAR FRASE ALEATÓRIA
function mostrarFraseAleatoria() {
    const i = Math.floor(Math.random() * frases.length);
    fraseTexto.textContent = frases[i];
}

// MOSTRAR GALERIA
function mostrarGaleria() {
    galeriaGrid.innerHTML = "";
    imagens.forEach(img => {
        const imagemEl = document.createElement("img");
        imagemEl.src = img;
        imagemEl.alt = "Foto nossa";
        imagemEl.classList.add("galeria-img");

        imagemEl.addEventListener("click", () => {
            modal.classList.remove("hidden");
            modalImg.src = img;
        });

        galeriaGrid.appendChild(imagemEl);
    });
    galeriaSection.classList.remove("hidden");
}

// EVENTOS
abrirSaudadeBtn.addEventListener("click", () => {
    boasVindasSection.classList.add("hidden");
    frasesSection.classList.remove("hidden");
});

outraFraseBtn.addEventListener("click", mostrarFraseAleatoria);

verFotosBtn.addEventListener("click", () => {
    frasesSection.classList.add("hidden");
    mostrarGaleria();
});

fecharModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalImg.src = ""; // Limpar src
});