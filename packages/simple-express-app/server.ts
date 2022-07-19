import express from 'express';
const app = express();
const port = 3001;

app.get("/data", (req, res) => {
  res.setHeader('access-control-allow-origin', '*');
  res.json({ foo: "bar" });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});