const checkpoint = window.innerWidth * 0.5;
const container = document.querySelector(".title-container");
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    container.style.opacity = opacity;
    container.style.transform = 'translateY(' + currentScroll * 0.3 + 'px)';
})
