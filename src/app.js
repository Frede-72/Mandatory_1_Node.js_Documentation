import express from "express";
const app = express();

app.use(express.static("public"));

app.get("/", (res, req) => {
    res.sendFile(__dirname + "./public/index.html");
});

app.listen(8080, (error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log("Running on port:", 8080);
});