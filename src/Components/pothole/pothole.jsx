import React from 'react'
import './pothole.css';
const Pothole = () => {
  return (
    <>
      <div className="pothole">
      <h1>Pothole #1</h1>
      <div className="container">
        <div className='bg3d wrapper'>
          <img src="https://t3.ftcdn.net/jpg/03/60/90/92/360_F_360909266_3mWP6FZZOQMG5aRUozFYPKjPm6FK4nUx.jpg" alt="bg-scale" />
          <model-viewer id="reveal" loading="eager" src="../../model.glb" alt="A 3D model of an item" camera-controls></model-viewer>
        </div>
        <div className="details">
          <h3>Details</h3>
          <p>Coordinates : 22.89989, 18.982972</p>
          <p>Depth : 4 cm</p>
          <p>Diameter : 30 cm</p>
          <p>Severity : High</p>
          <p>Material : Asphalt concrete</p>
          <p>Suggestion : </p>
          <ul>
            <li><p>Sealing</p></li>
            <li><p>Overlays</p></li>
            <li><p>Reconstruction</p></li>
            <li><p>Patching</p></li>
          </ul>
          
        </div>
      </div>
      </div>
    </>
  )
}

export default Pothole