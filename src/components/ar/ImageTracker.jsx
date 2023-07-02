import { useEffect, useRef } from 'react';

export function ImageTracker() {
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef.current) {
      // detect target found
      targetRef.current.addEventListener('targetFound', (event) => {
        console.log('target found');
      });
      // detect target lost
      targetRef.current.addEventListener('targetLost', (event) => {
        console.log('target lost');
      });
    }
  }, []);

  return (
    <a-scene
      mindar-image='imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.2/examples/image-tracking/assets/card-example/card.mind; autoStart: false;'
      color-space='sRGB'
      renderer='colorManagement: true, physicallyCorrectLights'
      vr-mode-ui='enabled: false'
      device-orientation-permission-ui='enabled: false'
    >
      <a-camera
        position='0 0 0'
        look-controls='enabled: false'
        cursor='fuse: false; rayOrigin: mouse;'
        raycaster='near: 10; far: 10000; objects: .clickable'
      ></a-camera>
      <a-entity ref={targetRef} id='example-target' mindar-image-target='targetIndex: 0'></a-entity>
    </a-scene>
  );
}
