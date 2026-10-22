
const professionals = [
    {
        nome: "Beatriz Rodrigues",
        especialidade: "Maquiadora",
        imagem: "imagens/bea.webp.webp",
        whatsapp: "https://wa.me/5527996020014"
    },
    {
        nome: "Thayany Cani",
        especialidade: "Cílios / Brow / Desing",
        imagem: "imagens/thay.webp.webp",
        whatsapp: "https://wa.me/5527997191724"
    },
    {
        nome: "Laíza Costta",
        especialidade: "Nail Desing",
        imagem: "imagens/laiza.webp.webp",
        whatsapp: "https://wa.me/5527988634440"
    },
    {
        nome: "Bruna Alves",
        especialidade: "Lash Lifting / Cílios / Brow / Desing",
        imagem: "imagens/bruna.webp.webp",
        whatsapp: "https://wa.me/5527992970437"
    },
    {
        nome: "Clarice Sobreiro",
        especialidade: "Nail Designer",
        imagem: "imagens/clarice.webp",
        whatsapp: "https://wa.me/5527997651408"
    }
];

const professionalContainer = document.querySelector("#professionalCards");
professionals.forEach((professional) => {

    const card = document.createElement("article");

    card.classList.add("professional-card");

    card.innerHTML = `
        <img
            src="${professional.imagem}"
            alt="Foto de ${professional.nome}"
            loading="lazy"
        >

        <div class="professional-info">

            <h3>${professional.nome}</h3>

            <p class="especialidade">
                ${professional.especialidade}
            </p>

            <a
                href="${professional.whatsapp}"
                target="_blank"
                rel="noopener"
                class="whatsapp-button"
            >
                Agendar
            </a>

        </div>
    `;

    professionalContainer.appendChild(card);
})
