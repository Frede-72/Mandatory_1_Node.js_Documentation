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
const redirectionInfo = readPage("public/pages/redirection/redirection-info.html");

const tools = readPage("public/pages/tools/tools.html");
const expressInfo = readPage("public/pages/tools/express/express-info.html");
const gitCommands = readPage("public/pages/tools/git/git-commands.html");
const nodeInfo = readPage("public/pages/tools/node/node-info.html");
const nodemonInfo = readPage("public/pages/tools/nodemon/nodemon-info.html");
const npmInfo = readPage("public/pages/tools/npm/npm-info.html"); 

export const frontpagePage = constructPage(frontpage);

export const codeConventionsPage = constructPage(codeConventions);
export const dataTypesPage = constructPage(dataTypes);
export const datePage = constructPage(date);
export const fetchPage = constructPage(fetch);
export const functionsPage = constructPage(functions);
export const loopsPage = constructPage(loops);

export const restApiInfoPage = constructPage(restApiInfo);
export const htmlInfoPage = constructPage(htmlInfo);
export const redirectionInfoPage = constructPage(redirectionInfo);

export const toolsPage = constructPage(tools);
export const expressInfoPage = constructPage(expressInfo);
export const gitCommandsPage = constructPage(gitCommands);
export const nodeInfoPage = constructPage(nodeInfo);
export const nodemonInfoPage = constructPage(nodemonInfo);
export const npmInfoPage = constructPage(npmInfo);
