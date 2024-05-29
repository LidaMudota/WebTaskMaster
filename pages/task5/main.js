document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.querySelector('input[type="text"][placeholder="Введите текст"]');
    const duplicateField = document.querySelector(".result");
    const submitButton = document.querySelector('button[type="submit"]');
    
    textInput.addEventListener("input", function() {
        duplicateField.textContent = textInput.value;
    });
    
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        console.log(textInput.value);
        textInput.value = "";
        duplicateField.textContent = "";
    });
});
