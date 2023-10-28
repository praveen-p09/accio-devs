
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Addlocation from './Components/Addlocation'
import Main from './page/Main'

function App() {


  return (
    <>
      <Router>
          
            <Routes>
              <Route exact path="/test" element={ <Addlocation/> } />
              <Route exact path="/" element={ <Main/> } />
            </Routes>
          
        </Router>
    </>
  )
}

export default App
