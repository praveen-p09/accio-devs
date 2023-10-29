
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Addlocation from './Components/Addlocation'
import Main from './page/Main'
import MapContainer from './page/Map';

function App() {


  return (
    <>
      <Router>
      <MapContainer/> 
            <Routes>
              <Route exact path="/test" element={ <Addlocation/> } />
              
            </Routes>
          
        </Router>
    </>
  )
}

export default App
