import express from "express";

const app = express();
const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Express with TypeScript!");
});

app.post("/test", (req, res) => {
  console.log(req.body, "/test");
  res.send("Hello, Express with TypeScript!");
});

app.post("/test/json", (req, res) => {
  console.log(req.body, "/test/json");
  res.json({ message: "Hello, Express with TypeScript!" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
