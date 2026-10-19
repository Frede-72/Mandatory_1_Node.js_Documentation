import { readPage, constructPage } from "./templatingEngine.js";

const frontpage = readPage("public/pages/frontpage/index.html");

const codeConventions = readPage("public/pages/code/codeConventions/code-conventions.html");
const dataTypes = readPage("public/pages/code/dataTypes/data-types.html");
const date = readPage("public/pages/code/date/date.html");
const fetch = readPage("public/pages/code/fetch/fetch.html");
const functions = readPage("public/pages/code/functions/functions.html");
const loops = readPage("public/pages/code/loops/loops.html");

const restApiInfo = readPage("public/pages/api/rest-api-info.html");
const htmlInfo = readPage("public/pages/html/html-info.html");

const tools = readPage("public/pages/tools/tools.html");
const expressInfo = readPage("public/pages/tools/express/express-info.html");
const gitCommands = readPage("public/pages/tools/git/git-commands.html");
const nodeInfo = readPage("public/pages/tools/node/node-info.html");
const nodemonInfo = readPage("public/pages/tools/nodemon/nodemon-info.html");
const npmInfo = readPage("public/pages/tools/npm/npm-info.html"); 

export const frontpagePage = constructPage(frontpage);

export const codeConventionsPage = constructPage(codeConventions, "Code Conventions");
export const dataTypesPage = constructPage(dataTypes, "Data Types");
export const datePage = constructPage(date, "Date");
export const fetchPage = constructPage(fetch, "Fetch");
export const functionsPage = constructPage(functions, "Functions");
export const loopsPage = constructPage(loops, "Loops");

export const restApiInfoPage = constructPage(restApiInfo, "REST API");
export const htmlInfoPage = constructPage(htmlInfo, "HTML");

export const toolsPage = constructPage(tools, "Tools");
export const expressInfoPage = constructPage(expressInfo, "Express");
export const gitCommandsPage = constructPage(gitCommands, "Git");
export const nodeInfoPage = constructPage(nodeInfo, "Node.js");
export const nodemonInfoPage = constructPage(nodemonInfo, "Nodedmon");
export const npmInfoPage = constructPage(npmInfo, "npm");
