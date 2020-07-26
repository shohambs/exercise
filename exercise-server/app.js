"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dbConnection_1 = require("./db/dbConnection");
var contacts_1 = require("./db/contacts");
var contactsHandler_1 = require("./api/contacts/contactsHandler");
var contactsAPI_1 = require("./api/contacts/contactsAPI");
var app = express_1.default();
var PORT = 8080;
app.use(cors_1.default({ origin: "*" }));
// Initializing dependencies
var dbConnection = new dbConnection_1.DBConnection();
var contacts = new contacts_1.Contacts(dbConnection);
var contactsHandler = new contactsHandler_1.ContactsHandler(contacts);
var contactsAPI = new contactsAPI_1.ContactsAPI(app, contactsHandler);
contactsAPI.initializeRoutes();
// Start Server
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});
//# sourceMappingURL=app.js.map