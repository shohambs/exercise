import * as _ from "lodash";

import { DBConnection } from "./dbConnection";
import { Contact } from "../types/contact";

export class Contacts {
    private contactsContainer: Contact[];
    constructor(private dbConnection:DBConnection) {
        this.contactsContainer = dbConnection.readValues();
    }

    createContact(contact: Contact): void {
        this.contactsContainer.push(_.cloneDeep(contact));
        this.dbConnection.writeValues(this.contactsContainer);
    }

    getContacts(id?: string): Contact[] {
        if (id) {
            const requestedContact = this.contactsContainer.find((contact: Contact) => contact.ID === id);
            return requestedContact ? [requestedContact] : [];
        }
        return _.cloneDeep(this.contactsContainer);
    }

    updateContact(updatedContact: Contact): boolean {
        const oldContactIndex = this.contactsContainer.findIndex((contact: Contact) => contact.ID === updatedContact.ID);
        if (oldContactIndex > -1) {
            this.contactsContainer[oldContactIndex] = _.cloneDeep(updatedContact);
            this.dbConnection.writeValues(this.contactsContainer);
            return true;
        }
        return false;
    }

    deleteContact(id: string): boolean {
        const oldLength = this.contactsContainer.length;
        this.contactsContainer = _.filter(this.contactsContainer, (contact: Contact) => contact.ID !== id);
        if (oldLength === this.contactsContainer.length + 1) {
            this.dbConnection.writeValues(this.contactsContainer);
            return true;
        }
        return false;
    }
}