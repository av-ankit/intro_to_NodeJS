const express = require("express");
const app = express();
const port = 8000;

// creating route '/' at port:8000
app.get("/", (req, res) => {
  res.status(200).json({ Name: "Simple Express APP" });
});

app.listen(port, () => {
  console.log(`App up and running at ${port}`);
});
