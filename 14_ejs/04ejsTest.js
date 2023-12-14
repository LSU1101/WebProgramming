const express = require("express");
const app = express();
const port = 8000;

let arr = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, () => {
    console.log(`${port}번 포트 대기 중...`);
});

app.get("/", function (req, res) {
    res.render("04ejsTest.ejs", { arr });
});

app.get("/create", function (req, res) {
    const query = req.query;
    console.log(query);
    res.send("hi");
});

app.post("/create", function (req, res) {
    const { contents } = req.body;
    arr.push(contents);
    console.log(arr);
    res.redirect("/");
});