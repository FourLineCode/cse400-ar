import React, { useEffect, useRef } from 'react';

const markers = ['ohms', 'circuit'];

export function Tracker() {
  const sceneRef = useRef(null);
  const [found, setFound] = useState(false);

  useEffect(() => {
    if (sceneRef.current) {
      const sceneEl = sceneRef.current;
      sceneEl.addEventListener('markerFound', () => setFound(true));

      console.info('AR.js image tracker initialized');
    }
  }, [sceneRef.current]);

  return (
    <div className='max-w-[100vw] max-h-[100vh] w-full h-full'>
      <a-scene
        ref={sceneRef}
        vr-mode-ui='enabled: false;'
        renderer='logarithmicDepthBuffer: true;'
        embedded
        arjs='trackingMethod: best; sourceType: webcam;debugUIEnabled: false;'
      >
        {markers.map((marker, i) => (
          <a-nft
            type='nft'
            url={`/descriptors/${marker}`}
            smooth='true'
            smoothCount='10'
            smoothTolerance='.01'
            smoothThreshold='5'
          ></a-nft>
        ))}
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}
