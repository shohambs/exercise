"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsHandler = void 0;
var uuid_1 = require("uuid");
var ContactsHandler = /** @class */ (function () {
    function ContactsHandler(contacts) {
        this.contacts = contacts;
    }
    ContactsHandler.prototype.getContacts = function (id) {
        return this.contacts.getContacts(id);
    };
    ContactsHandler.prototype.addContact = function (name, phone) {
        var newContact = {
            ID: uuid_1.v1(),
            name: name,
            phone: phone,
            creationDate: new Date(Date.now())
        };
        this.contacts.createContact(newContact);
    };
    ContactsHandler.prototype.updateContact = function (id, name, phone) {
        var updatedContact = {
            ID: id,
            name: name,
            phone: phone,
            creationDate: new Date(Date.now())
        };
        return this.contacts.updateContact(updatedContact);
    };
    ContactsHandler.prototype.deleteContact = function (id) {
        return this.contacts.deleteContact(id);
    };
    return ContactsHandler;
}());
exports.ContactsHandler = ContactsHandler;
//# sourceMappingURL=contactsHandler.js.map