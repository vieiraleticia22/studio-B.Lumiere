
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

const galleryImages = [
    {
        src: "imagens/hero-studio.webp",
        alt: "Recepção do Studio B. Lumière"
    },
    {
        src: "imagens/studio-interior.webp",
        alt: "Interior do Studio B. Lumière"
    },
    {
        src: "imagens/parede.webp",
        alt: "Parede decorativa do Studio B. Lumière"
    },
    {
        src: "imagens/interior_cilios.webp",
        alt: "Sala de cílios do Studio B. Lumière"
    },
    {
        src: "imagens/espelho.webp",
        alt: "Sala de maquiagem do Studio B. Lumière"
    },
    {
        src: "imagens/interior_maquiagem.webp",
        alt: "Sala de maquiagem do Studio B. Lumière"
    }
];

let currentGalleryImage = 0;

const galleryImage = document.querySelector("#galleryImage");
const prevGallery = document.querySelector("#prevGallery");
const nextGallery = document.querySelector("#nextGallery");

function showGalleryImage() {

    galleryImage.src = galleryImages[currentGalleryImage].src;

    galleryImage.alt = galleryImages[currentGalleryImage].alt;
}

nextGallery.addEventListener("click", () => {

    currentGalleryImage++;

    if (currentGalleryImage >= galleryImages.length) {
        currentGalleryImage = 0;
    }

    showGalleryImage();
});

prevGallery.addEventListener("click", () => {

    currentGalleryImage--;

    if (currentGalleryImage < 0) {
        currentGalleryImage = galleryImages.length - 1;
    }

    showGalleryImage();
});

const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();




const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});