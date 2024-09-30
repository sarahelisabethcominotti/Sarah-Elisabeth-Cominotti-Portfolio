import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    mountRef.current.appendChild(renderer.domElement);

    renderer.render(scene, camera);

    // creation of shape
    const geometry = new THREE.TorusGeometry(10, 3, 10, 50);
    const material = new THREE.MeshStandardMaterial({
      color: 0xff6347,
    });
    const torus = new THREE.Mesh(geometry, material);
    // scene.add(torus);

    //addition of light
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);
    // renderer.render(scene, camera);

    // HELPERS
    // const lightHelper = new THREE.PointLightHelper(light);
    // const girdHelper = new THREE.GridHelper(200, 50);
    // scene.add(lightHelper, girdHelper);
    const controls = new OrbitControls(camera, renderer.domElement);

    function addStars() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      //randomly position stars on the scene
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));
      star.position.set(x, y, z);
      scene.add(star);
    }

    //how many stars
    Array(600).fill().forEach(addStars);

    // add background color
    // const spaceBackground = new THREE.TextureLoader().load("space.jpg");
    scene.background = null;
    //   renderer.render(scene, camera);

    //animate on scroll
    function moveCamera() {
      const t = document.body.getBoundingClientRect().bottom;

      camera.position.z = t * -0.02;
      camera.position.x = t * -0.00002;
      camera.position.y = t * -0.00002;
    }

    document.body.onscroll = moveCamera;

    // animation of shape
    function animate() {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;
      controls.update();

      renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
        background: "radial-gradient(60% 50% at 50% 50%, #FBFCFCFF 0%, #632C63FF 0%, #060023 100%)"

      }}
    ></div>
  );
}

export default ThreeScene;
