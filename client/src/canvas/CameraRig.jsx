import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from '../store';

const CameraRig = ({ children }) => {
    const group = useRef();
    const snap = useSnapshot(state);

    useFrame((state, delta) => {
        const isBreakpoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;

        // Model initial Position

        let targetPosition = [0, 0, 0.5];
        if(snap.intro) {
            if(isBreakpoint) targetPosition = [0, 0, 2];
            if(isMobile) targetPosition = [-0.4, 0, 2];
        } else {
            if(isMobile) targetPosition = [0, 0, 2], delta;
            else targetPosition = [0, 0, 0.3], delta;
        }

        //Model Camera Initial Position
        easing.damp3(state.camera.position, targetPosition, 0.800, delta)



        // Model Rotation Click
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
             0.25, 
             delta
        )
    })

    return (
        <group ref={group}>
            {children}
        </group>
    )
}

export default CameraRig 