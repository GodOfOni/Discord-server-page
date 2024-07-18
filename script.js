// script.js

// JavaScript functionality can be added here if needed
// For example, interactive features or dynamic content loading
// Pobranie modal
var modal = document.getElementById("myModal");

// Pobranie obrazka w modal
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Pobranie wszystkich miniatur
var thumbnails = document.querySelectorAll('.thumbnail');

// Dodanie event listenera do każdej miniatury
thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Pobranie elementu zamykającego
var span = document.getElementsByClassName("close")[0];

// Zamknięcie modal przy kliknięciu na (x)
span.onclick = function() {
    modal.style.display = "none";
}
