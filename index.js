import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! come from repliat boy');
});

app.listen(3000, () => {
  console.log('Express server initialized');
});