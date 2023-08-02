const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/get-website-url', (req, res) => {
  // Process the request data (e.g., access token, user input, etc.)
  // For this example, we'll just use a dummy URL.
  const websiteUrl = 'https://studio.net/authentication?';

  res.json({ websiteUrl });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
