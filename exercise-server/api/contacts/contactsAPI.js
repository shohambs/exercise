"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsAPI = void 0;
var ContactsAPI = /** @class */ (function () {
    function ContactsAPI(api, contactsHandler) {
        this.api = api;
        this.contactsHandler = contactsHandler;
    }
    ContactsAPI.prototype.initializeRoutes = function () {
        this.api.get("/api/contacts", this.getContacts);
        this.api.get("/api/contacts/:contactId", this.getContact);
        this.api.post("/api/contacts", this.addContact);
        this.api.put("/api/contacts", this.updateContact);
        this.api.delete("/api/contacts/:contactId", this.deleteContact);
    };
    ContactsAPI.prototype.getContacts = function (req, res) {
        res.send(this.contactsHandler.getContacts());
    };
    ContactsAPI.prototype.getContact = function (req, res) {
        if (req.params && req.params.contactId) {
            res.send(this.contactsHandler.getContacts(req.params.contactId));
        }
        else {
            res.sendStatus(404);
        }
    };
    ContactsAPI.prototype.addContact = function (req, res) {
        if (req.body && req.body.name && req.body.phone) {
            this.contactsHandler.addContact(req.body.name, req.body.phone);
            res.sendStatus(201);
        }
        else {
            res.sendStatus(400);
        }
    };
    ContactsAPI.prototype.updateContact = function (req, res) {
        if (req.body && req.body.contactId && req.body.name && req.body.phone) {
            if (this.contactsHandler.updateContact(req.body.id, req.body.name, req.body.phone)) {
                res.sendStatus(201);
            }
            else {
                res.sendStatus(404);
            }
        }
        else {
            res.sendStatus(400);
        }
    };
    ContactsAPI.prototype.deleteContact = function (req, res) {
        if (req.params && req.params.contactId) {
            if (this.contactsHandler.deleteContact(req.params.contactId)) {
                res.sendStatus(200);
            }
            else {
                res.sendStatus(404);
            }
        }
        else {
            res.sendStatus(400);
        }
    };
    return ContactsAPI;
}());
exports.ContactsAPI = ContactsAPI;
//# sourceMappingURL=contactsAPI.js.map