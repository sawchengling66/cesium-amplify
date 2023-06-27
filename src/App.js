import { Viewer, Entity, PointGraphics } from "resium";
import { Model, Transforms, Cartesian3 } from "cesium";

const origin = Cartesian3.fromDegrees(-95.0, 40.0, 200000.0);
const cameraDest = Cartesian3.fromDegrees(-95.0, 40.0, 210000);
const modelMatrix = Transforms.eastNorthUpToFixedFrame(origin);

function App() {
  return (
    <Viewer full>
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