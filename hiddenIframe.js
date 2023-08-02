/*

import React, { useRef } from 'react';

const HiddenIframe = () => {
  const iframeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the form data
    const formData = new FormData(e.target);

    // Construct the URL to load in the iframe
    const url = 'https://studio.bix5.net/authentication?' + formData.get('query');
    console.log(formData);
    console.log(url);
    // Load the URL in the hidden iframe
    iframeRef.current.src = url;
  };

  return (
    <div>
      <h2>Studio Access Test</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Enter accessToken" />
        <button type="submit">Enter</button>
      </form>
      {/* Hidden iframe */ /*}
      <iframe
        ref={iframeRef}
        title="Hidden iframe"
        height="800px"
        width="1400px"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}; */

import React, { useRef } from 'react';

const HiddenIframe = () => {
  const iframeRef = useRef(null);
  console.log("iframe", iframeRef)
  const accessToken = '';
  const dashId = '';
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve the form data
    const formData = new FormData(e.target);
    const accessToken = formData.get('query');

    // Send the access token to the server using a POST request
    try {
      const response = await fetch('https://studio.bix5.net/authentication?', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessToken }),
      });
      console.log(response);
      console.log(response.ok)
      if (!response.ok) {
        throw new Error('Failed to get website URL');
      }

      const responseData = await response.json();
      console.log("response", responseData);
      const url = responseData.url;

      // Load the URL in the hidden iframe
      iframeRef.current.src = url;
    } catch (error) {
      console.error('Error fetching website URL:', error.message);
    }
  };

  return (
    <div>
      <h2>Studio Access Test</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Enter accessToken" />
        <button type="submit">Enter</button>
      </form>
      {/* Hidden iframe */}
      <iframe
        ref={iframeRef}
        title="Hidden iframe"
        height="800px"
        width="1400px"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};

export default HiddenIframe;
