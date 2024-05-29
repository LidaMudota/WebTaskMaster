document.addEventListener("DOMContentLoaded", function() {
    console.log('Привет, мир!');

    document.querySelector(".console-link").addEventListener("click", function(event) {
        event.preventDefault();
        alert("Откройте консоль с помощью клавиши 'F12'!");
    });
});
