/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const popupClose = document.getElementById("popup-close");
    const successMessage = document.getElementById("successMessage");

    // Open popup when "Get Offer" button is clicked
    document.querySelectorAll(".offer-button").forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            popup.style.display = "flex";
        });
    });

    // Close popup
    popupClose.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Form submission
    document.getElementById("submitOffer").addEventListener("click", function () {
        const email = document.getElementById("userEmail").value.trim();
        const requirements = document.getElementById("userRequirements").value.trim();
        const budget = document.getElementById("userBudget").value.trim();
        
        // Validation
        let valid = true;
        if (!email) {
            document.getElementById("userEmail").classList.add("error");
            valid = false;
        } else {
            document.getElementById("userEmail").classList.remove("error");
        }
        if (!requirements) {
            document.getElementById("userRequirements").classList.add("error");
            valid = false;
        } else {
            document.getElementById("userRequirements").classList.remove("error");
        }
        if (!budget) {
            document.getElementById("userBudget").classList.add("error");
            valid = false;
        } else {
            document.getElementById("userBudget").classList.remove("error");
        }

        if (valid) {
            // Send email using EmailJS or server-side email handling
            sendEmail(email, requirements, budget);
        }
    });

    function sendEmail(email, requirements, budget) {
        // Replace with your email handling or EmailJS integration here
        console.log("Sending email:", email, requirements, budget);

        // Success Animation
        successMessage.style.display = "block";
        setTimeout(() => {
            successMessage.style.display = "none";
            popup.style.display = "none";
        }, 2000);
    }
});



sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
