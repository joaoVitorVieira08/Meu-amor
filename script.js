// FRASES
const frases = [
    "A saudade aperta, mas amar você vale cada segundo.",
    "Meu coração fica onde você está ❤️",
    "A distância nunca foi maior que o nosso amor.",
    "Obrigado por me mostrar uma parte de mim que eu nunca conheci antes.",
    "Você me faz muito feliz, espero te fazer sentir ao menos metade do que sinto por você, te amo💙"
];

// IMAGENS
const imagens = ["Foto1.jpg", "Foto2.jpg", "Foto3.jpg", "Foto4.jpg"];

// ELEMENTOS
const abrirBtn = document.getElementById("abrir-saudade");
const boasVindas = document.getElementById("boas-vindas");
const secaoFrases = document.getElementById("frases");
const secaoGaleria = document.getElementById("galeria");

const fraseTexto = document.getElementById("frase-texto");
const outraFraseBtn = document.getElementById("outra-frase");
const verFotosBtn = document.getElementById("ver-fotos");

const galeriaGrid = document.getElementById("galeria-grid");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const fecharModal = document.getElementById("fechar-modal");

// ABRIR SEÇÃO DE FRASES
abrirBtn.addEventListener("click", () => {
    boasVindas.classList.add("hidden");
    secaoFrases.classList.remove("hidden");
});

// TROCAR FRASE
outraFraseBtn.addEventListener("click", () => {
    const i = Math.floor(Math.random() * frases.length);
    fraseTexto.textContent = frases[i];
});

// IR PARA GALERIA
verFotosBtn.addEventListener("click", () => {
    secaoFrases.classList.add("hidden");
    secaoGaleria.classList.remove("hidden");
});

// CARREGAR IMAGENS
imagens.forEach(nome => {
    const img = document.createElement("img");
    img.src = nome;
    img.classList.add("foto");

    img.addEventListener("click", () => {
        modal.classList.remove("hidden");
        modalImg.src = nome;
    });

    galeriaGrid.appendChild(img);
});

// FECHAR MODAL
fecharModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});