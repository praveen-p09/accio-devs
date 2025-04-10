import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Addlocation from './Components/Addlocation'
import Home from '../src/Components/Home/Home';
import ImageUploadForm from './Components/ComplaintForm/form';
import Pothole from './Components/pothole/pothole';
import TabularData from './Components/ComplaintData/dataTable';
import MapContainer from '../src/page/mainMap/Map';
import Navbar from './Components/Navbar/navbar';
import Uploadvideo from './Components/Uploadvideo/Uploadvideo';
import Slider from './Components/slider/Slider';
import Workings from './Components/working/Working';
import ComplaintProgress from './Components/ComplaintProgress/complaintProgress';
import NotFoundPage from "./Components/notFound";
function App() {


  return (
    <>
      <Router>
        <Navbar/>
            <Routes>
              <Route exact path="*" element={  <NotFoundPage/> } />
              <Route exact path="/test" element={ <Addlocation/> } />
              <Route exact path="/slide" element={ <Slider/> } />
              <Route exact path="/" element={  <Home/>  } />
              <Route path="/form" element={<ImageUploadForm/>} />
              <Route path="/pothole/:holeID" element={<Pothole/>} />
              <Route path="/formdisplay" element={<TabularData/>} />
              <Route path="/map" element={<MapContainer/>} />
              <Route path="/uploadvideo" element={<Uploadvideo/>} />
              <Route path="/working" element={<Workings/>} />
              <Route path="/complaintprogress" element={<ComplaintProgress/>} />
              
            </Routes>
          
        </Router>

    </>
  )
}

export default App
