document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarNav = document.getElementById('navbar-nav');

    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener('click', function () {
            navbarNav.classList.toggle('open');
            navbarToggle.classList.toggle('open');
        });
    }

    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("message-success");
    const popup = document.getElementById("popup-message");
    const popupOk = document.getElementById("popup-ok");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            setTimeout(() => {
                if (successMessage) {
                    successMessage.textContent = "Pesan berhasil terkirim!";
                    successMessage.style.display = "block";

                    setTimeout(() => {
                        successMessage.style.display = "none";
                    }, 3000);
                }

                if (popup) {
                    popup.style.display = "flex";
                }

                form.reset();
            }, 1000);
        });
    }

    if (popupOk && popup) {
        popupOk.addEventListener("click", function () {
            popup.style.display = "none";
        });
    }
});