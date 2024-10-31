//dark mode

function toggleMode() {
    const themeLink = document.getElementById('themecolor');
    const toggleIcon = document.getElementById('toggleon');
    const topwhite = document.getElementById('topwhite');
    const shapegrey = document.getElementById('shapegrey');
    const topgrey2 = document.getElementById('topgrey');



    if (themeLink.getAttribute('href') === '../CSS/light.css') {
        // dark mode
        themeLink.setAttribute('href', '../CSS/dark.css');
        toggleIcon.className = 'fa-solid fa-toggle-off toggleon';
        topwhite.src = '../IMG/shape-top-black-80.png';
        shapegrey.src = '../IMG/shape-top-dark-grey-80.png';
        topgrey2.src = '../IMG/shape-top-dark-grey-80.png';

    }
    else {
        //LIGHT MODE

        themeLink.setAttribute('href', '../CSS/light.css');
        toggleIcon.className = 'fa-solid fa-toggle-on toggleon';
        topwhite.src = '../IMG/shape-top-white-80.png';
        shapegrey.src = '../IMG/shape-top-grey-80.png';
        topgrey2.src = '../IMG/shape-top-grey-80.png';

    }

};

// // Put this at the end of your JavaScript file
// document.addEventListener('DOMContentLoaded', function () {
//     updateCountdown(); // Start the countdown immediately

//     // Update the target date in the countdown function
//     function updateCountdown() {
//         // Set your target date here
//         const targetDate = new Date('2024-12-31 00:00:00').getTime();

//         function update() {
//             const currentDate = new Date().getTime();
//             const difference = targetDate - currentDate;

//             // Calculate time unit. days, hours, minute and seconds
//             const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//             // Update the display
//             document.getElementById('days').textContent = days.toString().padStart(2, '0');
//             document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
//             document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
//             document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

//             // Check if countdown is finished
//             if (difference <= 0) {
//                 clearInterval(timer);
//                 document.getElementById('days').textContent = '00';
//                 document.getElementById('hours').textContent = '00';
//                 document.getElementById('minutes').textContent = '00';
//                 document.getElementById('seconds').textContent = '00';
//             }
//         }

//         // Update immediately and then every second
//         update();
//         const timer = setInterval(update, 1000);
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    updateCountdown(); // Start the countdown immediately

    function updateCountdown() {
        // Set your target date to 29 days, 2 hours, 8 minutes, and 6 seconds from now
        const now = new Date();
        const targetDate = new Date(now.getTime() + (29 * 24 * 60 * 60 * 1000) + (2 * 60 * 60 * 1000) + (8 * 60 * 1000) + (6 * 1000)).getTime();

        function update() {
            const currentDate = new Date().getTime();
            const difference = targetDate - currentDate;

            // Calculate time units: days, hours, minutes, and seconds
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Update the display
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

            // Check if countdown is finished
            if (difference <= 0) {
                clearInterval(timer);
                document.getElementById('days').textContent = '00';
                document.getElementById('hours').textContent = '00';
                document.getElementById('minutes').textContent = '00';
                document.getElementById('seconds').textContent = '00';
            }
        }

        // Update immediately and then every second
        update();
        const timer = setInterval(update, 1000);
    }
});




// //............COUNTDOWN...........
// var countDown = new Date("nov 30, 2024 23:59:59").getTime();

// //...........UPDATING THE COUNTDOWNTIME........
// var x = setInterval(function() {

//     //..............TODAY DATE AND TIME........
//     var now = new Date().getTime();

//     //.............FINDING THE DISTANCE BETWEEN THE TWO.....
//     var distance = countDown - now;

//     //...............TIME CALCULATION FOR ALL......
//     var days = Math.floor(distance / (1000 * 60 * 60 *24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     document.getElementById("demo").innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s";

//      //...................IF COUNTDOWN IS OVER WHAT SHOULD HAPPEN.........
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "EXPIRED";
//     }

// },1000);

// darkmode

// function darkmode() {
//     document.getElementById('themecolor').setAttribute('href', 'CSS/dark.css');
//     document.getElementById('toggleon').className = 'fa-solid fa-toggle-off toggleon';
//     document.getElementById('topwhite').src = '/Assets/IMG/shape-top-black-80.png';
//     document.getElementById('topgrey').src = '/Assets/IMG/shape-top-dark-grey-80.png';
//     document.getElementById('shapegrey').src = '/Assets/IMG/shape-top-dark-grey-80.png'

//     document.getElementById('themecolor').setAttribute('href', 'CSS/light.css');
//     document.getElementById('toggleon').className = 'fa-solid fa-toggle-on toggleon';
//     document.getElementById('topwhite').src = '/Assets/IMG/shape-top-white-80.png';
//     document.getElementById('topgrey').src = '/Assets/IMG/shape-top-grey-80.png';
//     document.getElementById('shapegrey').src = '/Assets/IMG/shape-top-grey-80.png';
// }

// lightmode

// function lightmode(){
// document.getElementById('themecolor').setAttribute('href', 'CSS/light.css');
// document.getElementById('toggleon').className='fa-solid fa-toggle-on toggleon';
// document.getElementById('topwhite').src = '/Assets/IMG/shape-top-white-80.png';
// document.getElementById('topgrey').src = '/Assets/IMG/shape-top-grey-80.png';
// document.getElementById('shapegrey').src = '/Assets/IMG/shape-top-grey-80.png';
// }

  // Select the arrow element
  const arrowUp = document.querySelector('.arrow-up');

  // Add scroll event listener
  window.addEventListener('scroll', () => {
      // Check if the user is at the top of the page
      if (window.scrollY === 0) {
          arrowUp.classList.add('hidden'); // Add hidden class when at top
      } else {
          arrowUp.classList.remove('hidden'); // Remove hidden class on scroll
      }
  });

  // Function to detect when an element is in view
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to apply the typing effect
function applyTypingEffect(element, text) {
    let i = 0;
    const speed = 50; // Typing speed
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Scroll event to check visibility of each text element
window.addEventListener("scroll", () => {
    const typewriterElements = document.querySelectorAll(".typewriter");
    typewriterElements.forEach((element) => {
        if (isInViewport(element) && !element.classList.contains("typed")) {
            element.classList.add("typed");
            applyTypingEffect(element, element.getAttribute("data-text"));
        }
    });
});

let currentIndex = 0;

function changeSlide() {
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    // Remove active class from the current image
    images[currentIndex].classList.remove('active');

    // Update the index to the next image
    currentIndex = (currentIndex + 1) % totalImages;

    // Add active class to the new current image
    images[currentIndex].classList.add('active');

    // Update the transform property to slide the carousel
    const carousel = document.querySelector('.carousel');
    const offset = -currentIndex * (100 / totalImages); // Calculate offset
    carousel.style.transform = `translateX(${offset}%)`;
}

// Start changing slides every 5 seconds
setInterval(changeSlide, 5000);
