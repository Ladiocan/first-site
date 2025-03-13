document.addEventListener("DOMContentLoaded", () => {
    // Dark mode
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Lightbox
    const images = document.querySelectorAll(".lightbox-trigger");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.top = "0";
    lightbox.style.left = "0";
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0, 0, 0, 0.8)";
    lightbox.style.display = "none";
    lightbox.style.justifyContent = "center";
    lightbox.style.alignItems = "center";
    document.body.appendChild(lightbox);

    const lightboxImg = document.createElement("img");
    lightboxImg.style.maxWidth = "80%";
    lightboxImg.style.maxHeight = "80%";
    lightbox.appendChild(lightboxImg);

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.style.display = "flex";
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Video loop
    const video = document.querySelector(".video-container video");
    video.controls = false;
});
