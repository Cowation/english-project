/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Html, useGLTF } from "@react-three/drei";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial006: THREE.Mesh;
    defaultMaterial005: THREE.Mesh;
    defaultMaterial007: THREE.Mesh;
    defaultMaterial002: THREE.Mesh;
    defaultMaterial001: THREE.Mesh;
    defaultMaterial008: THREE.Mesh;
    defaultMaterial: THREE.Mesh;
    defaultMaterial003: THREE.Mesh;
    defaultMaterial004: THREE.Mesh;
  };
  materials: {
    TVfront: THREE.MeshStandardMaterial;
    TVback: THREE.MeshStandardMaterial;
    TVScreen: THREE.MeshStandardMaterial;
  };
};

export function WiiCrt(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/crt.gltf") as GLTFResult;
  // get current mouse percentage
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 0, -0.17]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 26.84, 0]}>
            <group
              position={[11.06, -26.3, -18.65]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial006.geometry}
                material={materials.TVfront}
              />
            </group>
            <group position={[0, -26.84, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial005.geometry}
                material={materials.TVfront}
              />
            </group>
            <group
              position={[26.91, -17.62, -17.22]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={[0.17, 0.16, 0.17]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial007.geometry}
                material={materials.TVfront}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial002.geometry}
              material={materials.TVfront}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial001.geometry}
              material={materials.TVfront}
            />
            <group position={[0, -19.83, 0.85]} scale={0.11}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial008.geometry}
                material={materials.TVfront}
              />
            </group>
            <group position={[0, -0.04, 0]} scale={[0.99, 0.99, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial.geometry}
                material={materials.TVback}
              />
            </group>
            <group position={[0, 0, -166.62]} scale={398.22}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial003.geometry}
                // material={materials.TVScreen}
              >
                <Html position={[0, 0, 0.42]} scale={0.025} transform occlude>
                  <div className="select-none overflow-hidden bg-red relative">
                    <Image
                      src="/images/wiimenu.jpg"
                      alt="Wii Menu"
                      width={160}
                      height={100}
                      draggable={false}
                      className="block"
                    />
                    <div
                      className="fixed"
                      style={{
                        translate: "translate(-50%, -50%)",
                        left: `${mouse.x * 100}%`,
                        top: `${mouse.y * 90}%`,
                      }}
                    >
                      <Image
                        src="/images/wiipointer.png"
                        alt="Wii Pointer"
                        width={10}
                        height={10}
                      />
                    </div>
                  </div>
                </Html>
              </mesh>
            </group>
            <group
              position={[3.17, -20.05, -18.3]}
              rotation={[0, 0, -0.6]}
              scale={[0.38, 0.38, 0.22]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial004.geometry}
                material={materials.TVfront}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/crt.gltf");