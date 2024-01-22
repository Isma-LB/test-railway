import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to test server");
});

app.listen(port);
console.log("Server on port 3000");
