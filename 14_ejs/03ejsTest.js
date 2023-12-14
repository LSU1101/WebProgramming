const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, () => {
    console.log(`${port}번 포트 대기 중...`);
});

app.get("/", function (req, res) {
    res.render("03ejsTest.ejs");
});

app.get("/create", function (req, res) {
    const query = req.query;
    console.log(query);
    res.send("hi");
});

app.get("/create", (req, res) => {
    const name1 = req.body.content1;
    const name2 = req.body.content2;
    console.log(name1, name2);
    res.send("The result " + name1 + ", " + name2);
});