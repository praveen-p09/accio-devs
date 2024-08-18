import React, { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl';
import {getCoordinate } from '../../utilities/Firebase'
import './style.css'
import { useNavigate,useParams } from 'react-router-dom';

export var map;
export default function MapComponent() {
   
  
    const [currentLocation, setCurrentLocation] = useState({ lat: 21.249442788089603,  lng: 81.60535924747276});
    const [locfromdb, setlocfromdb] = useState([]);
    
    const navigate=useNavigate();
    const potId = useParams();

    useEffect(() => {
        const getloca = async () => {
            const data = await getCoordinate();
            setlocfromdb(data);
            // localStorage.setItem("coordinates",JSON.stringify(data));
            
        }
        getloca();
       
    },[])
    
    console.log(locfromdb);
    // const coordinate=(localStorage.getItem("coordinates"));
    useEffect(() => {
      
        initializeMap();
      
    }, [locfromdb])
   
    
    
    function initializeMap() {
        mapboxgl.accessToken = 'pk.eyJ1IjoicmFqYXNnaDE4IiwiYSI6ImNsbDJsaXBxejAxanMzZHA4N2M3Y25nZnQifQ.tax8bLXV0ELmaMYH1PtevQ';
        map = new mapboxgl.Map({
            container: 'map', // container ID
            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [currentLocation.lng, currentLocation.lat], // starting position [lng, lat]
            zoom: 13 // starting zoom
        });

        locfromdb?.map((location) => {
            const marker = new mapboxgl.Marker({
                color: "#ff7e6b",
            })
            .setLngLat([ location.latitude,location.longitude,])
            .addTo(map)
            marker.getElement().addEventListener('click', function() {
                        alert('Marker was clicked!');
                        navigate(`/pothole/${location.id}`);
                      });
        })



        var fullscreenControl = new mapboxgl.FullscreenControl();
            map.addControl(fullscreenControl, 'top-right');

         map.addControl(
                new MapboxDirections({
                accessToken: mapboxgl.accessToken
                }),
                'top-left'
                );
    
    }

    // window.addEventListener('beforeunload',initializeMap );


    return (

        <div id='map' style={{justifyContent:'center',height:'80vh',width:'100vw', marginTop:"10vh"}}>
            map
        </div>
    )
}