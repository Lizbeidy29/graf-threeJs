
import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// =====================================
// 1. CREAR ESCENA, CAMARA Y RENDERIZADOR
// =====================================

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x202020);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


// =====================================
// 2. CREAR GEOMETRIA Y MATERIAL
// =====================================

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshStandardMaterial({
    color: 0x00ff00
});

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);


// =====================================
// 3. AGREGAR LUZ DIRECCIONAL
// =====================================

const directionalLight = new THREE.DirectionalLight(
    0xffffff,
    1
);

directionalLight.position.set(5, 5, 5).normalize();

scene.add(directionalLight);


// =====================================
// 4. AGREGAR LUZ AMBIENTAL
// =====================================

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);

scene.add(ambientLight);


// =====================================
// 5. POSICIONAR LA CAMARA
// =====================================

camera.position.z = 5;


// =====================================
// 6. FUNCION DE ANIMACION
// =====================================

function animate() {

    // Rotacion en el eje X
    cube.rotation.x += 0.01;

    // Rotacion en el eje Y
    cube.rotation.y += 0.01;

    // Renderizar la escena
    renderer.render(scene, camera);
}


// =====================================
// 7. INICIAR LA ANIMACION
// =====================================

renderer.setAnimationLoop(animate);


// =====================================
// 8. AJUSTAR EL TAMAÑO DE LA VENTANA
// =====================================

window.addEventListener('resize', () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});
