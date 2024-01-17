// import React from 'react';
// import './stream.css';

import React,{ useState }  from 'react';

class VideoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ipAddress: "http://localhost:4000/uploadvideo",
    };
  }
   change=(e)=>{
      this.setState({
        ipAddress: e.target.value,
      })
      console.log(this.state.ipAddress);
  }
  



  render() {
    const containerStyle = {
      width: '100vw',  // Set the width to 25% of the viewport width
      height: '100vh', // Set the height to 25% of the viewport width (maintaining a 1:1 aspect ratio)
      border: '1px solid #ccc',
      // overflow: 'hidden', // Hide any content overflow
    };

    const iframeStyle = {
      width: '100vw',
      height: '100vh',
    };
  
    return (
      <div>
      <div style={containerStyle}>
         <h1>Stream</h1>
         <form action="">
         <div> Enter your IpAddress : <input type="text" name='ip' required/></div>
         <div>Enter  Longitude : <input type="text" name='longi' required/></div>
         <div>Enter  Latitude : <input type="text" name='lati' required/></div>
         <div><button type="submit">Submit</button></div>
         </form>
         <iframe
          title="Embedded Video"
          src={this.state.ipAddress} // Replace with your actual URL
          frameBorder="0"
          style={iframeStyle}
          allowFullScreen
        ></iframe>
       
      </div>
      </div>
    );
  }
}

export default VideoContainer;



// export default IframeComponent;
