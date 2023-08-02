import React, { useState } from 'react';

const WebsiteLoader = () => {
  const [data, setData] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/get-website-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }), // Send the data in the request body
      });

      if (!response.ok) {
        throw new Error('Failed to get website URL');
      }

      const responseData = await response.json();
      setWebsiteUrl(responseData.websiteUrl);
    } catch (error) {
      console.error('Error fetching website URL:', error.message);
    }
  };

  return (
    <div>
      <h1>Website Loader</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="data">Enter Data:</label>
        <input
          type="text"
          id="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Load Website</button>
      </form>
      {websiteUrl && (
        <iframe
          title="Website"
          src={websiteUrl}
          width="100%"
          height="500px"
          frameBorder="0"
        />
      )}
    </div>
  );
};

export default WebsiteLoader;
