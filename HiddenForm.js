import React from 'react';

const HiddenForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const dashId = document.getElementById('dashId');
    const token = document.getElementById('token');

    console.log(dashId);
    console.log(token);

    const formData = new FormData();
    formData.append('url', '/dashboards/4127b3a24c8ae685b54c70b6c2ea7bac');
    formData.append('accessToken', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI0NTA4NjMyZGI0NjRiMjQxODJkZGY5NDk0YzQyMzQ3OCIsImlzcyI6IkJJWDUtU0VSVkVSIiwic3ViIjoiaHNraW05NyIsInVzZXJubyI6MTIsImdyb3VwcyI6IjFBQzAwRjExOTY4MDg3RDI5OENBNjUxODc3NTQxRkEwIiwicm9sZXMiOiIyRThCQTEwRjIyM0Q5RjlEOTg5M0VDMDNBODlCN0ZCRjE3MEY3NzUwMDU2QTMwQTJEOEExNUJDNDJFODE2QTlFRkYyQjE3QTU0MkQ3OUI4QzgzREJCOTdDRjk3RDMxRTMiLCJuYW1lIjoiMkUzNTNENEZDMDZERUJDNkVFMEY1ODUzMUJDMDBGNTciLCJ0eXBlIjoiQUNDRVNTIn0.g-rjtAg8wgYI6kartcEvJckRlq3XNl74oEQFh_MJ-cGLBDx-VMXfCnBNHG7afM-YvQcVOBU3PTR-vzaZybo-_g');

    console.log("formData", formData);

    for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

    const data = {
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI0NTA4NjMyZGI0NjRiMjQxODJkZGY5NDk0YzQyMzQ3OCIsImlzcyI6IkJJWDUtU0VSVkVSIiwic3ViIjoiaHNraW05NyIsInVzZXJubyI6MTIsImdyb3VwcyI6IjFBQzAwRjExOTY4MDg3RDI5OENBNjUxODc3NTQxRkEwIiwicm9sZXMiOiIyRThCQTEwRjIyM0Q5RjlEOTg5M0VDMDNBODlCN0ZCRjE3MEY3NzUwMDU2QTMwQTJEOEExNUJDNDJFODE2QTlFRkYyQjE3QTU0MkQ3OUI4QzgzREJCOTdDRjk3RDMxRTMiLCJuYW1lIjoiMkUzNTNENEZDMDZERUJDNkVFMEY1ODUzMUJDMDBGNTciLCJ0eXBlIjoiQUNDRVNTIn0.g-rjtAg8wgYI6kartcEvJckRlq3XNl74oEQFh_MJ-cGLBDx-VMXfCnBNHG7afM-YvQcVOBU3PTR-vzaZybo-_g'
    }

    fetch('https://studio.bix5.net/dashboards/4127b3a24c8ae685b54c70b6c2ea7bac', {
        method: 'POST',
        body: data,
        headers: {
            "Content-Type": "application/json"
          }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        })
      .catch( (error) => {
        console.log("There is Error:", error);
      })
  };

  return (
    <form id="myForm" onSubmit={handleSubmit}>
        <input id="dashId" type="hidden" name="dashId" value="" />
        <input id="token" type="hidden" name="secretToken" value="" />
        <input type="submit" value="Submit" />
      </form>
  );
};
 /*
import React from 'react';

class MyForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    // Get the form data, including the hidden input value
    const formData = new FormData(event.target);

    // Perform the POST request to the server
    fetch('/submit', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server if needed
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('Error:', error);
    });
  };

  render() {
    return (
      <form id="myForm" onSubmit={this.handleSubmit}>
        <input type="hidden" name="secretToken" value="mySecretToken123" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MyForm; */

export default HiddenForm;
