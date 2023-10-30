
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Addlocation from './Components/Addlocation'
import Main from './page/Main'
import MapContainer from './page/Map';
import ImageUploadForm from './ComplaintForm/form'

function App() {


  return (
    <>
      <Router>
      <MapContainer/> 
            <Routes>
              <Route exact path="/test" element={ <Addlocation/> } />
              <Route path="/form" element={<ImageUploadForm />} />

            </Routes>
          
        </Router>

    </>
  )
}

export default App
