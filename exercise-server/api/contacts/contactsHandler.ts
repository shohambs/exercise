import { v1 as uuidv1 } from "uuid";

import { Contacts } from "../../db/contacts";
import { Contact } from "../../types/contact";

export class ContactsHandler {
    constructor(private contacts: Contacts) {}
    getContacts(id?: string): Contact[] {
        return this.contacts.getContacts(id);
    }

    addContact(name: string, phone: string) {
        const newContact: Contact = {
            ID: uuidv1(),
            name: name,
            phone: phone,
            creationDate: new Date(Date.now())
        }
        this.contacts.createContact(newContact);
    }

    updateContact(id: string, name: string, phone: string): boolean {
        const updatedContact: Contact = {
            ID: id,
            name: name,
            phone: phone,
            creationDate: new Date(Date.now())
        }
        return this.contacts.updateContact(updatedContact);
    }

    deleteContact(id: string): boolean {
        return this.contacts.deleteContact(id);
    }
}