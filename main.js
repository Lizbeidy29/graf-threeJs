
import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena
const escena = new THREE.Scene();
escena.background = new THREE.Color(0x000000);

// Crear la cámara
const camara = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Crear el renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear iluminación
const luz = new THREE.DirectionalLight(0xffffff, 1.5);
luz.position.set(5, 5, 5);
escena.add(luz);

// Iluminación ambiental
const luzAmbiente = new THREE.AmbientLight(0xffffff, 0.35);
escena.add(luzAmbiente);

// Crear geometría para los cubos
const geometria = new THREE.BoxGeometry(1.3, 1.3, 1.3);

// Crear materiales
const materialVerde = new THREE.MeshStandardMaterial({
    color: 0x00ff00
});

const materialAzul = new THREE.MeshStandardMaterial({
    color: 0x0000ff
});

const materialRojo = new THREE.MeshStandardMaterial({
    color: 0xff0000
});

// Crear los tres cubos
const cuboVerde = new THREE.Mesh(geometria, materialVerde);
const cuboAzul = new THREE.Mesh(geometria, materialAzul);
const cuboRojo = new THREE.Mesh(geometria, materialRojo);

// Posicionar los cubos
cuboVerde.position.x = -2.2;
cuboAzul.position.x = 0;
cuboRojo.position.x = 2.2;

// Agregar los cubos a la escena
escena.add(cuboVerde);
escena.add(cuboAzul);
escena.add(cuboRojo);

// Posicionar cámara
camara.position.z = 6;

// Animación con diferentes velocidades
function animar() {

    // Cubo verde: velocidad rápida
    cuboVerde.rotation.x += 0.025;
    cuboVerde.rotation.y += 0.025;

    // Cubo azul: velocidad media
    cuboAzul.rotation.x += 0.012;
    cuboAzul.rotation.y += 0.012;

    // Cubo rojo: velocidad lenta
    cuboRojo.rotation.x += 0.006;
    cuboRojo.rotation.y += 0.006;

    renderer.render(escena, camara);
}

// Iniciar animación
renderer.setAnimationLoop(animar);

// Ajustar tamaño de pantalla
window.addEventListener('resize', () => {
    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});