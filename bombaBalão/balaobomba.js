const bomb = document.getElementById("bomb");
const balloon = document.getElementById("balloon");
const message = document.getElementById("message");
const resetButton = document.getElementById("resetButton");

let balloonSize = 100; 
const maxBalloonSize = 300; 
const inflateStep = 30; 

bomb.addEventListener("click", () => {
    if (balloonSize < maxBalloonSize) {
        balloonSize += inflateStep;
        balloon.style.width = `${balloonSize}px`;
        balloon.style.height = `${balloonSize}px`;
        message.textContent = "O balão está inflando...";
    }
    if (balloonSize >= maxBalloonSize) {
        balloon.src = "imgs/estouro.jpg"; 
        message.textContent = "Boom! O balão estourou!";
        bomb.style.pointerEvents = "none"; 
    }
});

resetButton.addEventListener("click", () => {
    balloonSize = 100; 
    balloon.style.width = `${balloonSize}px`;
    balloon.style.height = `${balloonSize}px`;
    balloon.src = "imgs/balao.jpg"; 
    message.textContent = "";
    bomb.style.pointerEvents = "auto"; 
});
