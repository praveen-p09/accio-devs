import React from 'react';

class IframeComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Embedded iframe example</h1>
        <iframe
          title="Embedded Content"
          width="560"
          height="315"
          src="https://www.google.com"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default IframeComponent;