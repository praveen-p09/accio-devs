
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Addlocation from './Components/Addlocation'
import Home from '../src/Components/Home/Home';
import ImageUploadForm from './Components/ComplaintForm/form';
import Pothole from './Components/pothole/pothole';
import VideoContainer from './Components/stream/stream';
import TabularData from './Components/ComplaintData/dataTable';
import MapContainer from '../src/page/mainMap/Map';
import Navbar from './Components/Navbar/navbar';
function App() {


  return (
    <>
      <Router>
        <Navbar/>
            <Routes>
              <Route exact path="/test" element={ <Addlocation/> } />
              <Route exact path="/" element={  <Home/>  } />
              <Route path="/form" element={<ImageUploadForm/>} />
              <Route path="/pothole/:holeID" element={<Pothole/>} />
              <Route path="/stream" element={<VideoContainer/>} />
              <Route path="/formdisplay" element={<TabularData/>} />
              <Route path="/map" element={<MapContainer/>} />
              
            </Routes>
          
        </Router>

    </>
  )
}

export default App