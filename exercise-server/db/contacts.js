"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var _ = __importStar(require("lodash"));
var Contacts = /** @class */ (function () {
    function Contacts(dbConnection) {
        this.dbConnection = dbConnection;
        this.contactsContainer = dbConnection.readValues();
    }
    Contacts.prototype.createContact = function (contact) {
        this.contactsContainer.push(_.cloneDeep(contact));
        this.dbConnection.writeValues(this.contactsContainer);
    };
    Contacts.prototype.getContacts = function (id) {
        if (id) {
            var requestedContact = this.contactsContainer.find(function (contact) { return contact.ID === id; });
            return requestedContact ? [requestedContact] : [];
        }
        return _.cloneDeep(this.contactsContainer);
    };
    Contacts.prototype.updateContact = function (updatedContact) {
        var oldContactIndex = this.contactsContainer.findIndex(function (contact) { return contact.ID === updatedContact.ID; });
        if (oldContactIndex > -1) {
            this.contactsContainer[oldContactIndex] = _.cloneDeep(updatedContact);
            this.dbConnection.writeValues(this.contactsContainer);
            return true;
        }
        return false;
    };
    Contacts.prototype.deleteContact = function (id) {
        var oldLength = this.contactsContainer.length;
        this.contactsContainer = _.filter(this.contactsContainer, function (contact) { return contact.ID !== id; });
        if (oldLength === this.contactsContainer.length + 1) {
            this.dbConnection.writeValues(this.contactsContainer);
            return true;
        }
        return false;
    };
    return Contacts;
}());
exports.Contacts = Contacts;
//# sourceMappingURL=contacts.js.map