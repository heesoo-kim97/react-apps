import React, { useState } from 'react';

const PostForm = () => {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);

  console.log("name initially", name);
  console.log("response", response);

  const handleInputChange = (e) => {
    console.log("e", e);
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'body') {
      setBody(value);
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    /* 
    https://jsonplaceholder.typicode.com/posts 
    https://studio.bix5.net/authentication
    */

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        body: body
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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <input
            type="text"
            id="body"
            name="body"
            value={body}
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

export default PostForm;
