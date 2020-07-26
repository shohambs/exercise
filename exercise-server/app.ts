import express from "express";
import cors from "cors";
import { DBConnection } from "./db/dbConnection";
import { Contacts } from "./db/contacts";
import { ContactsHandler } from "./api/contacts/contactsHandler";
import { ContactsAPI } from "./api/contacts/contactsAPI";

const app = express();
const PORT = 8080;
app.use(cors({origin: "*"}));


// Initializing dependencies
const dbConnection = new DBConnection();
const contacts = new Contacts(dbConnection);
const contactsHandler = new ContactsHandler(contacts);
const contactsAPI = new ContactsAPI(app, contactsHandler);
contactsAPI.initializeRoutes();

// Start Server
app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})