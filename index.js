import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! come from replit boy');
});

app.listen(3000, () => {
  console.log('Express server initialized');
});