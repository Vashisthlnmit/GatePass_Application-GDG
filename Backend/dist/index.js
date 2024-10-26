"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const app_1 = require("./app");
const PrismaClientSetupandDataBaseConnection_1 = require("./Helper/PrismaClientSetupandDataBaseConnection");
(0, dotenv_1.configDotenv)({
    path: "./.env"
});
function StartServer() {
    app_1.app.listen(process.env.PORT, () => {
        console.log("the server has started successfully");
    });
}
(0, PrismaClientSetupandDataBaseConnection_1.Dbconnection)()
    .then(() => {
    StartServer();
})
    .catch((err) => {
    console.log(err);
    process.exit(1);
});
