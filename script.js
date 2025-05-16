const cursor = document.querySelector('.cursor'); // Selecciona el elemento HTML con la clase "cursor" (el punto central del cursor personalizado)
const cursorEffect = document.querySelector('.cursor-effect'); // Selecciona el elemento HTML con la clase "cursor-effect" (el círculo o efecto alrededor del cursor)
const particlesContainer = document.getElementById('cursor-particles'); // Selecciona el contenedor donde se agregarán las partículas

let centerX = window.innerWidth / 2; // Posición X inicial del cursor (centro de la ventana)
let centerY = window.innerHeight / 2; // Posición Y inicial del cursor (centro de la ventana)

let angle = 0; // Ángulo inicial para rotación de las partículas
const radius = 30; // Radio de rotación: distancia desde el punto central al círculo de partículas
const numParticles = 10; // Número total de partículas que giran alrededor del cursor
const particles = []; // Arreglo vacío donde se almacenarán las partículas creadas

// Crear las partículas y agregarlas al DOM
for(let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div'); // Crea un nuevo div para representar una partícula
  particle.classList.add('particle'); // Le agrega la clase CSS "particle" para poder estilizarla
  particlesContainer.appendChild(particle); // Agrega la partícula al contenedor en el HTML
  particles.push(particle); // Guarda la partícula en el arreglo para animarla después
}

// Escuchar el movimiento del mouse
document.addEventListener('mousemove', e => {
  centerX = e.clientX; // Actualiza la posición X del mouse
  centerY = e.clientY; // Actualiza la posición Y del mouse

  // Mueve el punto central del cursor a la nueva posición
  cursor.style.transform = `translate(${centerX}px, ${centerY}px) translate(-50%, -50%)`;
  cursorEffect.style.transform = `translate(${centerX}px, ${centerY}px) translate(-50%, -50%)`;
});

// Función que anima constantemente las partículas en círculo
function animate() {
  angle += 0.05; // Aumenta el ángulo para que las partículas giren (más rápido = número mayor)

  particles.forEach((particle, index) => {
    // Calcula el ángulo único para cada partícula (para que no se superpongan)
    const particleAngle = angle + (index * (2 * Math.PI / numParticles));

    // Calcula las coordenadas X e Y para cada partícula usando trigonometría
    const x = centerX + radius * Math.cos(particleAngle); // Posición X en círculo
    const y = centerY + radius * Math.sin(particleAngle); // Posición Y en círculo

    // Mueve la partícula a su nueva posición girando alrededor del cursor
    particle.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  });

  // Llama esta misma función en el siguiente frame para mantener la animación en bucle
  requestAnimationFrame(animate);
}

// Inicia la animación cuando carga el script
animate();

const cursorLight = document.createElement('div');
cursorLight.classList.add('cursor-light');
document.body.appendChild(cursorLight);

document.addEventListener('mousemove', (e) => {
  cursorLight.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
});

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.body.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #222 0%, #000 100%)`;
});

const lens = document.querySelector('.cursor-lens');

document.addEventListener('mousemove', (e) => {
  lens.style.left = `${e.clientX}px`;
  lens.style.top = `${e.clientY}px`;
});
