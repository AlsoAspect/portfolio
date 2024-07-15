document.addEventListener('DOMContentLoaded', () => {
    const rotatingImages = document.querySelectorAll('.spinning-gear');
    let lastScrollY = window.scrollY;
    let totalScroll = 0;

    function updateRotation() {
        const scrollPosition = window.scrollY;
        const scrollDelta = scrollPosition - lastScrollY;
        totalScroll += scrollDelta;
        const rotationAngle = -totalScroll / 15;
        rotatingImages.forEach(image => {
            image.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
        });
        lastScrollY = scrollPosition;
    }

    function onScroll() {
        requestAnimationFrame(updateRotation);
    }

    window.addEventListener('scroll', onScroll);
});
