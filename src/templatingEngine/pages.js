import { readPage, constructPage } from "./templatingEngine.js";

const frontpage = readPage("public/pages/frontpage/index.html");
const tools = readPage("public/pages/tools/tools.html");
const dataTypes = readPage("public/pages/dataTypes/data-types.html");
const restApiInfo = readPage("public/pages/api/rest-api-info.html");
const gitCommands = readPage("public/pages/tools/git/git-commands.html");
const nodeInfo = readPage("public/pages/tools/node/node-info.html");
const codeConventions = readPage("public/pages/codeConventions/code-conventions.html");

export const frontpagePage = constructPage(frontpage);
export const toolsPage = constructPage(tools);
export const dataTypesPage = constructPage(dataTypes);
export const restApiInfoPage = constructPage(restApiInfo);
export const gitCommandsPage = constructPage(gitCommands);
export const nodeInfoPage = constructPage(nodeInfo);
export const codeConventionsPage = constructPage(codeConventions);