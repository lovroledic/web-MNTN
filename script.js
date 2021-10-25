const checkpoint = window.innerWidth * 0.5;
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    document.querySelector(".title-container").style.opacity = opacity;
    if (window.innerWidth >= 896)
        document.querySelector(".title-container").style.transform = 'translate(-50%, ' + currentScroll * 0.3 + 'px)';
    else
        document.querySelector(".title-container").style.transform = 'translateY(' + currentScroll * 0.3 + 'px)';
})
