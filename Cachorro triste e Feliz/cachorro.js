const dogImage = document.getElementById("dogImage");

dogImage.addEventListener("mouseenter", () => {
    dogImage.src = "cachorro feliz.jpg"; 
});

dogImage.addEventListener("mouseleave", () => {
    dogImage.src = "cachorro triste.jpg";  
});
