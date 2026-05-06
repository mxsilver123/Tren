const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");

uploadBtn.onclick = () => fileInput.click();

fileInput.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<img src="${e.target.result}">`;
        gallery.appendChild(card);
    };
    reader.readAsDataURL(file);
};
