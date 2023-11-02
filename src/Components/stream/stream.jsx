// import React from 'react';
// import './stream.css';

import React from 'react';

class VideoContainer extends React.Component {
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
      <div style={containerStyle}>
        <iframe
          title="Embedded Video"
          src="http://192.168.137.3:4000" // Replace with your actual URL
          frameBorder="0"
          style={iframeStyle}
          allowFullScreen
        ></iframe>
        <h1>Stream</h1>
      </div>
    );
  }
}

export default VideoContainer;



// export default IframeComponent;
