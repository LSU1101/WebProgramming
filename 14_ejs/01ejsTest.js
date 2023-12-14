const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, () => {
    console.log(`${port}번 포트 대기 중...`);
});

app.get("/", (req, res) => {
    res.render("01ejsTest.ejs", { message: "ejs를 테스트 합니다."});
});