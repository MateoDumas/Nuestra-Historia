// Música
const music = document.getElementById("musica");
const musicBtn = document.getElementById("music-btn");
let playing = false;

musicBtn.addEventListener("click", () => {
    if (!playing) {
        music.play();
        musicBtn.textContent = "⏸️";
    } else {
        music.pause();
        musicBtn.textContent = "🎵";
    }
    playing = !playing;
});

// Scroll suave
document.getElementById("comenzar").addEventListener("click", () => {
    document.getElementById("historia").scrollIntoView({ behavior: "smooth" });
});

// Timeline animado
const items = document.querySelectorAll(".timeline-item");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
}, { threshold: 0.5 });
items.forEach(item => observer.observe(item));

// Efecto máquina de escribir
const texto = `Mi pajarita… 🐦💞  

Hoy se cumplen dos años desde que nuestras vidas se cruzaron,  
y todavía me cuesta creer todo lo que compartimos.  

Risas, abrazos, momentos simples que se vuelven eternos cuando estás.  
Tu mirada, tu voz, tu forma de hacer que todo parezca más lindo…  
no hay día que no agradezca tenerte a mi lado.  

A veces me quedo pensando en todo lo que crecimos juntos,  
en cómo aprendimos a querernos de verdad, con lo bueno y lo difícil.  
Y me sale una sonrisa, porque sé que lo nuestro es real y hermoso.  

Mi amor, gracias por ser mi refugio cuando el mundo se vuelve ruido.  
Por mirarme como nadie, por hacerme sentir en casa con solo un abrazo.  

No sé qué traerá el futuro, pero sí sé algo:  
donde estés vos, ahí quiero estar yo.  

Feliz aniversario, mi amor ❤️  
Tu pajarito 🕊️
`;

const p = document.getElementById("texto-carta");
let i = 0;
function escribir() {
    if (i < texto.length) {
        p.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, 45);
    }
}
setTimeout(escribir, 1000);

// Corazones flotando en inicio y final
function crearCorazon(contenedor) {
    const corazon = document.createElement("span");
    corazon.textContent = "💖";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = Math.random() * 2 + 4 + "s";
    contenedor.appendChild(corazon);
    setTimeout(() => corazon.remove(), 6000);
}
setInterval(() => crearCorazon(document.querySelector(".corazones")), 600);
setInterval(() => crearCorazon(document.querySelector(".corazones-final")), 700);

// Carrusel automático con JS
const carrusel = document.querySelector(".carrusel-contenedor");
const imagenes = document.querySelectorAll(".carrusel-contenedor img");

let index = 0;

function moverCarrusel() {
    index++;
    if (index >= imagenes.length) {
        index = 0;
    }
    carrusel.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(moverCarrusel, 3500); // cambia cada 3.5 segundos
