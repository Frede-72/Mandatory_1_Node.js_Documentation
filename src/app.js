import express from "express";
const app = express();

app.use(express.static("public"));

import { frontpagePage, codeConventionsPage, dataTypesPage,
    datePage, fetchPage, functionsPage,
    loopsPage, restApiInfoPage, htmlInfoPage,
    toolsPage, expressInfoPage,gitCommandsPage,
    nodeInfoPage, nodemonInfoPage, npmInfoPage } from "./templatingEngine/pages.js";

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/code-conventions", (req, res) => {
    res.send(codeConventionsPage);
});

app.get("/data-types", (req, res) => {
    res.send(dataTypesPage);
});

app.get("/date", (req, res) => {
    res.send(datePage);
});

app.get("/fetch", (req, res) => {
    res.send(fetchPage);
});

app.get("/functions", (req, res) => {
    res.send(functionsPage);
});

app.get("/loops", (req, res) => {
    res.send(loopsPage);
});

app.get("/rest-api", (req, res) => {
    res.send(restApiInfoPage);
});

app.get("/html", (req, res) => {
    res.send(htmlInfoPage);
});

app.get("/tools", (req, res) => {
    res.send(toolsPage);
});

app.get("/tools/express", (req, res) => {
    res.send(expressInfoPage);
});

app.get("/tools/git", (req, res) => {
    res.send(gitCommandsPage);
});

app.get("/tools/node", (req, res) => {
    res.send(nodeInfoPage);
});

app.get("/tools/nodemon", (req, res) => {
    res.send(nodemonInfoPage);
});

app.get("/tools/npm", (req, res) => {
    res.send(npmInfoPage);
});

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, (error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log("Running on port:", PORT);
});