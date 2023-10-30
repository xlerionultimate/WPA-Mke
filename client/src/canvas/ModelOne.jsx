import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';



const ModelOne = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/pc.glb');

    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal);

    useFrame((state, delta) => easing.dampC(materials.lamber1.color, snap.color, 0.25, delta));

    const stateString = JSON.stringify(snap);

    return (
        <group
            key={stateString}
        >
            <mesh
                castShadow
                geometry={nodes.pc.geometry}
                material={materials.lamber1}
                material-roughness={1}
                dispose={null}
     //           scale={0.5}
     //           position={[0.01, -0.002, 0]}
            >
            </mesh>

            {snap.isFullTexture && (
                <Decal
                    position={0, 0, 0}
                    rotation={0, 0, 0}
                    scale={1}
                    map={fullTexture}
                />
            )}
            {snap.isLogolTexture && (
                <Decal
                    position={0, 0.04, 0.15}
                    rotation={0, 0, 0}
                    scale={0.15}
                    map={logoTexture}
                    map-anisotropy={16}
                    depthTest={false}
                    depthWrite={true}
                />
            )}
        </group>


    )
}
export default ModelOne 