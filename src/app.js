import express from "express";
const app = express();

app.use(express.static("public"));

import { frontpagePage, toolsPage, dataTypesPage,
    restApiInfoPage, gitCommandsPage, nodeInfoPage,
    codeConventionsPage } from "./templatingEngine/pages.js";

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

app.get("/tools/git", (req, res) => {
    res.send(gitCommandsPage);
});

app.get("/tools/node", (req, res) => {
    res.send(nodeInfoPage);
});

app.get("/code-conventions", (req, res) => {
    res.send(codeConventionsPage);
});

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, (error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log("Running on port:", PORT);
});