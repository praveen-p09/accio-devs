import React,{useState,useEffect} from 'react'
import {addLocationtoDb,getCoordinate} from '../utilities/Firebase'

const Addlocation = () => {
    const [location, setlocation] = useState({lati:" ",longi:" "})
    const [locfromdb, setlocfromdb] = useState([]);

    const change=(e)=>{
        
        setlocation({...location,[e.target.name]:e.target.value})//triple dot indicates jo pahle se hai usko rahne do uske aage se sab aur add kar do
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        addLocationtoDb(location.lati,location.longi);
        console.log(location);
    }
    useEffect(() => {
        const getloca = async () => {
            const data = await getCoordinate();
            setlocfromdb(data);
        }
      getloca();
    }, [])
    
  return (
    <div>
    <form className="my-3">
        <div className="mb-3">
          <label htmlFor="lati" className="form-label">
             lati
          </label>
          <input
            type="text"
            className="form-control"
            id="lati"
            aria-describedby="emailHelp"
            name="lati"
            onChange={change}
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="longi" className="form-label">
            longi
          </label>
          <input
            type="text"
            className="form-control"
            id="longi"
            name="longi"
            onChange={change}
          />
        </div>

  
        <button type="submit" className="btn btn-primary" onClick={handlesubmit}>
          add location to db
        </button>
      </form>

      <div>
        displaying all latitude and longitude
       {locfromdb.map((location)=>{
        return (
            <div>
            <div>
                latitude={location.lati};
            </div>
             <div>
             longitude={location.longi};
         </div>
         </div>
        )
       })}
      </div>
    </div>
  )
}

export default Addlocation