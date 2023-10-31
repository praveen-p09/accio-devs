import React, { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl';
import './style.css'

export var map;
export default function MapComponent() {
   
  
    const [currentLocation, setCurrentLocation] = useState({ lat: 21.249442788089603,  lng: 81.60535924747276});
    

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoicmFqYXNnaDE4IiwiYSI6ImNsbDJsaXBxejAxanMzZHA4N2M3Y25nZnQifQ.tax8bLXV0ELmaMYH1PtevQ';
        map = new mapboxgl.Map({
            container: 'map', // container ID
            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [currentLocation.lng, currentLocation.lat], // starting position [lng, lat]
            zoom: 17 // starting zoom
        });
        const marker = new mapboxgl.Marker()
            .setLngLat([currentLocation.lng, currentLocation.lat])
            .addTo(map)

        var fullscreenControl = new mapboxgl.FullscreenControl();
            map.addControl(fullscreenControl, 'top-right'); // You can change the position as needed
            
    }, [currentLocation]);

   



    return (
        <div id='map' style={{height:'100vh',width:'100vw'}}>
           hlo this is map
        </div>
    )
}