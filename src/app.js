import express from "express";
const app = express();

app.use(express.static("public"));

app.listen(8080, (error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log("Running on port:", 8080);
});