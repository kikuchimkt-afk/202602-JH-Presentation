document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const counter = document.getElementById('currentSlide');
    const total = document.getElementById('totalSlides');

    let currentSlideIndex = 0;
    const totalSlides = slides.length;

    total.textContent = totalSlides;

    function showSlide(index) {
        // Wrap around logic (optional, currently hard stops)
        if (index < 0) index = 0;
        if (index >= totalSlides) index = totalSlides - 1;

        // Update state
        currentSlideIndex = index;

        // Update UI
        slides.forEach((slide, i) => {
            if (i === currentSlideIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update counter
        counter.textContent = currentSlideIndex + 1;

        // Button states
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === totalSlides - 1;
        prevBtn.style.opacity = index === 0 ? '0.5' : '1';
        nextBtn.style.opacity = index === totalSlides - 1 ? '0.5' : '1';
    }

    // Event Listeners
    prevBtn.addEventListener('click', () => showSlide(currentSlideIndex - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlideIndex + 1));

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            showSlide(currentSlideIndex + 1);
        } else if (e.key === 'ArrowLeft') {
            showSlide(currentSlideIndex - 1);
        }
    });

    // Initialize
    showSlide(0);
});
