document.querySelector("a").addEventListener("click", function(event) {
    event.preventDefault();
    let newText = prompt("Введите новый текст для ссылки:");
    if (newText !== null) {
        this.textContent = newText;
    }
});