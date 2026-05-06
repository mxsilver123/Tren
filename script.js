/* 3D tilt эффект */
document.querySelectorAll(".tilt").forEach(el => {
    el.addEventListener("mousemove", e => {
        let x = (e.offsetX / el.clientWidth - 0.5) * 20;
        let y = (e.offsetY / el.clientHeight - 0.5) * -20;

        el.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });

    el.addEventListener("mouseleave", () => {
        el.style.transform = "rotateY(0) rotateX(0)";
    });
});

/* параллакс фон */
document.addEventListener("mousemove", e => {
    let x = (e.clientX / window.innerWidth - 0.5) * 30;
    let y = (e.clientY / window.innerHeight - 0.5) * 30;

    document.querySelector(".bg").style.transform =
        `translate(${x}px, ${y}px)`;
});
