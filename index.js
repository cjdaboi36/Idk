const express = require('express');
const app = express();

app.use((req, res) => {
  res.json({ valid: true });
});

app.listen(80, () => console.log('listening on 80'));
