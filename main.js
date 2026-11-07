
import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const escena = new THREE.Scene();

const camara = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría y material para el cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshStandardMaterial({
    color: 0x00ff00
});

const cubo = new THREE.Mesh(geometry, material);

escena.add(cubo);

// Agregar una luz direccional y ajustar su posición
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

directionalLight.position.set(5, 5, 5).normalize();

escena.add(directionalLight);

// Posicionar la cámara
camara.position.z = 5;

// Función de animación con rotación y renderizado
function animar() {

    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;

    renderer.render(escena, camara);
}

// Iniciar la animación
renderer.setAnimationLoop(animar);