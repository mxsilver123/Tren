const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");
const dropZone = document.getElementById("dropZone");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

/* Клик загрузки */
uploadBtn.onclick = () => fileInput.click();

fileInput.onchange = e => handleFile(e.target.files[0]);

/* Drag & Drop */
dropZone.addEventListener("dragover", e => {
    e.preventDefault();
    dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", e => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    handleFile(e.dataTransfer.files[0]);
});

/* Создание карточки */
function handleFile(file) {
    if (!file) return;

    const reader = new FileReader();

    reader.onload = e => createCard(e.target.result);
    reader.readAsDataURL(file);
}

function createCard(src) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${src}">
        <div class="icons">
            <div class="icon">❤️</div>
            <div class="icon">⭐</div>
            <div class="icon">⬇️</div>
            <div class="icon delete">🗑️</div>
        </div>
    `;

    /* Открытие */
    card.querySelector("img").onclick = () => {
        modal.classList.add("active");
        modalImg.src = src;
    };

    /* Удаление */
    card.querySelector(".delete").onclick = () => card.remove();

    gallery.appendChild(card);
}

/* Закрытие модалки */
modal.onclick = () => modal.classList.remove("active");

/* Параллакс */
document.addEventListener("mousemove", e => {
    let x = (e.clientX / window.innerWidth - 0.5) * 20;
    let y = (e.clientY / window.innerHeight - 0.5) * 20;

    document.querySelector(".background").style.transform =
        `translate(${x}px, ${y}px)`;
});
