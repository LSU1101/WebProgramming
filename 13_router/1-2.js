const express = require("express");
const app = express();
const port = 8000;
let cnt = 0;

app.get("/", (req, res) => {
    cnt += 1;
    res.status(200);
    res.send(`${cnt} : Hello Node!`);
});

app.get("/users", (req, res) => {
    res.send("users parameter 요청");
});

app.listen(port, () => {
    console.log(`${port}번 포트 대기 중`);
});