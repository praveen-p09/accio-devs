import React,{useState} from 'react'
import './Uploadvideo.css';
const Uploadvideo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedVideo(file);

      // Generate a preview URL for the selected video
      const previewURL = URL.createObjectURL(file);
      setVideoPreview(previewURL);
    }
  };
  const [logi, setlogi] = useState("0");
  const [lati, setlati] = useState("0");

  const latichange=(e)=>{
    e.preventDefault();
    setlati(e.target.value);
    console.log(lati);
  }
  const longichange=(e)=>{
    e.preventDefault();
    setlogi(e.target.value);
    console.log(logi);
  }
  console.log(logi, lati);


  return (
    <div className='outer'>

      <h1>Video Uploader</h1>
      <form className='form' method='POST'>
         <label>Enter  Longitude : </label>
         <input type="text" value={logi} name='longi' onChange={longichange} required/>
         <label>Enter  Latitude : </label>
         <input type="text" value={lati} name='lati' onChange={latichange} required/>
         <input type="file" accept="video/*" onChange={handleFileChange} required/>
         <label>Enter URL of video : </label>
         <input type="url" name='url' placeholder='URL' required/>
         <button type="submit" >Submit</button>
      </form>

      {selectedVideo && (
        <div>
          <h2>Selected Video</h2>
          <p>File Name: {selectedVideo.name}</p>
          <p>File Size: {selectedVideo.size} bytes</p>

          {videoPreview && (
            <div>
              <h2>Video Preview</h2>
              <video width="400" controls>
                <source src={videoPreview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Uploadvideo