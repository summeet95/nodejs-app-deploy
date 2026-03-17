import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  return res.json({ msg: 'Hello from server! this is second changes' });
});

app.listen(PORT, () => {
  console.log(`server is up and running on PORT ${PORT}`);
});