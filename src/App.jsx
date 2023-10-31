
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Addlocation from './Components/Addlocation'
import Main from './page/Main'
import MapContainer from '../src/page/mainMap/Map';
import ImageUploadForm from './Components/ComplaintForm/form';
import TabularData from './Components/ComplaintData/dataTable'


function App() {


  return (
    <>
      <Router>
     
            <Routes>
              <Route exact path="/test" element={ <Addlocation/> } />
              <Route exact path="/" element={  <MapContainer/>  } />
              <Route path="/form" element={<ImageUploadForm/>} />
              <Route path="/data" element={<TabularData/>} />

            </Routes>
          
        </Router>

    </>
  )
}

export default App
