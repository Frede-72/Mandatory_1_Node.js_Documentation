import express from "express";
const app = express();

app.use(express.static("public"));

import { frontpagePage, toolsPage, dataTypesPage, restApiInfoPage } from "./templatingEngine/pages.js";

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/tools", (req, res) => {
    res.send(toolsPage);
});

app.get("/data-types", (req, res) => {
    res.send(dataTypesPage);
});

app.get("/rest-api-info", (req, res) => {
    res.send(restApiInfoPage);
});

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, (error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log("Running on port:", PORT);
});