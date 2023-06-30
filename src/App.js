import React from 'react';
import { Viewer, Entity } from 'resium';
import { Cesium, Ion, IonResource, Cartesian3 } from 'cesium';
Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkODRlMTkwZi05MGFhLTRhZjUtOWMxOS1mYzg5ZGNlNmU5NzUiLCJpZCI6MTQ3NDY3LCJpYXQiOjE2ODY5ODc5Njh9.ocqrF8LGorgwl7rdSyTxivtOLhON8QdRHoU1CxIleg0";
const resource = await IonResource.fromAssetId(1908976);

const My3DModel = () => {
  return (
    <Viewer>
      <Entity
        position={Cartesian3.fromDegrees(-75.59777, 40.03883, 0)}
        model={{
          uri: "public/Cesium_Air.glb",
          scale: 10000,
        }}
      />
    </Viewer>
  );
};

export default My3DModel;