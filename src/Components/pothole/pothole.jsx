import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import {getCoordinate } from '../../utilities/Firebase'
import Navbar from '../Navbar/navbar';
import './pothole.css';
const ProgressBarWithSteps = ({ steps, currentStep }) => {
  const stepWidth = (100 / (steps.length - 1)) * currentStep;
}
const Pothole = () => {
  const postId = useParams();
  // console.log(postId)
  const [locfromdb, setlocfromdb] = useState([]);
const [holedetail, setholedetail] = useState();
  const [hole, sethole] = useState();

  

  

  useEffect(() => {
    const getloca = async () => {
        const data = await getCoordinate();
        setlocfromdb(data);
        const postInfo = data.filter((x) => x.id === postId.holeID)[0];
        console.log(postInfo);
        setholedetail(postInfo)
        console.log(holedetail)
        // console.log(data);
    }
    
    getloca();
   
    
}, [])


  return (
    <>
      <Navbar/>
      <div className="pothole">
      
      {holedetail && (
       
      <div className="container">
         <h1>Pothole -{holedetail.id}</h1>
         <div className='flexr'>
        <div className='bg3d wrapper'>

          <img src="https://t3.ftcdn.net/jpg/03/60/90/92/360_F_360909266_3mWP6FZZOQMG5aRUozFYPKjPm6FK4nUx.jpg" alt="bg-scale" />
          <model-viewer id="reveal" loading="eager" src={`../../${holedetail.glbname}.glb`} alt="A 3D model of an item" camera-controls></model-viewer>
        </div>
        <div  className="details">
          <h3>Details</h3>
          <p>Coordinates : {holedetail.longi}, {holedetail.lati}</p>
          <p>Depth:{holedetail.depth}</p>
          <p>Diameter :{holedetail.diameter}cm</p>
          <p>Severity :{holedetail.severity}</p>
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
      </div>)}
      </div>
    </>
  )
}

export default Pothole