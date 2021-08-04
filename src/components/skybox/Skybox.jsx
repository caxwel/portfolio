import "./skybox.scss";
import * as THREE from "three";
import {useEffect, useRef} from "react";

export default function Skybox() {
    // let scene, camera, renderer;

    // const animate = function() {
    //     renderer.render(scene, camera);
    //     requestAnimationFrame(animate);
    // }

    //         scene = new THREE.Scene();
    //         camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 45, 30000);
    //         camera.position.set(-900, -200, -900);
    //         renderer = new THREE.WebGLRenderer({antialias:true});
    //         renderer.setSize(window.innerWidth, window.innerHeight);
    
    //         let materialArray = [];
    //         let texture_ft = new THREE.TextureLoader().load('assets/browncloud_ft.jpg');
    //         let texture_bk = new THREE.TextureLoader().load('assets/browncloud_bk.jpg');
    //         let texture_up = new THREE.TextureLoader().load('assets/browncloud_up.jpg');
    //         let texture_dn = new THREE.TextureLoader().load('assets/browncloud_dn.jpg');
    //         let texture_rt = new THREE.TextureLoader().load('assets/browncloud_rt.jpg');
    //         let texture_lf = new THREE.TextureLoader().load('assets/browncloud_lf.jpg');
            
    //         materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
    //         materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
    //         materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
    //         materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
    //         materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
    //         materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));
            
    //         for (let i = 0; i < 6; i++) {
    //         materialArray[i].side = THREE.BackSide;
    //         }
            
    //         let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    //         let skybox = new THREE.Mesh(skyboxGeo, materialArray);
    //         scene.add(skybox);
    //         animate();

    const ref = useRef();

    useEffect(() => {
        const animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
          };
          function onWindowResize() {
                    
            camera.aspect = window.innerWidth/ window.innerHeight;
    
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
    
        }
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      // document.body.appendChild( renderer.domElement );
      // use ref as a mount point of the Three.js scene instead of the document.body
      ref.current.appendChild(renderer.domElement);
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            let materialArray = [];
            let texture_ft = new THREE.TextureLoader().load('assets/browncloud_ft.jpg');
            let texture_bk = new THREE.TextureLoader().load('assets/browncloud_bk.jpg');
            let texture_up = new THREE.TextureLoader().load('assets/browncloud_up.jpg');
            let texture_dn = new THREE.TextureLoader().load('assets/browncloud_dn.jpg');
            let texture_rt = new THREE.TextureLoader().load('assets/browncloud_rt.jpg');
            let texture_lf = new THREE.TextureLoader().load('assets/browncloud_lf.jpg');
            
            materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
            materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
            materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
            materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
            materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
            materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));
            
            for (let i = 0; i < 6; i++) {
            materialArray[i].side = THREE.BackSide;
            }
            
            let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
            let skybox = new THREE.Mesh(skyboxGeo, materialArray);



      const cube = new THREE.Mesh(geometry, material);
      scene.add(skybox);
      scene.add(cube);
      camera.position.z = 5;
      window.addEventListener( 'resize', onWindowResize, false );
      animate();
  
      return () => {
          // Callback to cleanup three js, cancel animationFrame, etc
      }
    }, []);
  
    return <div ref={ref} className="skybox" />;
}