const lights = document.querySelectorAll('.light');
let currentLightIndex = 0;

function toggleColor() {
    lights.forEach(light => {
        light.classList.remove('active');
    });

    lights[currentLightIndex].classList.add('active');
    
    currentLightIndex++;

    if (currentLightIndex >= lights.length) {
        currentLightIndex = 0;
    }
}

lights.forEach(light => {
    light.addEventListener('click', toggleColor);
});
