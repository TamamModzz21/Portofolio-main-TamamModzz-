document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('navbar-toggle').addEventListener('click', function() {
    var navbar = document.getElementById('navbar-nav');
    var toggleButton = document.getElementById('navbar-toggle');
    navbar.classList.toggle('open');
    toggleButton.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("message-success");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        successMessage.textContent = "Pesan berhasil terkirim!";
        successMessage.style.display = "block";

        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);

        form.reset();
    });
});

// Form pesan jeda 2 detik
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const popup = document.getElementById("popup-message");
    const popupOk = document.getElementById("popup-ok");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        setTimeout(() => {
            popup.style.display = "flex";
            form.reset();
        }, 1000); 
    });

    popupOk.addEventListener("click", function () {
        popup.style.display = "none";
    });
});