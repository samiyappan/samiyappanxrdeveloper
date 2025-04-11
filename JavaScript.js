const text = "Welcome to My Portfolio";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-effect").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;
