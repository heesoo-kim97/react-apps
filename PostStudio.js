import React, { useState } from 'react';

const PostStudio = () => {
  const [dashId, setDash] = useState('');
  const [token, setToken] = useState('');
  const [response, setResponse] = useState(null);

  console.log("dashId initially:", dashId);
  console.log("token initially:", token);
    
  const handleInputChange = (e) => {
    console.log("e", e);
    const { name, value } = e.target;
    if (name === 'dashId') {
      setDash(value);
    } else if (name === 'token') {
      setToken(value);
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    fetch("https://studio.bix5.net/authentication?", {
      method: 'POST',
      body: JSON.stringify({
        url: dashId,
        accessToken: token
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setResponse(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dashId">dashId:</label>
          <input
            type="text"
            id="dashId"
            name="dashId"
            value={dashId}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="token">token:</label>
          <input
            type="text"
            id="token"
            name="token"
            value={token}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PostStudio;
