import React from 'react';
import './Home.css';
import Footer from './Footer';
import complaintImg from '../../assets/Images/complaint.svg';
import working from '../../assets/Videos/working.mp4';
import detection from '../../assets/Images/detection.jpeg';
import map from '../../assets/Images/map-img.png';
import pothole_details from '../../assets/Images/pothole_details.jpeg';

const Home=()=> {


    return (
      <>
          <div className="fullHomepage">
          <div className='topContainer-homepage'>
            <div className='topContainerDark-homepage'>
              <div className='topContainerContent-homepage'>
                <div className='title-homepage'><h1 className='h1-homepage'>Pothole Detection using ML Model</h1></div>
            <a href="/form"><button className='button-homepage'><img src={complaintImg} alt="" className='complaintImg-button' /> Register Complaint </button></a>
            </div>
              <div className='topContainerDarker-homepage'></div>
          </div></div>
          <dir className='topContainerVoid-homepage'></dir>
          <div className='container-homepage'>

          
          <div className='mainContainerContent'>
          <div className='mainContainerContent-1 mainContainerCard'><h2>Why Potholes happen?</h2>
          <p>
              <ul>
            
            <li><strong>Freeze-Thaw Cycle:</strong> In regions with fluctuating temperatures, water seeps into cracks in the road. When the temperature drops, the water freezes and expands, putting stress on the pavement. As the ice thaws, the pavement contracts, leaving gaps and weakening the road structure.
            </li>
            <li> <strong>Traffic Wear and Tear:</strong> Constant vehicular traffic, especially heavy vehicles, can accelerate the deterioration of road surfaces. The repeated pressure from vehicle loads weakens the asphalt and underlying layers, making them more susceptible to damage.
            </li>
            <li> <strong>Water Infiltration:</strong> Adequate drainage is crucial for road durability. When water accumulates on the road surface due to poor drainage systems, it can penetrate the pavement layers. The combined effects of water and traffic create a destructive force that weakens the road structure over time.
            </li>
            <li> <strong>Poor Construction and Materials:</strong> Inadequate road construction practices or the use of substandard materials can significantly contribute to the formation of potholes. When roads are not built to withstand environmental stresses or if low-quality materials are used, they are more likely to degrade and develop potholes.
            </li>
            <li> <strong>Chemical Damage:</strong> De-icing salts and chemicals used to melt snow and ice on roads can have corrosive effects on pavement materials. These chemicals can penetrate the asphalt, leading to accelerated deterioration and the formation of potholes.
            </li>
            <li> <strong>Age and Lack of Maintenance:</strong> Over time, all roads experience wear and tear. Without regular maintenance, such as crack sealing and resurfacing, the road becomes more vulnerable to the elements and traffic stresses, increasing the likelihood of pothole formation.
            </li>      
            
            </ul>
          </p>
          </div>

          <div className='mainContainerContent-2 mainContainerCard'><strong><h2>Reporting Potholes: Be the Change</h2></strong><br/>
          <p>Become an advocate for smoother roads by learning how to report potholes in your community. Website provides resources and guides on how to effectively file complaint, ensuring that the necessary repairs are made promptly.
          </p>
          </div>
          </div>

          <div className="working">
            <h1>Components & Working</h1>
            <div className='component-homepage'>
            <div>
            <video width="900" controls>
                <source src={working} type="video/mp4" />
                Your browser does not support the video tag.
            </video></div><div>
              <h3>Working</h3>
            </div>
            </div>
            <div className='component-homepage'>
              <div><h3>Map</h3><p>Moving from point A to point B?<br /> To make your journey seamless and safe, We made it easier for you to locate potholes, Just mark your starting point and ending point and we'll show you where the potholes are in your journey.</p></div>
              <img src={map} alt="" />
              
            
              
            </div><div className='component-homepage'>
            
            <img src={detection} alt="" />
            </div><div className='component-homepage'>
            <img src={pothole_details} alt="" />
            </div>
          </div>
          </div>
          </div>
          <Footer/>
      </>
    )
  }
  
  export default Home;
  