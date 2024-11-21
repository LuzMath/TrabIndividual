const tinyButton = document.getElementById("tinyButton");
const message = document.getElementById("message");

tinyButton.addEventListener("click", (event) => {
    event.stopPropagation();
    message.textContent = "Sucesso!";
    message.style.color = "green";
});

document.body.addEventListener("click", () => {
    message.textContent = "Erro!";
    message.style.color = "red";
});
