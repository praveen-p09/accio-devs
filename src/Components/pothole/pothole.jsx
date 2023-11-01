import React from 'react'

const Pothole = () => {
  return (
    <div>
      <model-viewer id="reveal" loading="eager" src="../../model.glb" alt="A 3D model of an item" auto-rotate camera-controls></model-viewer>
    </div>
  )
}

export default Pothole