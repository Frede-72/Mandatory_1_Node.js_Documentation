import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage/index.html"));
});

app.get("/tools", (req, res) => {
    res.sendFile(path.resolve("public/tools/tools.html"));
});

app.listen(8080, (error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log("Running on port:", 8080);
});