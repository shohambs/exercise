import {Request, Response, Express} from "express";
import { ContactsHandler } from "./contactsHandler";

export class ContactsAPI {
    constructor(private api: Express, private contactsHandler: ContactsHandler) {}

    initializeRoutes() {
        this.api.get("/api/contacts", this.getContacts.bind(this));
        this.api.get("/api/contacts/:contactId", this.getContact.bind(this));
        this.api.post("/api/contacts", this.addContact.bind(this));
        this.api.put("/api/contacts", this.updateContact.bind(this));
        this.api.delete("/api/contacts/:contactId", this.deleteContact.bind(this));
    }

    getContacts(req: Request, res: Response) {
        res.send(this.contactsHandler.getContacts());
    }

    getContact(req: Request, res: Response) {
        if (req.params && req.params.contactId) {
            res.send(this.contactsHandler.getContacts(req.params.contactId));
        } else {
            res.sendStatus(404);
        }
    }

    addContact(req: Request, res: Response) {
        if (req.body && req.body.name && req.body.phone) {
            this.contactsHandler.addContact(req.body.name, req.body.phone);
            res.sendStatus(201);
        } else {
            res.sendStatus(400);
        }
    }

    updateContact(req: Request, res: Response) {
        if (req.body && req.body.contactId && req.body.name && req.body.phone) {
            if (this.contactsHandler.updateContact(req.body.id, req.body.name, req.body.phone)) {
                res.sendStatus(201);
            } else {
                res.sendStatus(404);
            }
        } else {
            res.sendStatus(400);
        }
    }

    deleteContact(req: Request, res: Response) {
        if (req.params && req.params.contactId) {
            if (this.contactsHandler.deleteContact(req.params.contactId)) {
                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
        } else {
            res.sendStatus(400);
        }
    }
}