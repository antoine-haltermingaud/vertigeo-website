/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    const animationDuration = 3000; // 3 seconds

    // Function to animate each number with ease-out effect
    const animateNumbers = (stat) => {
        const target = +stat.getAttribute('data-target'); // Target number to reach
        const start = 0;
        const startTime = performance.now(); // Record the start time

        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3); // Ease-out cubic function

        const updateCount = (currentTime) => {
            const elapsedTime = currentTime - startTime; // Time passed since animation started
            const progress = Math.min(elapsedTime / animationDuration, 1); // Normalize the progress [0, 1]

            const easeProgress = easeOutCubic(progress); // Apply easing function to progress
            const current = Math.floor(easeProgress * target); // Calculate current value

            stat.innerText = current; // Update the number

            if (progress < 1) {
                requestAnimationFrame(updateCount); // Continue animation if progress is less than 100%
            } else {
                stat.innerText = target; // Ensure the final value is the exact target
            }
        };

        requestAnimationFrame(updateCount); // Start the animation
    };

    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                animateNumbers(stat);
                observer.unobserve(stat); // Stop observing once the animation has started
            }
        });
    }, { threshold: 0.5 }); // Start animation when 50% of the element is visible

    // Observe each stat number for scroll interaction
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
});


var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
myModal.toggle()