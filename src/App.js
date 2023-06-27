import { Viewer, Entity, PointGraphics } from "resium";
import { Cartesian3 } from "cesium";

const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);

const cameraDest = Cartesian3.fromDegrees(-95.0, 40.0, 210000);
const modelMatrix = Transforms.eastNorthUpToFixedFrame(origin);

function App() {
  return (
    <Viewer full>
      <CameraFlyTo destination={cameraDest} duration={0} />
      <Entity position={position} name="Tokyo" description="Hello, world.">
        <PointGraphics pixelSize={10} />
      </Entity>
      <Model>
25      url="Cesium_Air.glb"
26      modelMatrix={modelMatrix}
27      minimumPixelSize={128}
28      maximumScale={20000}
29      onReady={action("onReady")}
31    </Model>
    </Viewer>
  );
}

export default App;