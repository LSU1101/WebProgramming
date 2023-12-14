const rabbit = {
    name: "tori",
    color: "white",
    size: null
};

const json = JSON.stringify(rabbit);
const obj = JSON.parse(json);

const fs = require("fs");

fs.writeFile("./obj.json", json, (err) => {
    if (err) {
        console.log("error");
    }

    fs.readFile("./obj.json", (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data.toString());
    })
});

console.log(obj);
console.log(obj.name, obj.color);
console.log(`이름: ${obj.name}, 색상: ${obj.color}`);