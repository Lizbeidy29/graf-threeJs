
import * as THREE from "three";

// ==================================
// 1. CREAR LA ESCENA
// ==================================

const scene = new THREE.Scene();

// Color de fondo
scene.background = new THREE.Color(0x202020);


// ==================================
// 2. CREAR LA CAMARA
// ==================================

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Alejar la cámara del cubo
camera.position.z = 5;


// ==================================
// 3. CREAR EL RENDERIZADOR
// ==================================

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

// Ajustar el renderizador al tamaño de pantalla
renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

// Agregar el renderizador al documento
document.body.appendChild(renderer.domElement);


// ==================================
// 4. CREAR LA GEOMETRIA
// ==================================

const geometry = new THREE.BoxGeometry(2, 2, 2);


// ==================================
// 5. CREAR EL MATERIAL
// ==================================

const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});


// ==================================
// 6. CREAR EL CUBO
// ==================================

const cube = new THREE.Mesh(
    geometry,
    material
);


// ==================================
// 7. AGREGAR EL CUBO A LA ESCENA
// ==================================

scene.add(cube);


// ==================================
// 8. CREAR LA ANIMACION
// ==================================

function animate() {

    requestAnimationFrame(animate);

    // Rotación horizontal
    cube.rotation.y += 0.01;

    // Rotación vertical
    cube.rotation.x += 0.01;

    // Dibujar la escena
    renderer.render(scene, camera);
}


// ==================================
// 9. EJECUTAR LA ANIMACION
// ==================================

animate();


// ==================================
// 10. AJUSTAR EL TAMAÑO DE LA VENTANA
// ==================================

window.addEventListener('resize', () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});