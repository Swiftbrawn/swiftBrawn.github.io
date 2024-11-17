
    document.addEventListener("DOMContentLoaded", function () {
        let currentIndex = 0; // Track the current slide index
        const slides = document.querySelectorAll(".slide");
        const totalSlides = slides.length;

        function showSlide(index) {
            // Ensure the index wraps around within the range of slides
            currentIndex = index < 0 ? totalSlides - 1 : index % totalSlides;

            // Calculate the offset and update the transform property
            const offset = -currentIndex * 100; // Move by 100% per slide
            document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        // Set the slide interval (e.g., every 3 seconds)
        setInterval(nextSlide, 3000); // 3000 ms = 3 seconds
    });

