import { readPage, constructPage } from "./templatingEngine.js";

const frontpage = readPage("public/pages/frontpage/index.html");
const tools = readPage("public/pages/tools/tools.html");
const dataTypes = readPage("public/pages/dataTypes/data-types.html");
const restApiInfo = readPage("public/pages/api/rest-api-info.html");

export const frontpagePage = constructPage(frontpage);
export const toolsPage = constructPage(tools);
export const dataTypesPage = constructPage(dataTypes);
export const restApiInfoPage = constructPage(restApiInfo);